# Print a Triangle

# Solution 1: Trivial - let's not do that

# print("""   *   
#   ***  
#  ***** 
# *******
# """)

#    *     1 stars   spaces = 6     0
#   ***    3 stars   spaces = 4     1
#  *****   5 stars   spaces = 2     2
# *******  7 stars   spaces = 0     3    (height - 1)

# =====================

# Height = 4
# Stars = 2 * current_height + 1
# total_width = 2 * (height - 1) + 1
# Spaces = total_width - stars

# Solution 2: 

# height = int(input("Height: "))
# y = 0

# while y < height:
#     total_width = 2 * (height - 1) + 1
#     num_stars = 2 * y + 1
#     half_spaces = (total_width - num_stars) // 2
#     print(" " * half_spaces + "*" * num_stars + " " * half_spaces)
#     y += 1



# Solution 3: Slightly less trivial - with in-built method
# height = int(input("Height: "))
# y = 0

# while y < height:
#     print(("*" * (2 * y + 1)).center(2 * height + 1))
#     y += 1 



# Solution 4: Another way to use the built in method. 

height = int(input("Enter a height? "))

width_size = height * 2 - 1

current_row = 0 
stars = 1

while current_row < height:
    
    star = "*" * stars
    stars += 2
    current_row += 1
    print(star.center(width_size))