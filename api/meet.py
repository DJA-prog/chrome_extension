from flask import Flask, request
from datetime import date
from flask_cors import CORS
import ssl

app = Flask(__name__)
CORS(app)

def write_attendants_to_file(participants):
    today = date.today().strftime("%Y-%m-%d")
    filename = f"attendees_{today}.txt"

    with open(filename, "a+") as file:
        file.seek(0)
        existing_attendants = set(file.read().splitlines())
        new_attendants = participants - existing_attendants
        file.write('\n'.join(new_attendants))
        file.write('\n')

@app.route('/meet/participants', methods=['POST'])
def receive_attendants():
    data = request.get_json()
    participants = set(data['participants'])
    print(participants)  # Replace with your desired logic
    write_attendants_to_file(participants)

    return 'Data received successfully'

if __name__ == '__main__':
    context = ssl.SSLContext(ssl.PROTOCOL_TLSv1_2)
    context.load_cert_chain('ssl_certificate.crt', 'ssl_private_key.key')
    app.run(host='dino-dev', port=5000, ssl_context=context)
