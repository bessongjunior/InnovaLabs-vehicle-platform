'''send mail utils functionalities'''
from flask import render_template
from flask_mail import Mail, Message 
from api.config import BaseConfig

mail = Mail()

def send_email(to, subject, template):
    '''send mail function, used to send email confirmation to user who reg for the 1st time'''
    msg = Message(
        subject,
        recipients=[to],
        html=render_template("reset-sample.html"),
        sender = BaseConfig.MAIL_DEFAULT_SENDER )
    mail.send(msg)