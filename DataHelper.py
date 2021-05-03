from flask import session


class Helper():
    def __init__(self, database):
        self.database = database

    def Get_Category_Record(self):
        cur = self.database.connection.cursor()
        cur.execute('SELECT * FROM CategoryRecord')
        data = cur.fetchall()
        return data

    def Get_Category_Account(self):
        cur = self.database.connection.cursor()
        cur.execute('SELECT * FROM CategoryAccount')
        data = cur.fetchall()
        return data
