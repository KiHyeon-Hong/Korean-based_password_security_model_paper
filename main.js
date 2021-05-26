const koreanZxcvbn = require('./modules/koreanZxcvbn');
const zxcvbn = require('zxcvbn');
const koreanZxcvbnString = require('./modules/koreanZxcvbnString');
const comparePoint = new koreanZxcvbnString.koreanZxcvbnString.koreanZxcvbnString();

// Scores predicted by existing password security models
console.log("Existing password security model : ", zxcvbn("ghltnrnjs654321").score);

// Scores predicted by korean based password security models
console.log("Korean based password security models(p) : ", koreanZxcvbn("ghltnrnjs654321").score);

// Dictionary Matched or not
console.log("Dictionary Matched or not(t) : ", comparePoint.comparePoint("ghltrnjs"), "\n");

// Security Assessment Score
console.log("Security Assessment Score(2p+t) : ", ((koreanZxcvbn("ghltnrnjs654321").score * 2) + comparePoint.comparePoint("ghltrnjs")));