const fs = require('fs');

class koreanZxcvbnString {
    koreanZxcvbnString(data) {
        var female = fs.readFileSync(__dirname + '/../files/femaleListToEng.txt', 'utf8');
        var male = fs.readFileSync(__dirname + '/../files/maleListToEng.txt', 'utf8');
        var word = fs.readFileSync(__dirname + '/../files/wordDataToEng.txt', 'utf8');
        
        female = female.split(',');
        male = male.split(',');
        word = word.split(',');

        // console.log('asd123qwe123-asd@zxc'.replace(/[0-9]/g, "").replace(/[!@#$%^&*()]/g, ""));
        // console.log('asd123qwe:123-asd\zxc'.replace(/[0-9]/g, "").replace(/[\∼\‘\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\{\]\}\\\|\;\:\”\’\,\<\.\>\/\?\~\'\"]/g, ""));

        // ∼‘!@#$%^&*()-_=+[{]}\|;:”’,<.>/?

        // console.log(zxcvbn("password654321@").count);

        data = data.replace(/[0-9]/g, "").replace(/[\∼\‘\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\{\]\}\\\|\;\:\”\’\,\<\.\>\/\?\~\'\"]/g, "");

        if(data.length == 0) {
            return "bad";
        }

        for(let i = 0; i < female.length; i++) {
            if(data == female[i]) {
                return "female";
            }
        }
        for(let i = 0; i < male.length; i++) {
            if(data == male[i]) {
                return "male";
            }
        }
        for(let i = 0; i < word.length; i++) {
            if(data == word[i]) {
                return "word";
            }
        }

        return "good";
    }

    comparePoint(data) {
        var female = fs.readFileSync(__dirname + '/../files/femaleListToEng.txt', 'utf8');
        var male = fs.readFileSync(__dirname + '/../files/maleListToEng.txt', 'utf8');
        var word = fs.readFileSync(__dirname + '/../files/wordDataToEng.txt', 'utf8');
        
        female = female.split(',');
        male = male.split(',');
        word = word.split(',');

        // console.log('asd123qwe123-asd@zxc'.replace(/[0-9]/g, "").replace(/[!@#$%^&*()]/g, ""));
        // console.log('asd123qwe:123-asd\zxc'.replace(/[0-9]/g, "").replace(/[\∼\‘\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\{\]\}\\\|\;\:\”\’\,\<\.\>\/\?\~\'\"]/g, ""));

        // ∼‘!@#$%^&*()-_=+[{]}\|;:”’,<.>/?

        // console.log(zxcvbn("password654321@").count);

        data = data.replace(/[0-9]/g, "").replace(/[\∼\‘\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\{\]\}\\\|\;\:\”\’\,\<\.\>\/\?\~\'\"]/g, "");

        if(data.length == 0) {
            return 0;
        }

        for(let i = 0; i < female.length; i++) {
            if(data == female[i]) {
                return 0;
            }
        }
        for(let i = 0; i < male.length; i++) {
            if(data == male[i]) {
                return 0;
            }
        }
        for(let i = 0; i < word.length; i++) {
            if(data == word[i]) {
                return 0;
            }
        }

        return 1;
    }
}

module.exports.koreanZxcvbnString = koreanZxcvbnString;
// module.exports.comparePoint = comparePoint;