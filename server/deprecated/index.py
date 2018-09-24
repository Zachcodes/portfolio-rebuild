from flask import Flask 
from flask_cors import CORS
from flask import request
from dotenv import load_dotenv
load_dotenv() 
import os 
HOST_EMAIL = os.getenv("HOST_EMAIL")
HOST_PASSWORD = os.getenv("HOST_PASSWORD")
DATABASE_URL = os.getenv("DATABASE_URL")
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
# import psycopg2

# conn = psycopg2.connect(DATABASE_URL)
# cur = conn.cursor()
# cur.execute("CREATE TABLE test (id serial PRIMARY KEY, num integer, data varchar);")
# cur.execute("INSERT INTO test (num, data) VALUES (%s, %s)", (100, "abc'def"))
# conn.commit()
s = smtplib.SMTP(host='smtp.gmail.com', port=587)
s.starttls()
s.login(HOST_EMAIL, HOST_PASSWORD)

app = Flask(__name__)
CORS(app)

@app.route('/api/submitContact', methods=['POST'])
def handle_submit():
    jsonData = request.get_json()
    # name = jsonData['name']
    # email = jsonData['email']
    # message = jsonData['message']
    # msg = MIMEMultipart()
    # msg['From'] = email;
    # msg['To'] = HOST_EMAIL;
    # msg['Subject'] = email

    # msg.attach(MIMEText(message, 'plain'))

    # s.send_message(msg)

    # del msg;
    return 'Successfully sent message'

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)
    