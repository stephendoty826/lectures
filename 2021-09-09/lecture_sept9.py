# Create a new list called "planets" that holds all of the names of the planets in our solar system. Print the list of planets on the command line.

planets = ["Earth", "Jupiter", "Nepture", "Mars", "Saturn", "Mercury", "Uranus", "Venus"]

# print(planets)

# length = len(planets)

# print(f"There are {length} planets in this list.")

# # counter = 0

# # while counter < length:
# #     print(planets[counter].lower())
# #     counter += 1

# planets.append("Pluto")

# # length = len(planets)

# # while counter < length:
# #     print(planets[counter].lower())
# #     counter += 1

# # Combine the following 2 lists into a list called Houston.
#     # Find how many cities are listed in the Houston list
#     # Add more cities to the Houston list.
#     # Print the list cities (one city per line)

# HoustonCities = ["Katy", "Memorial City", "Sugar Land", "The Heights", "River Oaks", "Pasadena"]
# ClearLakeCities = ["League City", "Kemah", "Seabrook", "Webster", "El Lago"]

# Houston = HoustonCities + ClearLakeCities

# # print(f"There are {len(Houston)} cities in our Houston List.")

# # print("Let's add a few more cities.")

# Houston.append("Rosenburg")

# other_Houston_cities = ["Richmond", "Cut and Shoot"]

# Houston.extend(other_Houston_cities)

# # print(f"Now there are {len(Houston)} cities in our Houston List.")

# # index = 0

# # while index < len(Houston):
# #     print(f"{index + 1}. {Houston[index]}")
# #     index += 1

# # 6. Since Pluto isn't really a planet, delete it from the planet list

# del planets[8]

# # 7. Create the following lists that are a subset of the Houston list:

# print(Houston)

# # htx1 = The first 4 cities
# htx1 = Houston[0:4]
# print(htx1)

# # htx2 = Cities 3-6
# htx2 = Houston[2:6]
# print(htx2)

# # htx3 = The last 2 cities
# htx3 = Houston[-2:]
# print(htx3)

# # 8. Insert Denver in the Houston list after The Heights
# Houston.insert(4, "Denver")

# print(Houston)

# # 9. Remove the last city from the Houston List
# del Houston[-1]
# print(Houston)

# # 10. Get the index of Seabrook from the Houston list
# index1 = Houston.index("Seabrook")
# print(index1)

# # 11. Sort the list of cities
# Houston.sort()
# print(Houston)

# # 13. Remove all items from Houston list
# Houston.clear()
# print(Houston)
