from flask import Flask 
from flask_cors import CORS
from flask import request
from dotenv import load_dotenv
load_dotenv() 
import os 
HOST_EMAIL = os.getenv("HOST_EMAIL")
HOST_PASSWORD = os.getenv("HOST_PASSWORD")
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText


s = smtplib.SMTP(host='smtp.gmail.com', port=587)
s.starttls()
s.login(HOST_EMAIL, HOST_PASSWORD)

app = Flask(__name__)
CORS(app)

@app.route('/api/submitContact', methods=['POST'])
def handle_submit():
    jsonData = request.get_json()
    name = jsonData['name']
    email = jsonData['email']
    message = jsonData['message']
    msg = MIMEMultipart()
    msg['From'] = email;
    msg['To'] = HOST_EMAIL;
    msg['Subject'] = email

    msg.attach(MIMEText(message, 'plain'))

    s.send_message(msg)

    del msg;
    return 'Successfully sent message'

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)
    