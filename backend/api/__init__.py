from flask import Flask
from flask_cors import CORS
from flask_mail import Mail
import json

from .models import db

app = Flask(__name__)

mail = Mail()
mail.init_app(app)
db.init_app(app)
CORS(app)


