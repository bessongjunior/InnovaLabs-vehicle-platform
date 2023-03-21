from flask import render_template
from flask_mail import Mail, Message 
from .config import BaseConfig


mail = Mail()

def send_email(to, subject, template):
            msg = Message(
            subject,
            recipients=[to],
            html=render_template("reset-sample.html"),
            sender=BaseConfig.config['MAIL_DEFAULT_SENDER'] )
            mail.send(msg)