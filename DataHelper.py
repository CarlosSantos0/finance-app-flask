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


    def Get_Accounts(self):
        cur = self.database.connection.cursor()
        cur.execute('select Account.id ,CategoryAccount.name from Account,CategoryAccount where Account.category = CategoryAccount.id and Account.user_id = {}'.format(session['user']))
        data = cur.fetchall()
        return data

    def Get_Records(self):
        cur = self.database.connection.cursor()
        consulta = 'SELECT Record.account_id, CategoryRecord.name, CategoryRecord.type, Record.amount, Record.date from Record INNER JOIN CategoryRecord on CategoryRecord.id = Record.category WHERE Record.user_id = {} ORDER BY Record.id DESC' 
        cur.execute(consulta.format(session['user']))
        data = cur.fetchall()

        return data

    def Generate_SimpleReport(self):
        Earning = 0
        Expenses = 0

        for value in self.Get_Records():
            if(value[2] == 0):
                Earning += value[3]
            else:
                Expenses += value[3]

        return [round(Earning + Expenses, 2),round(Expenses,2), round(Earning,2)] 


    
