from flask import Flask, json, Response, request
from dbi import MongoDBI

app = Flask(__name__)

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

@app.route('/mongodb', methods=['GET'])
def mongo_read():
    data = request.json
    if data is None or data == {}:
        return error(400, "Include DB data in request body.")
    
    dbi = MongoDBI(data)
    response = dbi.read()
    return Response(
        response=json.dumps(response),
        status=200,
        mimetype='application/json'
    )

@app.route('/mongodb', methods=['POST'])
def mongo_write():
    data = request.json
    if data is None or data == {} or 'Document' not in data:
        return error(400, "Include DB data in request body.")
    
    dbi = MongoDBI(data)
    response = dbi.write(data)
    return Response(
        response=json.dumps(response),
        status=200,
        mimetype='application/json'
    )

if __name__ == '__main__':
    # Run Flask API (localhost:5001).
    app.run(debug=True, port=5001, host='localhost')