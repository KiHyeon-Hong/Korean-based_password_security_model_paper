datas = open('./files/wordDataToEngCount.txt', 'r', encoding='utf-8')
myData = []

for data in datas:
    myData.append(data.split(':')[1].rstrip())


f = open('./files/wordDataToEngCount.csv', 'w')
f.write('myData\n')

for i in range(len(myData)):
    f.write(myData[i] + '\n')

f.close()