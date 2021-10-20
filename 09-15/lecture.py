# Word Summary
# Write a word_histogram function that takes a paragraph of text as its input, and returns a dictionary containing the tally of how many times each word in the paragraph was used in the text. For example:

# >>> word_histogram('To be or not to be')   ['To', 'be', 'or', 'not', 'to', 'be']

# {
# 'To': 2,
# 'be': 2
# 'or': 1
# 'not':1
#  }

# #             013456789... 
# paragraph = ("To be or not to be")

# # for-loop to cycle through characters in the paragraph
#     # if-statement to determine if charater is a space, comma, period, hyphen...or not

# i = 0
# for char in paragraph:
#     if char in alphabet:
        
#         i += 1
#     else:
#         i += 1





# Word Summary
# Write a word_histogram function that takes a paragraph of text as its input, and returns a dictionary containing the tally of how many times each word in the paragraph was used in the text. For example:

# >>> word_histogram('To be or not to be, that is the question - Friends')   ['To', 'be', 'or', 'not', 'to', 'be']

# {
# 'To': 2,
# 'be': 2
# 'or': 1
# 'not':1
#  }

# alphabet = ("abcdefghijklmnopqrstuvwxyz ")

# paragraph = ('To be or not to be, is the question - Friends? This is a test to see if our friends work and to be is something we want to say?')

# lower_paragraph = paragraph.lower()

# def word_summary(paragraph):
#     word_histogram = {}
#     word_list1 = []
#     for char in paragraph.lower():
#         if char in alphabet:
#             word_list1.append(char)
#     joined_paragraph = "".join(word_list1)
#     word_list2 = joined_paragraph.split()
#     for word in word_list2:
#         if word in word_histogram:
#             word_histogram[word] += 1
#         else:
#             word_histogram[word] = 1
#     return word_histogram

# histogram = word_summary(lower_paragraph)

# print(histogram)

# for key, value in histogram:
#     print(f"{key}: {value}")



# AND NOW THE LECTURE NOTES

# class Student:
#     # constructor
#     def __init__(self, first_name, last_name):
#         # print("I am a constructor")
#         self.first_name = first_name
#         self.last_name = last_name

#     # function = method
#     def say_hello(self):
#         print(f"Hello world! My name is {self.first_name} {self.last_name}.")

# matt = Student("Matt", "Fisher") # instantiated the object
# matt.say_hello()

# victoria = Student("Victoria", "Walker")
# # victoria.say_hello()

# stephen = Student("Stephen", "Doty")
# # stephen.say_hello()

# mercer = Student("Mercer", "Mahaffey")
# # mercer.say_hello()


# 1. Create an empty class called "Student"

# 2. Create 5 students objects (instances of the class "Student") of "Student" types

# 3. Create a "greeting" method inside of the class "Student" class that takes as a parameter "name". The return of the method should be "Good morning {name}"

# 5. Create a constructor for the Student class.

    # 5a. Create a print statement inside of the constructor
    # 5b. Run your lab.py again and you should see a print statement for each student object That you created

# 6 Pass in "name" as a parameter to your Student constructor.
    # 6b. Create an instance variable for name
    # 6c. Refactor your greeting method by removing the name parameter and adding a "self" in front of the printed "name" variable in the return statement 
    # 6d. Refactor your Student objects by passing in the name as an argument when the object gets instantiated

# class Student:
#     def __init__(self, name):
#         self.name = name
#         print(f"This is in the constructor function.")
    
#     def greeting(self):
#         print(f"Good morning {self.name}.")

# steve = Student("Steve")
# steve.greeting()

# tim = Student("Tim")
# tim.greeting()

# rebekah = Student("Rebekah")

# sarah = Student("Sarah")

# clark = Student("Clark")






# class Button:
#     def __init__(self, color, name):
#         self.color = color
#         self.click = 0
#         self.name = name
    
#     def show_info(self):
#         print(f"Color: {self.color} Click count: {self.click} Name: {self.name}.")

#     def on_click(self):
#         self.click += 1
#         print(f"Number of clicks: {self.click}.")

# nav_button = Button("yellow", "nav")
# help_button = Button("red", "help")
# purchase_button = Button("blue", "purchase")

