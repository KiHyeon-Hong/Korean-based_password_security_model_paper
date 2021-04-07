from selenium import webdriver
from selenium.webdriver.common.keys import Keys

from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from time import sleep

import requests
from bs4 import BeautifulSoup

import re



browser = webdriver.Chrome("../chromdriver/chromedriver.exe")
browser.maximize_window()

browser.get("https://haveibeenpwned.com/Passwords")

datas = ["qlalfqjsgh", "qlalfqjsghghghwj", "password", "dgnjksndfjks", "password1234", "q1w2e3r4", "ghdrlgusdlqslek122", "qlalfqjsgh", "qlalfqjsghghghwj", "password", "dgnjksndfjks", "password1234", "q1w2e3r4", "ghdrlgusdlqslek122", "qlalfqjsgh", "qlalfqjsghghghwj", "password", "dgnjksndfjks", "password1234", "q1w2e3r4", "ghdrlgusdlqslek122"]

for data in datas:
    browser.find_element_by_xpath("/html/body/div[1]/div[2]/div/form/div[1]/input").click()
    browser.find_element_by_xpath("/html/body/div[1]/div[2]/div/form/div[1]/input").send_keys(data)
    browser.find_element_by_xpath("/html/body/div[1]/div[2]/div/form/div[1]/span/button").click()

    sleep(5)

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
    except:
        print(data, ": safe")

    browser.find_element_by_xpath("/html/body/div[1]/div[2]/div/form/div[1]/input").click()
    browser.find_element_by_xpath("/html/body/div[1]/div[2]/div/form/div[1]/input").clear()