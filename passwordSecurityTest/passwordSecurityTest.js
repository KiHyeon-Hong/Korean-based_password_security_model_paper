const fs = require('fs');
const zxcvbn = require('zxcvbn');

var myData = fs.readFileSync('../files/notSafePassword.txt', 'utf8');
myData = myData.split(',');

var level0 = 0;
var level1 = 0;
var level2 = 0;
var level3 = 0;
var level4 = 0;



for(let i = 0; i < myData.length; i++) {
    // console.log(`${myData[i]} : ${zxcvbn(myData[i]).score}`);

    if(zxcvbn(myData[i]).score == 0) {
        level0 += 1;
    }
    else if(zxcvbn(myData[i]).score == 1) {
        level1 += 1;
    }
    else if(zxcvbn(myData[i]).score == 2) {
        level2 += 1;
    }
    else if(zxcvbn(myData[i]).score == 3) {
        level3 += 1;
    }
    else if(zxcvbn(myData[i]).score == 4) {
        level4 += 1;
    }
}

console.log(`level 0 : ${level0}`);
console.log(`level 1 : ${level1}`);
console.log(`level 2 : ${level2}`);
console.log(`level 3 : ${level3}`);
console.log(`level 4 : ${level4}`);

console.log(`totol count : ${level0 + level1 + level2 + level3 + level4}`);

console.log('================================================');

const koreanZxcvbn = require('../modules/koreanZxcvbn');

myData = fs.readFileSync('../files/notSafePassword.txt', 'utf8');
myData = myData.split(',');

var level0 = 0;
var level1 = 0;
var level2 = 0;
var level3 = 0;
var level4 = 0;



for(let i = 0; i < myData.length; i++) {
    // console.log(`${myData[i]} : ${zxcvbn(myData[i]).score}`);

    if(koreanZxcvbn(myData[i]).score == 0) {
        level0 += 1;
    }
    else if(koreanZxcvbn(myData[i]).score == 1) {
        level1 += 1;
    }
    else if(koreanZxcvbn(myData[i]).score == 2) {
        level2 += 1;
    }
    else if(koreanZxcvbn(myData[i]).score == 3) {
        level3 += 1;
    }
    else if(koreanZxcvbn(myData[i]).score == 4) {
        level4 += 1;
    }
}

console.log(`level 0 : ${level0}`);
console.log(`level 1 : ${level1}`);
console.log(`level 2 : ${level2}`);
console.log(`level 3 : ${level3}`);
console.log(`level 4 : ${level4}`);

console.log(`totol count : ${level0 + level1 + level2 + level3 + level4}`);


console.log('================================================');

myData = fs.readFileSync('../files/safePassword.txt', 'utf8');
myData = myData.split(',');

var level0 = 0;
var level1 = 0;
var level2 = 0;
var level3 = 0;
var level4 = 0;



for(let i = 0; i < myData.length; i++) {
    // console.log(`${myData[i]} : ${zxcvbn(myData[i]).score}`);

    if(koreanZxcvbn(myData[i]).score == 0) {
        level0 += 1;
    }
    else if(koreanZxcvbn(myData[i]).score == 1) {
        level1 += 1;
    }
    else if(koreanZxcvbn(myData[i]).score == 2) {
        level2 += 1;
    }
    else if(koreanZxcvbn(myData[i]).score == 3) {
        level3 += 1;
    }
    else if(koreanZxcvbn(myData[i]).score == 4) {
        level4 += 1;
    }
}

console.log(`level 0 : ${level0}`);
console.log(`level 1 : ${level1}`);
console.log(`level 2 : ${level2}`);
console.log(`level 3 : ${level3}`);
console.log(`level 4 : ${level4}`);

console.log(`totol count : ${level0 + level1 + level2 + level3 + level4}`);



console.log('================================================');

myData = fs.readFileSync('../files/safePassword.txt', 'utf8');
myData = myData.split(',');

var level0 = 0;
var level1 = 0;
var level2 = 0;
var level3 = 0;
var level4 = 0;



for(let i = 0; i < myData.length; i++) {
    // console.log(`${myData[i]} : ${zxcvbn(myData[i]).score}`);

    if(zxcvbn(myData[i]).score == 0) {
        level0 += 1;
    }
    else if(zxcvbn(myData[i]).score == 1) {
        level1 += 1;
    }
    else if(zxcvbn(myData[i]).score == 2) {
        level2 += 1;
    }
    else if(zxcvbn(myData[i]).score == 3) {
        level3 += 1;
    }
    else if(zxcvbn(myData[i]).score == 4) {
        level4 += 1;
    }
}

console.log(`level 0 : ${level0}`);
console.log(`level 1 : ${level1}`);
console.log(`level 2 : ${level2}`);
console.log(`level 3 : ${level3}`);
console.log(`level 4 : ${level4}`);

console.log(`totol count : ${level0 + level1 + level2 + level3 + level4}`);