# nav_button.show_info()
# help_button.show_info()
# purchase_button.show_info()

# nav_button.on_click()
# nav_button.on_click()
# nav_button.on_click()

# help_button.on_click()

# purchase_button.on_click()
# purchase_button.on_click()

# nav_button.show_info()
# help_button.show_info()
# purchase_button.show_info()

# Instantiate an instance object of Person with name of 'Sonny', email of 'sonny@hotmail.com', and phone of '483-485-4948', store it in the variable sonny.
# Instantiate another person with the name of 'Jordan', email of 'jordan@aol.com', and phone of '495-586-3456', store it in the variable 'jordan'.
# Have sonny greet jordan using the greet method.
# Have jordan greet sonny using the greet method.
# Write a print statement to print the contact info (email and phone) of Sonny.
# Write another print statement to print the contact info of Jordan.

# class Person: 
#     def __init__(self, name, email, phone):
#         self.name = name
#         self.email = email
#         self.phone = phone
#     def greet(self, other_person):
#         print(f"Hello {other_person.name}, my name is {self.name}.")

# sonny = Person("Sonny", "sonny@hotmail.com", "483-485-4948")

# jordan = Person("Jordan", "jordan@aol.com", "495-586-3456")

# # print(f"{jordan.name} {jordan.email} {jordan.phone}")
# # print(f"{sonny.name} {sonny.email} {sonny.phone}")

# sonny.greet(jordan)

# print(f"Nice to meet you {sonny.name}. Here's my email and phone number: {jordan.email} and {jordan.phone}")

# jordan.greet(sonny)

# print(f"Nice to meet you {jordan.name}. Here's my email and phone number: {sonny.email} and {sonny.phone}")

# class Test:
#     def __init__(self):
#         self._a = "a" # consider this private
#         self.__b = "b"
    
#     def print_private_var(self):
#         print(f"{self.__b}")

# my_test = Test()

# my_test.print_private_var()
# # print(my_test.__b)

# class Our_String(str):
#     def __init__(self, word):
#         self.word = word
    
#     def reverse(self):
#         rev_string = ""
#         for char in self.word:
#             rev_string = char + rev_string
#         return rev_string

# my_string = Our_String("hello")

# print(my_string.capitalize())

# print(my_string.reverse())


# class Car:
#     def __init__(self, make, model, color):
#         self.make = make
#         self.model = model
#         self.color = color

#     def carDetails(self):
#         print("Here are the details of this car.")

#     def carDetails(self):
#         print(f"{self.make} {self.color} {self.model}")

# class Hybrid(Car):
#     def __init__(self, mpg, make, model, color):
#         self.mpg = mpg
#         super(Hybrid, self).__init__(make, model, color)

#     def carType(self):
#         print("I am a hybrid car.")

# class Electric(Car):
#     def __init__(self, battery, make, model, color):
#         self.battery = battery
#         super(Electric, self).__init__(make, model, color)

# prius = Hybrid(34, "toyota", "prius", "lime green")

# tesla = Electric(12, "tesla", "model-s", "purple")

# tesla.carDetails()


# class Student:
#     def __init__(self, first_name, last_name, campus):
#         self.first_name = first_name
#         self.last_name = last_name
#         self.campus = campus

#     def printStudent(self):
#         print(f"{self.first_name} {self.last_name} campus: {self.campus}")
    
#     def print_first_name(self):
#         print(self.first_name)

# class Campus:
#     def __init__(self):
#         self.students = [] # holds all the students

#     def add_student(self, first_name, last_name, campus):
#         student_obj = Student(first_name, last_name, campus)
#         self.students.append(student_obj)

#     def show_current_students(self):
#         for student_obj in self.students:
#             student_obj.printStudent() # uses method we built under Student class
#             # print(f"{student_obj.first_name} {student_obj.last_name} {student_obj.campus}")
    
#     def get_number_of_students(self):
#         print(len(self.students))

#     def remove_student_by_name(self, first_name):
#         for student_obj in self.students:
#             if student_obj.first_name == first_name:
#                 del_index = self.students.index(student_obj)
#                 del self.students[del_index]

