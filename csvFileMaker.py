

datas = open('./files/test.txt', 'r', encoding='utf-8')
myData = []

for data in datas:
    # print(int(data.split(':')[1].rstrip()))
    myData.append(data.split(':')[1].rstrip())


datas = open('./files/test.txt', 'r', encoding='utf-8')
myData1 = []

for data in datas:
    myData1.append(data.split(':')[1].rstrip())


f = open('./files/test.csv', 'w')
f.write('myData,myData1\n')

for i in range(len(myData)):
    f.write(myData[i] + ',' + myData1[i] + '\n')

f.close()