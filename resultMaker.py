datas = open('./files/wordDataToEngCount.txt', 'r', encoding='utf-8')
key = []
value = []

for data in datas:
    key.append(data.split(':')[0].lstrip().rstrip())
    value.append(int(data.split(':')[1].lstrip().rstrip()))

datas = open('./files/femaleListToEngCount.txt', 'r', encoding='utf-8')

for data in datas:
    key.append(data.split(':')[0].lstrip().rstrip())
    value.append(int(data.split(':')[1].lstrip().rstrip()))

datas = open('./files/maleListToEngCount.txt', 'r', encoding='utf-8')

for data in datas:
    key.append(data.split(':')[0].lstrip().rstrip())
    value.append(int(data.split(':')[1].lstrip().rstrip()))

safeList = []
notSafeList = []
notSafeListCount = []

for i in range(len(key)):
    if(value[i] == 0):
        safeList.append(key[i])
    else:
        notSafeList.append(key[i])
        notSafeListCount.append(value[i])

print(len(key))

print(len(notSafeList))
print(len(notSafeListCount))
print(len(safeList))


print("=======================================")

file = open('./files/notSafePassword2.txt', 'w')
file.close()
file = open('./files/safePassword2.txt', 'w')
file.close()



file = open('./files/notSafePassword2.txt', 'a')

for i in range(len(notSafeList)):
    file.write(notSafeList[i])
    file.write(':')
    file.write(str(notSafeListCount[i]))
    file.write(',')

file.close()


file = open('./files/safePassword2.txt', 'a')

for data in safeList:
    file.write(data)
    file.write(',')

file.close()