# atlanta = Campus()

# atlanta.add_student("Emily", "Ye", "Atlanta")
# atlanta.add_student("Hunter", "Hutchisson", "Atlanta")
# atlanta.add_student("James", "Ivy", "Atlanta")

# atlanta.show_current_students()
# print()
# atlanta.remove_student_by_name("Emily")
# atlanta.show_current_students()


# Do this exercise tonight (09/15/21)

class Account_Holder:
    def __init__(self, first_name, account_type, status, balance):
        self.first_name = first_name
        self.account_type = account_type
        self.status = status
        self.balance = balance
    
    def show_account_holders(self):
        print(f"{self.first_name}, {self.account_type}, {self.status}, ${self.balance}")
        


class Bank:
    def __init__(self, name, address):
        self.name = name 
        self.address = address
        self.account_list = []

    def open_account(self, first_name, account_type, status, balance):
        new_account = Account_Holder(first_name, account_type, status, balance)
        self.account_list.append(new_account)
    
    def show_all_accounts(self):
        index = 0
        for account_obj in self.account_list:
            print(f"{index + 1} {account_obj.first_name}")
            index += 1
        
        self.show_account_details()
    
    def show_account_details(self):
        member_ID = int(input(f"Select member to show details. "))

        id = member_ID - 1

        print(f"{self.account_list[id].first_name}, {self.account_list[id].account_type}, {self.account_list[id].status}, ${self.account_list[id].balance}")

# open new account
wells_fargo = Bank("Wells Fargo", "1223 Sesame Stree")

wells_fargo.open_account("Big Bird", "checking", "open", "4300")
wells_fargo.open_account("Elmo", "savings", "open", "7500")

# show account holder  
wells_fargo.show_all_accounts()

# show bank balance for account holder 

# show total bank deposits or bank balance




# Veronica's code

# class AccountHolder:
#     def __init__(self, fName, accountType, status, balance):
#         self.fName = fName
#         self.accountType = accountType
#         self.status = status
#         self.balance = balance


# class Bank:
#     def __init__(self, name, address):
#         self.name = name
#         self.address = address
#         self.accounts = []  #[obj, obj,] del self.accounts[index]

#     # open new account
#     def newAccount(self, fName, accountType, status, balance):
        
#         newMember = AccountHolder(fName, accountType, status, balance)
#         self.accounts.append(newMember)
        
#     def showAllMembers(self):
        
#         index = 1 
#         for memberObj in self.accounts: 
#             print(f'{index} {memberObj.fName} ')
#             index+=1
        
#         self.showAccount()
            
#     def showAccount(self): 
#         memberID = int(input(f'Select member to show details'))
        
#         id = memberID - 1 
        
#         print(f'{self.accounts[id].fName}  {self.accounts[id].accountType} {self.accounts[id].status} {self.accounts[id].balance} ')
        
    
#     def showTotalBankDeposits(self): 
#         balance = 0 
        
#         for member in self.accounts: 
            
#             balance += member.balance
            
#         print(f'Bank Balance : {balance}')
        
    
#     def searchByName(self, name): 
        
#         isMember = False 
        
#         for member in self.accounts: 
#             if member.fName == name: 
#                 isMember = true
        
#         return isMember
    
#     def highestAccountHolder(self): 
        
#         deposit = 0 
#         name = ""
        
#         for member in self.accounts: 
            
#             if member.balance > deposit : 
#                 deposit = member.balance 
#                 name = member.fName 
                
        
#         print(f'Highest account holder: {name} {deposit}')
        

#     # show account holder

#     # show bank balance for account holder

#     # show total bank deposits or bank balance

# nationalBank = Bank('Wells Fargo', '123 sesame st')
                    
# nationalBank.newAccount('Matt', 'savings', 'open', 500)

# nationalBank.newAccount('Victoria', 'checking', 'open', 1000)

# nationalBank.newAccount('Andrew', 'checking', 'open', 400)
# nationalBank.newAccount('Emily', 'checking', 'open', 4400)

# nationalBank.showAllMembers()

# nationalBank.showTotalBankDeposits()

# nationalBank.highestAccountHolder()