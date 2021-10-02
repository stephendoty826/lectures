# Write a program that will prompt you for how many coins you want. Initially you have no coins. It will ask you if you want a coin? If you type "yes", it will give you one coin, and print out the current tally. If you type no, it will stop the program.

coins = 0
run = "yes"

while run == "yes":
    print("You have " + str(coins) + " coins.")
    run = input ("Do you want another? ")
    if run == "yes":
        coins += 1
    else:
        break