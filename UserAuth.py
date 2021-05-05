from flask import session


class UserAuth():

    def __init__(self, database):
        self.database = database

    def Register(self, name, email, password):
        if(not self.UserExist(email)):  
            cur = self.database.connection.cursor()
            cur.execute(
                'INSERT INTO User (name, email, password) VALUES ("{}", "{}", "{}")'.format(name, email, password))
            self.database.connection.commit()        
            self.Login(email, password)    
            return True
        

    def UserExist(self, email):
        cur = self.database.connection.cursor()
        cur.execute(
            'SELECT * FROM User where email = "{}"'.format(email))
        data = cur.fetchall()
        self.database.connection.commit()
        
        if(data):
            return True
       

    def Login(self, email, password):
            cur = self.database.connection.cursor()
            cur.execute(
            'SELECT * FROM User where email = "{}" and password = "{}"'
            .format(email, password))
            data = cur.fetchall()
            self.database.connection.commit()

            if data:
                session['user'] = data[0][0]
                return True

    def UserIsLogged(self):
            try:
                if(session['user']):
                    return True
            except:
                return False
                
    def SaveRecord(self, category, amount, account, date, details): 
            cur = self.database.connection.cursor()
            cur.execute(
                'INSERT INTO Record (user_id, account_id, category, amount, date, details) VALUES ({}, {}, {}, {}, "{}", "{}")'.format(session['user'], account, category, amount, date, details))
            self.database.connection.commit()
            return True

    def SaveAccount(self, category, amount): 
            cur = self.database.connection.cursor()
            cur.execute('INSERT INTO Account (user_id ,category, amount) VALUES ({},{},{})'.format(session['user'], category, amount))
            self.database.connection.commit()
            return True




   

            