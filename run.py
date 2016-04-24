# from flask import Flask, request, redirect
# import twilio.twiml
#
# app = Flask(__name__)
#
# @app.route("/", methods=['GET', 'POST'])
# def hello_monkey():
#     """Respond to incoming calls with a simple text message."""
#
#     resp = twilio.twiml.Response()
#     with resp.message("Hello, Mobile Monkey") as m:
#         m.media("https://demo.twilio.com/owl.png")
#     return str(resp)
#
# @app.route("/nearme", methods=['GET', 'POST'])
# def nearme():
#     resp = twilio.twiml.Response()
#     natural_disaster = []
#     resp.message(natural_disaster[0] + " " + natural_disaster[1] + " miles away")
#     return str(resp)
#
# if __name__ == "__main__":
#     app.run(debug=True)

from flask import Flask, request, redirect, render_template
import twilio.twiml

app = Flask(__name__)

# Try adding your own number to this list!
callers = {
    "+19176693554": "Yasmeen"
}

@app.route("/map")
def map():
    return render_template("maps1.html")

@app.route("/", methods=['GET', 'POST'])
def hello_monkey():
    """Respond and greet the caller by name."""

    from_number = request.values.get('From', None)
    if from_number in callers:
        message = callers[from_number] + ", thanks for the message!"
    else:
        message = "Monkey, thanks for the message!"

    resp = twilio.twiml.Response()
    resp.message(message)

    return str(resp)

@app.route("/eonet")
def eonet():
    return render_template("eonet.html")

if __name__ == "__main__":
    app.run(debug=True)
