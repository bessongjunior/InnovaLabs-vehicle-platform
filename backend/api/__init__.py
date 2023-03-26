''' Init app instance and other used package '''
import json
from werkzeug.middleware.proxy_fix import ProxyFix
from flask_cors import CORS
from flask import Flask
from .config import BaseConfig  #ProductionConfig, TestingConfig, DevelopmentConfig, 
# from .models import db
# from .send_email_utils import mail
from .routes import email_sample

app = Flask(__name__)

app.wsgi_app = ProxyFix(app.wsgi_app)

# if os.environ.get('env') == 'PROD':
#     app_config = ProductionConfig
# elif os.environ.get('env') == 'TEST':
#     app_config = TestingConfig
# elif os.environ.get('env') == 'DEV':
#     app_config = DevelopmentConfig
# else:
#     app_config = BaseConfig
app.config.from_object('api.config.BaseConfig')
email_sample.init_app(app)
mail.init_app(app)
db.init_app(app)
CORS(app)

# Setup database
@app.before_first_request
def initialize_database():
    '''create db instance'''
    db.create_all()


@app.after_request
def after_request(response):
    """ Sends back a custom error with {"success", "msg"} format """

    if int(response.status_code) >= 204:
        response_data = json.loads(response.get_data())
        if "errors" in response_data:
            response_data = {"success": False,
                             "msg": list(response_data["errors"].items())[0][1]}
            response.set_data(json.dumps(response_data))
        response.headers.add('Content-Type', 'application/json')
    return response
