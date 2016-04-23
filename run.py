from flask import Flask, request, redirect
import twilio.twiml

app = Flask(__name__)

@app.route("/", methods=['GET', 'POST'])
def hello_monkey():
    """Respond to incoming calls with a simple text message."""

    resp = twilio.twiml.Response()
    with resp.message("Hello, Mobile Monkey") as m:
        m.media("https://demo.twilio.com/owl.png")
    return str(resp)

@app.route("/nearme", methods=['GET', 'POST'])
def nearme():
    resp = twilio.twiml.Response()
    natural_disaster = []
    resp.message(natural_disaster[0] + " " + natural_disaster[1] + " miles away")
    return str(resp)

if __name__ == "__main__":
    app.run(debug=True)
