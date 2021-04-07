const fs = require('fs');
const Inko = require('inko');


var inko = new Inko();

const toKorean = (text) => {
    return inko.en2ko(text)
}

const toEnglish = (text) => {
    return inko.ko2en(text)
}

const koToEn = () => {
    var data = fs.readFileSync(__dirname + '/../files/koreanWord.txt', 'utf-8');
    fs.writeFileSync(__dirname + '/../files/koreanWordEn.txt', '', 'utf-8');
    
    data = data.split('\n');

    for(let i = 0; i < data.length; i++) {
        fs.appendFileSync(__dirname + '/../files/koreanWordEn.txt', toEnglish(data[i]) + '\n', 'utf-8');
    }
}

const koToEnDir = () => {
    var data = fs.readFileSync(__dirname + '/../files/maleList.txt', 'utf-8');
    fs.writeFileSync(__dirname + '/../files/maleListToEng.txt', '', 'utf-8');
    
    data = data.split(',');

    for(let i = 0; i < data.length; i++) {
        fs.appendFileSync(__dirname + '/../files/maleListToEng.txt', toEnglish(data[i]) + ',', 'utf-8');
    }

    data = fs.readFileSync(__dirname + '/../files/femaleList.txt', 'utf-8');
    fs.writeFileSync(__dirname + '/../files/femaleListToEng.txt', '', 'utf-8');
    
    data = data.split(',');

    console.log(data);

    for(let i = 0; i < data.length; i++) {
        fs.appendFileSync(__dirname + '/../files/femaleListToEng.txt', toEnglish(data[i]) + ',', 'utf-8');
    }
}

const koToEnDir2 = () => {
    var tempData = fs.readFileSync(__dirname + '/../files/wordData.txt', 'utf-8');
    fs.writeFileSync(__dirname + '/../files/wordDataToEng.txt', '', 'utf-8');
    
    tempData = tempData.split('\n');

    var data = [];

    for(let i = 0; i < tempData.length; i++) {
        data[i] = tempData[i].split('\r')[0];
    }

    console.log(data)

    for(let i = 0; i < data.length; i++) {
        fs.appendFileSync(__dirname + '/../files/wordDataToEng.txt', toEnglish(data[i]) + ',', 'utf-8');
    }
}

exports.toKorean = toKorean;
exports.toEnglish = toEnglish;
exports.koToEn = koToEn;
exports.koToEnDir = koToEnDir;
exports.koToEnDir2 = koToEnDir2;