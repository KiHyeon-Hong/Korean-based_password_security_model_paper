from selenium import webdriver
from selenium.webdriver.common.keys import Keys

from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from time import sleep

import requests
from bs4 import BeautifulSoup


browser = webdriver.Chrome("../chromdriver/chromedriver.exe")
browser.maximize_window()

browser.get("https://www.astrill.com/kr/password-leak-test")

datas = ["qlalfqjsgh", "qlalfqjsghghghwj", "password", "dgnjksndfjks", "password1234", "q1w2e3r4", "ghdrlgusdlqslek122", "qlalfqjsgh", "qlalfqjsghghghwj", "password", "dgnjksndfjks", "password1234", "q1w2e3r4", "ghdrlgusdlqslek122", "qlalfqjsgh", "qlalfqjsghghghwj", "password", "dgnjksndfjks", "password1234", "q1w2e3r4", "ghdrlgusdlqslek122"]

for data in datas:
    browser.find_element_by_xpath("/html/body/div[5]/div[1]/div[2]/div[2]/div/form/div[1]/div/input[1]").click()
    browser.find_element_by_xpath("/html/body/div[5]/div[1]/div[2]/div[2]/div/form/div[1]/div/input[1]").send_keys(data)
    browser.find_element_by_xpath("/html/body/div[5]/div[1]/div[2]/div[2]/div/form/div[1]/div/input[2]").click()

    sleep(3)

    soup = BeautifulSoup(browser.page_source, "lxml")
    result = soup.find("div", attrs={"class":"password-rules"})
    result = result.find("div", attrs={"hidden":"hidden"}).get_text()

    if(result.replace("\n", "").replace(" ", "").split("-")[0] == "예"):
        print(data, ": high")
    else:
        print(data, ": low")

    browser.find_element_by_xpath("/html/body/div[5]/div[1]/div[2]/div[2]/div/form/div[1]/div/input[1]").click()
    browser.find_element_by_xpath("/html/body/div[5]/div[1]/div[2]/div[2]/div/form/div[1]/div/input[1]").clear()
