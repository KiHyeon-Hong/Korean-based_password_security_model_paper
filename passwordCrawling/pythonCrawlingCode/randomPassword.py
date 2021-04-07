import string
import random

_LENGTH = 10

string_pool = string.ascii_letters
result = ""

for i in range(_LENGTH):
    result += random.choice(string_pool)
print(result)