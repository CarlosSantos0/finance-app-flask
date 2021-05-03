from UserAuth import UserAuth
from DataHelper import Helper as DataHelper
from flask import Flask, render_template, request, redirect, url_for, flash
from flask.globals import request, session
from flask.helpers import flash
from flask_mysqldb import MySQL
import os

app = Flask(__name__)
app.config['MYSQL_HOST'] = '127.0.0.1'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'financeapp'
mysql = MySQL(app)


app.secret_key = os.urandom(25)


@app.route('/')
def index():
    return render_template('landing.html')

@app.route('/dashboard')
def dashboard():
    Helper =  DataHelper(mysql)
    CategoryRecord_Helper = Helper.Get_Category_Record()
    
    return render_template('dashboard.html', category_record = CategoryRecord_Helper)



@app.route('/register', methods = ['GET', 'POST'])
def register():
    
    Auth = UserAuth(mysql)
    if Auth.UserIsLogged(): return redirect(url_for('dashboard'))
    if request.method == 'POST':
        name = str(request.form['name'])
        email = str(request.form['email'])
        password = str(request.form['password'])


        if(Auth.Register(name, email, password)):
            return redirect(url_for('dashboard'))
        else:
            flash('Error')

    return render_template('register.html')


@app.route('/login', methods = ['GET', 'POST'])
def login(): 
    
   Auth = UserAuth(mysql)

   if Auth.UserIsLogged(): return redirect(url_for('dashboard'))
  
   if request.method == 'POST':
        email = str(request.form['email'])
        password = str(request.form['password'])
       

        if(Auth.Login(email, password)):
            return redirect(url_for('dashboard'))
        else:
            flash('Error')     

   return render_template('login.html')


@app.route('/records')
def records():
    return render_template('records.html')



@app.route('/add_account', methods=['POST'])
def add_account():
    if request.method == 'POST':
        category = str(request.form['category'])
        amount = str(request.form['amount'])
        print(category, amount)
        input()
        cur = mysql.connection.cursor()
        cur.execute('INSERT INTO ')


@app.route('/add_income', methods=['POST'])
def add_income():
    if request.method == 'POST':
        name = str(request.form['name'])
        cur = mysql.connection.cursor()
        # Temporaly
        cur.execute(
            'INSERT INTO record (name, price, person) VALUES ("{}", 300, "User")'.format(name))
        mysql.connection.commit()
        flash('Record registered')
        return redirect(url_for('index'))


@app.route('/add_record', methods=['POST'])
def add_record():
    if request.method == 'POST':
        x = request.form
        print(x)
        print('Ingresndo .....')

    return 'klk'


if __name__ == '__main__':
    app.run(port=3000, debug=True)
