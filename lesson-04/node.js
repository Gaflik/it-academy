console.log(global);

//function sayHi() {
//    return 10+30;
//}

//console.log(sayHi())

const fs = require('fs-extra');

//fs.mkdirpSync('second-dir')

//const file = 'first-dir/1file.txt'
//fs.ensureFileSync(file)

const src = "first-dir/1file.txt";
const dest = "second-dir/1file.txt";
fs.moveSync(src, dest)