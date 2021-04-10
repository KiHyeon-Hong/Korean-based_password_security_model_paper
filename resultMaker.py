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

# 기업목록은 뺄 것

