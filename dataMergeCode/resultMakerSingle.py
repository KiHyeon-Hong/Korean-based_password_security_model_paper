datas = open('../files/wordDataToEngCount.txt', 'r', encoding='utf-8')
key = []
value = []

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



datas = open('../files/femaleListToEngCount.txt', 'r', encoding='utf-8')
key = []
value = []

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



datas = open('../files/maleListToEngCount.txt', 'r', encoding='utf-8')
key = []
value = []

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



datas = open('../files/randomToEngCount.txt', 'r', encoding='utf-8')
key = []
value = []

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




datas = open('../files/frequencyListCount.txt', 'r', encoding='utf-8')
key = []
value = []

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