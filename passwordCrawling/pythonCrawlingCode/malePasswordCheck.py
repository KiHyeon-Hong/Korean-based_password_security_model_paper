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


file = open('../../files/maleListToEng.txt', 'r')
data = file.read()
datas = data.split(',')

file.close()

browser = webdriver.Chrome("../chromdriver/chromedriver.exe")
browser.maximize_window()

browser.get("https://haveibeenpwned.com/Passwords")

for data in datas:
    browser.find_element_by_xpath("/html/body/div[1]/div[2]/div/form/div[1]/input").click()
    browser.find_element_by_xpath("/html/body/div[1]/div[2]/div/form/div[1]/input").send_keys(data)
    browser.find_element_by_xpath("/html/body/div[1]/div[2]/div/form/div[1]/span/button").click()

    sleep(5)

    file = open('../../files/maleListToEngCount.txt', 'a')

    soup = BeautifulSoup(browser.page_source, "lxml")
    result = soup.find("div", attrs={"aria-expanded":"true"})
    result = result.find("div", attrs={"class":"pwnTitle"})

    try:
        result = result.find("h3", attrs={"id":"pwnedPasswordResult"}).get_text()

        temp_result = [int(s) for s in re.findall(r'-?\d+\.?\d*', result)]
        result = ""

        for i in temp_result:
            result = result + str(i)

        print(data, ":", result)
        file.write(data)
        file.write(":")
        file.write(result)
        file.write("\n")
    except:
        print(data, ": safe")
        file.write(data)
        file.write(":")
        file.write(0)
        file.write("\n")

    browser.find_element_by_xpath("/html/body/div[1]/div[2]/div/form/div[1]/input").click()
    browser.find_element_by_xpath("/html/body/div[1]/div[2]/div/form/div[1]/input").clear()

    file.close()

file.close()