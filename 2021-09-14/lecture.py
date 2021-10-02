import virus #module

# data = virus.data

# 1. Create a dictionary called zodiac with the following information.
# Each key is the name of the zodiac


# Aries - The Warrior
# Taurus - The Builder
# Gemini - The Messenger
# Cancer - The Mother
# Leo - The King
# Virgo -The Analyst
# Libra - The Judge
# Scorpio - The Magician
# Sagittarius - the Gypsy
# Capricorn - the Father
# Aquarius - The Thinker
# Pisces - TheMystic


# 1a. Retrieve information about your zodiac from the zodiac dictionary

# zodiac = {
#     "Aries" : "The Warrior", 
#     "Taurus" : "The Builder",
#     "Gemini" : "The Messenger",
#     "Cancer" : "The Mother",
#     "Leo" : "The King",
#     "Virgo" : "The Analyst",
#     "Libra" : "The Judge",
#     "Scorpio" : "The Magician",
#     "Sagittarius" : "The Gypsy",
#     "Capricorn" : "The Father",
#     "Aquarius" : "The Thinker",
#     "Pisces" : "The Mystic"
# }

# # results = zodiac.items()

# # print(results)

# for key, value in zodiac.items():
#     print(f"key: {key} - value: {value}")


# print(zodiac)

# del zodiac["Aquarius"]

# print(zodiac)

# print(zodiac.keys())

# for key in zodiac.keys():
#     print(key)

# zodiac["Aries"] = "The Witness"

# print(zodiac)

# sign = zodiac.get("Neptune")

# print(sign)

# result = "Scorpio" in zodiac
# print(result)




# # 2. Given the following dictionary

# phonebook_dict = {
#     'Alice': '703-493-1834',
#     'Bob': '857-384-1234',
#     'Elizabeth': '484-584-2923'
# }

# # phonebook_dict["Kareem"] = "938-489-1234"
# # 2a. Print Elizabeth's phone number
# eliz_phone = phonebook_dict["Elizabeth"]
# print(f"Elizabeth's phone number is {eliz_phone}.")
# print("")

# # 2b. Add a entry to the dictionary: Kareem's number is 938-489-1234.
# phonebook_dict["Kareem"] = "938-489-1234"
# print("Added Kareem to the phonebook")
# print("")

# # 2c. Delete Alice's phone entry.
# del phonebook_dict["Alice"]
# print("Deleted Alice from the phonebook")
# print("")

# # 2d. Change Bob's phone number to '968-345-2345'.
# phonebook_dict["Bob"] = "968-345-2345"
# print("Updated Bob's number")
# print("")

# # 2e. Print all the phone entries.

# for name, number in phonebook_dict.items():
#     print(f"{name}: {number}")




# 3. Nested dictionaries

# ramit = {
#     'name': 'Ramit',
#     'email': 'ramit@gmail.com',
#     'interests': ['movies', 'tennis'],
#     'friends': [
#         {
#             'name': 'Jasmine',
#             'email': 'jasmine@yahoo.com',
#             'interests': ['photography', 'tennis']
#         },
#         {
#             'name': 'Jan',
#             'email': 'jan@hotmail.com',
#             'interests': ['movies', 'tv']
#         }
#     ]
# }

# # 3a. Write a python expression that gets the email address of Ramit.
# email = ramit["email"]
# print(f"Ramit's email is {email}.")
# print()

# # 3b. Write a python expression that gets the first of Ramit's interests.
# first_interest = ramit["interests"][0]
# print(f"Ramit's first interest is {first_interest}.")
# print()

# # 3c. Write a python expression that gets the email address of Jasmine.
# jasmine_email = ramit["friends"][0]["email"]
# print(f"Jasmine's email is {jasmine_email}.")
# print()

# # 3d. Write a python expression that gets the second of Jan's two interests.
# jans_second_interest = ramit["friends"][1]["interests"][1]
# print(f"Jan's second interest is {jans_second_interest}.")
# print()






# State
# cases
# recovered 
# active 

# Texas
# cases: 1106235 
# recovered: 899579
# active: 186438
#
# California
# cases: 1106235 
# recovered: 899579
# active: 186438\


# Texas
# cases: 
# recovered: 

# data1 = [
#     {
#         "state": "Texas",
#         "cases": 1106235,
#         "deaths": 20218,
#         "recovered": 899579,
#     },
#     {
#         "state": "California",
#         "cases": 1044896,
#         "deaths": 18304,
#         "recovered": 518461,
#     },
#     {
#         "state": "Florida",
#         "cases": 889864,
#         "deaths": 17561,
#         "recovered": 619819,
#     }
# ]

# index = 0
# for item in data1:
#     print(data1[index]["state"])
#     print(f"cases: " + str(data1[index]["cases"]))
#     print(f"recovered: " + str(data1[index]["recovered"]))
#     print()
#     index += 1

# index = 0
# for item in data:
#     print(data[index]["state"])
#     print(f"cases: {data[index]['cases']}")
#     print(f"recovered: {data[index]['recovered']}")
#     print(f"active: {data[index]['active']}")
#     print()
#     index += 1

# for item in data:
#     print(item["state"])
#     print(f"cases: {item['cases']}")
#     print(f"recovered: {item['recovered']}")
#     print(f"active: {item['active']}")
#     print()


# file_handler = open("preamble.txt", "r")

# contents = file_handler.read()

# file_handler.close()

# print(contents)

# file_handle = open('preamble.txt', 'r')
# while True:
#   char = file_handle.read(1)
#   if char is None:
#     break
#   else:
#     print(char)
# file_handle.close()


# import pickle

# todolist = {
#     "first_name" : "Stephen",
#     "last_name" : "Doty"
# }

# # opening todolist.pickle
# with open("todolist.pickle", "rb") as fh:
#     todolist = pickle.load(fh)
#     print(todolist)
#     print(todolist["first_name"])

# todolist["first_name"] = input("Give a name: ")

# print(todolist)

# # creating/saving todolist.pickle file
# with open("todolist.pickle", "wb") as fh:
#     pickle.dump(todolist, fh)
#     print(todolist)

# dictionary1 = {"one" : ["1", "2"], "two" : ["3", "4"], "five" : ["5", "6"], "six" : ["7", "0"]}
# print(dictionary1)

# print(dictionary1)

def addtask(priority, task):
    todolist[priority].append(task)

#to delete task
def todeletetask(deletedtask):
    for task_list in todolist.values():
        if deletedtask in task_list:
            task_list.remove(deletedtask)

def viewall():
    tasklst = []
    j = 0
    for priority in todolist.keys():
        for individualtask in todolist[priority]:
            tasklst.append(individualtask)
            print(f"{j+1} - {individualtask} - {priority}")
            j += 1
    return tasklst

#empty priority lists
high= ["feed the cat", "walk the dog"]          #index 0-1
medium = ["feed the birds", "grocery shop"]     #index 2-3
low = ["wash the car", "play with cat"]         #index 4-5

#starting todo list
todolist = {"high" : high, "medium" : medium, "low" : low}

while True:
    
    val = input("""Press 1 to add task
Press 2 to delete task
Press 3 to view all tasks
Press q to quit
""")
    if val == "1":
        task = input("What task would you like to add: ")
        priority = input("What level of priority is the task? high, medium, or low: ")
        addtask(priority, task)
    elif val == "2":
        tasklst = viewall()
        deletedindex = int(input("What number do you want to delete? "))-1
        deletedtask = tasklst[deletedindex]
        todeletetask(deletedtask)
    elif val == "3":
        viewall()
    elif val =="q":
        break
    else:
        print("Please input valid input.")

