#API

from flask import Flask, request, jsonify
# from flask_cors import CORS
# from flask_sqlalchemy import SQLAlchemy
# from flask_migrate import Migrate
# from dotenv import load_dotenv
# import os
# load_dotenv()
# from .config import Config
# from .models import db, migrate
# from .routes import main_routes
# from .auth import auth_routes
# from .utils import error_handler

app = Flask(__name__)

@app.route('/runPrompt', methods=['POST'])
def run_prompt():
    prompt = request.json.get('prompt');
    
    return jsonify({"message": "Prompt received", "prompt": prompt})
    return {"members": ["member1", "member2", "member3"]} 

if __name__ == '__main__':
    app.run(debug=True)
