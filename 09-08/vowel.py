letter = input("Please enter a single letter. ")
lower_letter = letter.lower()

if lower_letter == "a" or lower_letter == "e" or lower_letter == "i" or lower_letter == "o" or lower_letter == "u":
    print("Vowel")
elif lower_letter == "y":
    print("Sometimes a vowel")
else:
    print("Not Vowel")
