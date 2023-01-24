console.log(global);

//function sayHi() {
//    return 10+30;
//}

//console.log(sayHi())

const fs = require('fs-extra');

//fs.mkdirpSync('first-dir')

const file = 'first-dir/1file.txt'
fs.ensureFileSync(file)
