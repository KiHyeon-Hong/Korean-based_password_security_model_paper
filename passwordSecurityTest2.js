const fs = require('fs');
const zxcvbn = require('zxcvbn');
const koreanZxcvbn = require('./modules/koreanZxcvbn');

var myData = fs.readFileSync('./files/notSafePassword2.txt', 'utf8');
myData = myData.split(',');

var myKey = [];
var myValue = [];

for(let i = 0; i < myData.length; i++) {
    myKey[i] = myData[i].split(':')[0];
    myValue[i] = parseInt(myData[i].split(':')[1]);
}


var level0 = 0;
var level1 = 0;
var level2 = 0;
var level3 = 0;
var level4 = 0;

fs.writeFileSync('./files/koreanBasedZxcvbnScore.txt', "", 'utf8');

for(let i = 0; i < myKey.length; i++) {
    // console.log(`${myData[i]} : ${zxcvbn(myData[i]).score}`);

    if(koreanZxcvbn(myKey[i]).score == 0) {
        level0 += 1;
        fs.appendFileSync("./files/koreanBasedZxcvbnScore.txt", `${myKey[i]},0,${myValue[i]}\n`, 'utf8');
    }
    else if(koreanZxcvbn(myKey[i]).score == 1) {
        level1 += 1;
        fs.appendFileSync("./files/koreanBasedZxcvbnScore.txt", `${myKey[i]},1,${myValue[i]}\n`, 'utf8');
    }
    else if(koreanZxcvbn(myKey[i]).score == 2) {
        level2 += 1;
        fs.appendFileSync("./files/koreanBasedZxcvbnScore.txt", `${myKey[i]},2,${myValue[i]}\n`, 'utf8');
    }
    else if(koreanZxcvbn(myKey[i]).score == 3) {
        level3 += 1;
        fs.appendFileSync("./files/koreanBasedZxcvbnScore.txt", `${myKey[i]},3,${myValue[i]}\n`, 'utf8');
    }
    else if(koreanZxcvbn(myKey[i]).score == 4) {
        level4 += 1;
        fs.appendFileSync("./files/koreanBasedZxcvbnScore.txt", `${myKey[i]},4,${myValue[i]}\n`, 'utf8');
    }
}

console.log(`level 0 : ${level0}`);
console.log(`level 1 : ${level1}`);
console.log(`level 2 : ${level2}`);
console.log(`level 3 : ${level3}`);
console.log(`level 4 : ${level4}`);

console.log(`totol count : ${level0 + level1 + level2 + level3 + level4}`);

console.log("====================================================");

myData = fs.readFileSync('./files/notSafePassword2.txt', 'utf8');
myData = myData.split(',');

myKey = [];
myValue = [];

for(let i = 0; i < myData.length; i++) {
    myKey[i] = myData[i].split(':')[0];
    myValue[i] = parseInt(myData[i].split(':')[1]);
}


level0 = 0;
level1 = 0;
level2 = 0;
level3 = 0;
level4 = 0;

fs.writeFileSync('./files/zxcvbnScore.txt', "", 'utf8');

for(let i = 0; i < myKey.length; i++) {
    // console.log(`${myData[i]} : ${zxcvbn(myData[i]).score}`);

    if(zxcvbn(myKey[i]).score == 0) {
        level0 += 1;
        fs.appendFileSync("./files/zxcvbnScore.txt", `${myKey[i]},0,${myValue[i]}\n`, 'utf8');
    }
    else if(zxcvbn(myKey[i]).score == 1) {
        level1 += 1;
        fs.appendFileSync("./files/zxcvbnScore.txt", `${myKey[i]},1,${myValue[i]}\n`, 'utf8');
    }
    else if(zxcvbn(myKey[i]).score == 2) {
        level2 += 1;
        fs.appendFileSync("./files/zxcvbnScore.txt", `${myKey[i]},2,${myValue[i]}\n`, 'utf8');
    }
    else if(zxcvbn(myKey[i]).score == 3) {
        level3 += 1;
        fs.appendFileSync("./files/zxcvbnScore.txt", `${myKey[i]},3,${myValue[i]}\n`, 'utf8');
    }
    else if(zxcvbn(myKey[i]).score == 4) {
        level4 += 1;
        fs.appendFileSync("./files/zxcvbnScore.txt", `${myKey[i]},4,${myValue[i]}\n`, 'utf8');
    }
}

console.log(`level 0 : ${level0}`);
console.log(`level 1 : ${level1}`);
console.log(`level 2 : ${level2}`);
console.log(`level 3 : ${level3}`);
console.log(`level 4 : ${level4}`);

console.log(`totol count : ${level0 + level1 + level2 + level3 + level4}`);