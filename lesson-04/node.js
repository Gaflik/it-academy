const fs = require('fs-extra');

fs.mkdirpSync('first-dir');

const file1 = 'first-dir/1file.txt';
fs.ensureFileSync(file1);

fs.mkdirpSync('second-dir');

const src1 = "first-dir/1file.txt";
const dest1 = "second-dir/1file.txt";
fs.moveSync(src1, dest1);

fs.mkdirpSync('third-dir');

const src2 = "second-dir/1file.txt";
const dest2 = "third-dir/1file.txt";
fs.copySync(src2, dest2);

const file2 = 'second-dir/1file.txt';
fs.removeSync(file2);

const file3 = 'third-dir/1file.txt';
fs.removeSync(file3);

fs.removeSync('first-dir');
fs.removeSync('second-dir');
fs.removeSync('third-dir');