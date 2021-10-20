# Strings

# "Stephen"

# 'Lino'

# "I'm a new developer"

# 'I\'m a new developer'

# """We the People of the United States, in Order to form a more perfect Union, 
# establishJustice, insure domestic Tranquility, provide for the common defence, 
# promote the general Welfare, and secure the Blessings of Liberty to ourselves and 
# our Posterity,do ordain and establish this Constitution for the United States of America."""

# print("Hello World" + "WHAT?")

# print(3 + 5)

# print(3.14 * 2)

# # Boolean values
# True # 1
# False # 0

# print(True + True)

# print("""We the People of the United States, in Order to form a more perfect Union, \v 
# \testablish Justice, insure domestic Tranquility, provide for the common defence, \v
# promote the general Welfare, and secure the Blessings of Liberty to ourselves and 
# our Posterity,do ordain and establish this Constitution for the United States of \v America.""")

# 8 + 8

# 8 - 2

# 8.0 / 3.14

# print(5 / 2)
# print(5 // 2)
# print(5 % 2) # prints out the remainder of the operation which is 1 in this case
# print(pow(2, 3)) # 2^3
# print(2 ** 3) # also 2^3

# eight = 8

# print("Stephen Doty")
# print(first_name, last_name) # Stephen Doty
# print(first_name + "       " + last_name)

# found_coins = 20
# magic_coins = 10
# stolen_coins = 3

# result = found_coins + magic_coins * 365 - stolen_coins * 52
# print(result)

# first_name = "Stephen"
# last_name = "Doty"

# Hello Stephen Doty, How are you doing today?

# sentence = "Hello {first} {last} {last} {first}. How are you doing today?".format(first = first_name, last = last_name)
# sentence2 = "Hello {} {}. How are you doing today?".format(first_name, last_name)
# sentence3 = "Hello {} {}. How are you doing today?".format(first_name, last_name)

# print(sentence)
# print(sentence2)
# print(sentence3)

# f-strings

# first_name = "Matt"
# last_name = "Fisher"

# sentence = f"Hello {first_name} {last_name}. How are you doing today?"

# print(sentence)
# print( type(7.8) ) # type() function tells us the data type

# print( isinstance(5.1, float) )

# print( abs(-6) )

# case1 = 2 ** 2 == pow(2, 2)
# print(case1)

# print( round(5.5) )

# input() takes input from the user
# name = input("What is your name? ")

# print(f"Your name is {name}")

# conditions

# print("hello world")
# print("digital crafts")

# age = 19
# name = "Emily"

# if age >= 21:
#     print("you can drink")
# elif age < 18:
#     print("What are you trying to do")
# else:
#     print("you are too young to be here")

# if age == 25:
#     print(1)
#     print(2)
#     print(3)
#     if name == "Emily":
#         print("Emily is here")
# print("outside of 'if statement'")

# casting 

# age = int(input("what is your age? "))

# print( type(age) )

# new_age = age + 5

# print(new_age)

# counter = 0

# while counter <= 10:
#     print(str(counter))
#     counter += 1

# print("outside while statement")

# while True:
#     answer = input("Say when: ")
#     if answer.lower() == "when":
#         break

# print("outside of while-loop")

number = input("Type in a number: ")

while number != "stop": # infinite loop
    if int(number) % 2 == 0:
        print(number + " is an even number.")
    elif number == "stop":
        break
    else:
        print(number + " is an odd number.")