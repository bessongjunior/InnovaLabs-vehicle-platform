from flask import Flask, request, render_template
from flask_restx import API, Resource, fields
from flask_cors import CORS
import json

from .models import db

app = Flask(__name__)

db.init_app(app)
CORS(app)


