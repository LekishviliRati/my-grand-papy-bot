# GrandPy Bot π΄πΌπ­

---


## What is this program for ? 

GrandPy is a bot that would answer you like your (french) grandfather would do ! 
He will give to you an address with a story on it.

___


### *Install Python* β

- Python 3.9
  > Install Python : https://www.python.org/downloads/
  
  > Python Documentation : https://www.python.org/doc/
  
### *Virtualenv*

- **Install** : pip3 install virtualenv 
- **Create Virtualenv folder in the project** : virtualenv -p python3 env
- **Activate Virtualenv** : source env/bin/activate


### *Install the program* π»

- **Download or Clone the project** : https://github.com/LekishviliRati/GrandPy_Bot.git
- **Install requirements** : pip install -r requirements.txt
- **Install and activate Virtualenv**
- **Run** : main.py


### *Key Features* 

- User input Parser.
- Use Google Place's API.
- Use Wikimedia's API.
- Interaction with AJAX (to send questions and display answers).
- Nothing is saved. If the user loads the page again, all history is lost.

### *User Journey* π

- Click on website url : https://powerful-savannah-98354.herokuapp.com/
- Fill out the form field and submit it.
- Submitted message is displayed in chatbox.
- A spinner appears during loading period.
- Answer from GrandPy is displayed in chatbox.
- Google Map is updated.
- User can start again the same process.

### *Constraints*

- Documentation Driven Development.
- Tests using mocks for APIs.
- Test Driven Development.
- Responsive interface.
- Heroku.

### *Website*

-  https://powerful-savannah-98354.herokuapp.com/


### *Requirements*

- flask
  > Documentation : https://flask.palletsprojects.com/en/1.1.x/

- unicode 
  > Documentation : https://docs.python.org/3/howto/unicode.html

- flake8 
  > Documentation : https://flake8.pycqa.org/en/latest/

- requests 
  > Documentation : https://docs.python-requests.org/en/master/

- pytest 
  > Documentation : https://docs.pytest.org/en/stable/contents.html

- flask_cors 
  > Documentation : https://flask-cors.readthedocs.io/en/latest/

- python-decouple 
  > Documentation : https://pypi.org/project/python-decouple/