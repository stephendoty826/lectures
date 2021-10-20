# def greeting():
#     print("Hello, Stephen Doty.")

# greeting()

# def print_students():
#     print("Shu")
#     print("Thomas")
#     print("Gustavo")
#     print("Alim")

# print("Day 1: Students in SRE class")
# print("lecture: git 101")
# print_students()
# print("Day 2: Students in SRE class")
# print("lecture: git 102")
# print_students()
# print("Day 3: Students in SRE class")
# print("lecture: python 101")
# print_students()

# def print_my_name(first, last):
#     print(f"My name is {first} {last}.")

# print_my_name("Stephen", "Doty")

# 6. Functions with parameters
# Create a function that creates the following recommendation letter.
# The Parameters for the functions should be the first and last name person you
# are recommending

# def rec_letter(reference_first, reference_last, applicant_first, applicant_last):
#     print(f"""{reference_first} {reference_last}
# 1234 Park St
# Anytown, Pennsylvania 12345

# April 14, 2019

# ABC College Admission’s Board
# 1234 Butler Ave
# Everywhere, CA 12345

# Dear ABC College Admission’s Board:

# My name is {reference_first} {reference_last}. I have served as a science teacher at Parktown High School for the past fifteen years and have had the privilege to serve as {applicant_first} {applicant_last}’s teacher for the past three. I have also been {applicant_first}’s advisor on the science academic team here at school. Due to his qualifications, I feel that {applicant_first} would be an excellent addition to your school.

# While he has been a student here, {applicant_first} has always challenged himself academically, taking all of the AP courses that our school has to offer. He has been captain of the academic team for the past two years, showing strong leadership qualities and organizational skills. His superior written and verbal skills have far surpassed any student of his age.

# {applicant_first} would bring much to your school, both in and out of the classroom. If you have any questions regarding {applicant_first}’s qualifications, please contact me at (123) 555-5555 or at {reference_first}.{reference_last}@email.com.

# Sincerely,


# {reference_first} {reference_last}
# Science Department Head
# Park Town High School
#     """)

# rec_letter("Patrick", "Star", "Spongebob", "Squarepants")






def f_to_c(temp_f):
    return (temp_f - 32) * (5/9)

def c_to_f(temp_c):
    return (1.8 * temp_c) + 32

temp_value = float(input("What temperature value do you want to convert?\n"))
temp_scale = input("Is this C or F?\n").lower()

if temp_scale == "f":
    print(f"{temp_value} degrees F is {f_to_c(temp_value)} degrees C")
elif temp_scale == "c":
    print(f"{temp_value} degrees C is {c_to_f(temp_value)} degrees F")
else:
    print("Invalid input. Please try again.")






