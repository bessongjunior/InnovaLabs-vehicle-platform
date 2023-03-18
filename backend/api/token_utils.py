from .config import BaseConfig
from itsdangerous import URLSafeTimedSerializer

def generate_verification_token(email):
    serializer = URLSafeTimedSerializer(BaseConfig.SECRET_KEY)
    return serializer.dumps(email, salt=BaseConfig.SECURITY_PASSWORD_SALT)

def confirm_verification_token(token, expiration=3600):
    serializer = URLSafeTimedSerializer(BaseConfig.SECRET_KEY)
    try:
        email = serializer.loads(token,salt=BaseConfig.SECURITY_PASSWORD_SALT,max_age=expiration)
    except Exception as e :
        return e
    return email