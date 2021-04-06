from flask import Flask, render_template, request, redirect, url_for, flash
from flask.globals import request
from flask.helpers import flash
from flask_mysqldb import MySQL

app = Flask(__name__)
app.config['MYSQL_HOST'] = '127.0.0.1'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'financeapp'
mysql = MySQL(app)


app.secret_key = 'mysecretkey'


@app.route('/')
def index():
    return render_template('dashboard.html')


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


if __name__ == '__main__':
    app.run(port=3000, debug=True)
