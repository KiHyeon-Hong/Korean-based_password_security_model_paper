const inko = require('./modules/myInko.js');
const koreanZxcvbn = require('./modules/koreanZxcvbn');
const zxcvbn = require('zxcvbn');



console.log("기존의 zxcvbn 사용 : ", zxcvbn("ghltnrnjs").score);
console.log("한국어 기반의 zxcvbn 사용 : ", koreanZxcvbn("ghltnrnjs").score);
console.log("숫자를 추가하여 기존의 zxcvbn 사용 : ", zxcvbn("ghltnrnjs654321").score);
console.log("숫자를 추가하여 한국어 기반의 zxcvbn 사용 : ", koreanZxcvbn("ghltnrnjs654321").score);
console.log("숫자를 중간에 넣어 한국어 기반의 zxcvbn 사용 : ", koreanZxcvbn("ghltnr654321njs").score);

