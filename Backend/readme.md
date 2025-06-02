# navigate to backen folder

cd Backend

# Create a virtual environment

python -m venv venv
venv\Scripts\activate

# Install the dependencies

pip install -r requirements.txt

# to run the backend server

python manage.py runserver

# server runs by default at

http://localhost:8000/

# proxy in package.json can be removed later (it doesn't work)
