# string = "DigitalCrafts"

# # printing out "DigitalCrafts" backwards starting with "s" and adding new letters to the back of the string

# rev_string = ""

# index = len(string) - 1

# while index >= 0:
#     rev_string += string[index]
#     index -= 1
# print(rev_string)


# printing "DigitalCrafts" backwards starting with the "D" and adding new letters to the front of the string
# rev_string2 = ""
# index2 = 0

# while index2 < len(string):
#     rev_string2 = string[index2] + rev_string2
#     index2 += 1
# print(rev_string2)

# 1. Triangle Numbers
# Print the first 100 triangle numbers. What is a triangle number? Read this article to find out what triangle numbers are.






class Parent(object):
        def altered(self):
            print("PARENT altered()")

class Child(Parent):
    def altered(self):
        print("CHILD, BEFORE PARENT altered()")
        super(Child, self).altered()
        print("CHILD, AFTER PARENT altered()")

dad = Parent()
son = Child()
dad.altered()
son.altered()

