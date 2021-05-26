datas = open('./files/koreanBasedZxcvbnScore.txt', 'r', encoding='utf-8')

datas = datas.read()
datas = datas.split('\n')

key = []
level = []
value = []

f = open('./files/koreanBasedZxcvbnScore.csv', 'w')
f.write('key,level,value\n')


for data in datas:
    key.append(data.split(',')[0])
    level.append(data.split(',')[1])
    value.append(data.split(',')[2])

    f.write(key[-1] + ',')
    f.write(level[-1] + ',')
    f.write(value[-1] + '\n')

f.close()