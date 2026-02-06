from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import bcrypt
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# MongoDB connection
client = MongoClient(os.getenv("MONGO_URI"))
db = client["twenty20"]
users = db["users"]

# TEST ROUTE (important for deployment check)
@app.route("/")
def home():
    return "Backend is running 🚀"

# REGISTER
@app.route("/api/register", methods=["POST"])
def register():
    data = request.json

    hashed = bcrypt.hashpw(
        data["password"].encode(),
        bcrypt.gensalt()
    )

    users.insert_one({
        "email": data["email"],
        "password": hashed
    })

    return jsonify({"message": "Registration successful"})

# LOGIN
@app.route("/api/login", methods=["POST"])
def login():
    data = request.json
    user = users.find_one({"email": data["email"]})

    if not user or not bcrypt.checkpw(
        data["password"].encode(),
        user["password"]
    ):
        return jsonify({"error": "Invalid credentials"}), 401

    return jsonify({
        "message": "Login successful",
        "email": user["email"]
    })

# IMPORTANT FOR RENDER DEPLOYMENT
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
