import os
from datetime import timedelta

BASE_DIR = os.path.dirname(os.path.realpath(__file__))

class BaseConfig():
    """This is the production configuration of the app"""
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(BASE_DIR, 'apidata.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = "2209350117fcac11d7781fc16b11380366a134b738eb387065dadcab2ea03f38"
    JWT_SECRET_KEY = "859465a0d357621A17095af0f1c27bfc78965"
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)
    SECURITY_PASSWORD_SALT= '123852951753654123789.8524'
    MAIL_SERVER = 'smtp.googlemail.com'
    MAIL_PORT = 587
    # MAIL_USE_TLS = True
    MAIL_USE_SSL = True
    # MAIL_USERNAME = "juniorbesong8@gmail.com"
    # MAIL_PASSWORD = ""
    MAIL_DEFAULT_SENDER = os.environ.get('EMAIL_USER')
    MAIL_PASSWORD = os.environ.get('EMAIL_PASS')

    # MAIL_USERNAME = os.environ.get('EMAIL_USER') e.g:support@movie-bag.com
    # MAIL_PASSWORD = os.environ.get('EMAIL_PASS')


class ProductionConfig(BaseConfig):
    # SQLALCHEMY_DATABASE_URI = <Production DB URL>
    PRODUCTION = True
    # SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(BASE_DIR, 'apidataprod.db')

class DevelopmentConfig(BaseConfig):
    DEBUG = True
    # SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(BASE_DIR, 'apidatadev.db') #<Development DB URL>
    SQLALCHEMY_ECHO = False

class TestingConfig(BaseConfig):
    TESTING = True
    # SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(BASE_DIR, 'apidatatest.db') #<Testing DB URL>
    SQLALCHEMY_ECHO = False