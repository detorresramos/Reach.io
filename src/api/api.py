from flask import Flask, json, Response, request
from dbi import MongoDBI
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

def error(status, message):
    return Response(
            response=json.dumps({ "Error": message }),
            status=400,
            mimetype='application/json'
        )

@app.route('/')
def base():
    return Response(
        response=json.dumps({"Status": "Ready"}),
        status=200,
        mimetype='application/json'
    )

@app.route('/mongodbusers', methods=['GET'])
@cross_origin()
def mongo_read_users():
    data = request.json
    print(data)

    if data is None or data == {}:
        return error(400, "Include DB data in request body.")
    
    dbi = MongoDBI(data)
    response = dbi.read_users()
    return Response(
        response=json.dumps(response),
        status=200,
        mimetype='application/json'
    )

@app.route('/mongodbmessages', methods=['GET'])
@cross_origin()
def mongo_read_messages():
    data = request.json
    if data is None or data == {}:
        return error(400, "Include DB data in request body.")
    
    dbi = MongoDBI(data)
    response = dbi.read_messages()
    return Response(
        response=json.dumps(response),
        status=200,
        mimetype='application/json'
    )

@app.route('/mongodb', methods=['POST'])
@cross_origin()
def mongo_write():
    data = request.json
    if data is None or data == {} or 'Document' not in data:
        return error(400, "Include DB data in request body.")
    
    dbi = MongoDBI(data)
    print(data)
    response = dbi.write(data)
    print(response)
    return Response(
        response=json.dumps(response),
        status=200,
        mimetype='application/json'
    )

if __name__ == '__main__':
    # Run Flask API (localhost:5001).
    app.run(debug=True, port=5001, host='localhost')