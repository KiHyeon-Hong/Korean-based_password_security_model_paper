# Korean_based_password_Security_model_paper

## Directory Structure Description

### dataMergeCode

- Python code that merges files for password security analysis and converts them to csv format

### files

- femaleList.txt : Top 1000 Korean female names since 2008
- maleList.txt : Top 1000 Korean Male names since 2008
- random\* : a randomly configured alphabet string of 4 to 10 characters
- wordData.txt : data in descending order by frequency after filtering only by nouns in Korean general vocabulary

- \*ToEng.txt : Data that converts Korean words into English alphabets -> The file will be composed of Korean-based dictionaries
- \*ToEngCount.txt : Data to determine how many times the word has been leaked by typing in https://haveibeenpwned.com/Passwords
- \*ToEngCount.csv : Data file with converted extension to csv file for experiment

### modules

- Password Security Assessment Model proposed in this paper

### passwordCrawling

- Python Crawling Code for Data Collection for Password Pre-Configuration

### passwordSecurityAnalysis

- Comparison experiments between existing methods and those proposed in the paper
- https://kihyeon-hong.github.io/Korean-based_password_security_model_paper/passwordSecurityAnalysis/KoreanBasedPasswordSecurity_final.html

### passwordSecurityTest

- File create code for comparison experiments between existing methods and those proposed in this paper.

### main.js

- An example of a security level that evaluates one password from the existing method and the method proposed in this paper.
