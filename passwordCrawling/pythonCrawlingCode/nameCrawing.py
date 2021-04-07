from selenium import webdriver
from selenium.webdriver.common.keys import Keys

from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from time import sleep

import requests
from bs4 import BeautifulSoup

import re
import codecs

browser = webdriver.Chrome("../chromdriver/chromedriver.exe")
browser.maximize_window()

url = "https://koreanname.me/"
browser.get(url)

# 스크롤(자바스크립트로)
# 지정한 위치로 스크롤 내리기
# browser.execute_script("window.scrollTo(0, 1080)")  #1920 x 1080 (한페이지 내리기)

#화면 가장 아래로 스크롤 내리기
# 높이가 변하지 않을 때까지 스크롤 내리기
#browser.execute_script("window.scrollTo(0, document.body.scrollHeight)")

for i in range(9):
    sleep(3)
    browser.find_element_by_xpath("/html/body/div/section/section/main/div/div/div[2]/button").click()

soup = BeautifulSoup(browser.page_source, "lxml")
result = soup.find_all("tr", attrs={"class":"ant-table-row ant-table-row-level-0"})

# print(len(result))
# print(result[0].find("a").get_text())

maleData = []
femaleData = []

for i in range(0, 1000):
    print(i)
    maleData.append(result[i].find("a").get_text())
for i in range(1000, 2000):
    femaleData.append(result[i].find("a").get_text())

print(maleData)
print(femaleData)

f = codecs.open('../../files/maleList.txt', 'w', "utf-8")
for data in maleData:
    f.write(data)
    f.write(',')

f.close()

f = codecs.open('../../files/femaleList.txt', 'w', "utf-8")
for data in femaleData:
    f.write(data)
    f.write(',')

f.close()