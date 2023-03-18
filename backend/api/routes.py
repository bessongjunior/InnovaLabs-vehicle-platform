from flask import Flask, request, render_template
from flask_restx import API, Resource, fields, Namespace
from functools import wraps
from api.models import db, Users, JWTTokenBlocklist
from datetime import datetime, timezone, timedelta
from api.config import BaseConfig
from api.token_utils import confirm_verification_token, generate_verification_token
import jwt



email_sample = Namespace("mails", description="Resets and confirm email related operations")

# sign-in model for api requests

signup_model = email_sample.model('SignUpModel', {"username": fields.String(required=True, min_length=2, max_length=32),
                                              "email": fields.String(required=True, min_length=4, max_length=64),
                                              "password": fields.String(required=True, min_length=4, max_length=16)
                                              })

login_model = email_sample.model('LoginModel', {"email": fields.String(required=True, min_length=4, max_length=64),
                                            "password": fields.String(required=True, min_length=4, max_length=16)
                                            })


def token_required(f):

    @wraps(f)
    def decorator(*args, **kwargs):
        """Decorator for jwt, ensures payloads"""
        token = None

        if "authorization" in request.headers:
            token = request.headers["authorization"]

        if not token:
            return {"success": False, "msg": "Valid JWT token is missing"}, 400

        try:
            data = jwt.decode(token, BaseConfig.SECRET_KEY, algorithms=["HS256"])
            current_user = Users.get_by_email(data["email"])

            if not current_user:
                return {"success": False,
                        "msg": "Sorry. Wrong auth token. This user does not exist."}, 400

            token_expired = db.session.query(JWTTokenBlocklist.id).filter_by(jwt_token=token).scalar()

            if token_expired is not None:
                return {"success": False, "msg": "Token revoked."}, 400

            if not current_user.check_jwt_auth_active():
                return {"success": False, "msg": "Token expired."}, 400

        except:
            return {"success": False, "msg": "Token is invalid"}, 400

        return f(current_user, *args, **kwargs)

    return decorator


@email_sample.route('/api/register')
class Register(Resource):
    """
       Creates a new user by taking 'signup_model' input
    """

    @email_sample.expect(signup_model, validate=True)
    def post(self):

        req_data = request.get_json()

        _username = req_data.get("username")
        _email = req_data.get("email")
        _password = req_data.get("password")

        user_exists = Users.get_by_email(_email)
        if user_exists:
            return {"success": False,
                    "msg": "Email already taken"}, 400

        new_user = Users(username=_username, email=_email)

        new_user.set_password(_password)
        new_user.save()

        return {"success": True,
                "userID": new_user.id,
                "msg": "The user was successfully registered"}, 200


@email_sample.route('/api/login')
class Login(Resource):
    """
       Login user by taking 'login_model' input and return JWT token
    """

    @email_sample.expect(login_model, validate=True)
    def post(self):

        if not request.is_json():
            return {"success": False,
                    "msg": "Bad Request."}, 400
        
        req_data = request.get_json()

        _email = req_data.get("email")
        _password = req_data.get("password")

        user_exists = Users.get_by_email(_email)

        if not user_exists:
            return {"success": False,
                    "msg": "This email does not exist."}, 400

        if not user_exists.check_password(_password):
            return {"success": False,
                    "msg": "Wrong credentials."}, 400

        # create access token uwing JWT
        token = jwt.encode({'email': _email, 'exp': datetime.utcnow() + timedelta(minutes=30)}, BaseConfig.SECRET_KEY)

        user_exists.set_jwt_auth_active(True)
        user_exists.save()

        return {"success": True,
                "token": token,
                "user": user_exists.toJSON()}, 200
    

@email_sample.route('/api/logout')
class LogoutUser(Resource):
    """
       Logs out User using 'logout_model' input
    """

    @token_required
    def post(self, current_user):

        _jwt_token = request.headers["authorization"]

        jwt_block = JWTTokenBlocklist(jwt_token=_jwt_token, created_at=datetime.now(timezone.utc))
        jwt_block.save()

        self.set_jwt_auth_active(False)
        self.save()

@email_sample.route('/confirm/<token>', methods=['GET'])
class VerifyUser(Resource):
    '''Verify and confirm user email'''
    def Get(self, token):
        try:
            email = confirm_verification_token(token)
        except:
            return {"success": False,
                    "msg": "Email verification failed! Try again"}, 400
        
        user = Users.query.filter_by(email=email).first_or_404()
        if user.isVerified:
            # return response_with(resp. INVALID_INPUT_422)
            return {"sucess" : False, "msg": "Email already verified"}, 400
        else:
            user.isVerified = True
            db.session.add(user)
            db.session.commit()
        return {"success": True,
                'msg': 'E-mail verified, you can proceed to login now.'}, 200