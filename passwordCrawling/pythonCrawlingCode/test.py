import re


temp_result = [int(s) for s in re.findall(r'-?\d+\.?\d*', "This password has been seen 1,827 times before")]
result = ""

for i in temp_result:
    result = result + i

print(result)