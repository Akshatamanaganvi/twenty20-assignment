from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import bcrypt
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

client = MongoClient(os.getenv("MONGO_URI"))
db = client["twenty20"]
users = db["users"]

@app.route("/api/register", methods=["POST"])
def register():
    data = request.json
    hashed = bcrypt.hashpw(data["password"].encode(), bcrypt.gensalt())

    users.insert_one({
        "email": data["email"],
        "password": hashed
    })

    return jsonify({"message": "Registration successful"})

@app.route("/api/login", methods=["POST"])
def login():
    data = request.json
    user = users.find_one({"email": data["email"]})

    if not user or not bcrypt.checkpw(
        data["password"].encode(), user["password"]
    ):
        return jsonify({"error": "Invalid credentials"})

    return jsonify({
        "message": "Login successful",
        "email": user["email"]
    })

if __name__ == "__main__":
    app.run(debug=True)
