let num = 8;
let bool = true;
let str = 'fix'

console.log(bool + str); //truefix
console.log(num + str); //8fix
console.log(num + bool); //9

str = '5'
bool = false
console.log(bool + str); //false5
console.log(num + str); //85
console.log(num + bool); //8

console.log(false + 'world'); //falseworld
console.log(7 + 'world'); //7world
console.log(7 + true); //8
console.log(false + '5'); //false5
console.log(7 + '5'); //75
console.log(7 + false); //7



console.log(bool * str); //NaN
console.log(num * str); //NaN
console.log(num * bool); //8

str = '4'
bool = false
console.log(bool * str); //0
console.log(num * str); //32
console.log(num * bool); //0

console.log(false * 'string'); //NaN
console.log(9 * 'string'); //NaN
console.log(9 * true); //9
console.log(false * '5'); //0
console.log(9 * '3'); //27
console.log(9 * false); //0


console.log(bool / str); //NaN
console.log(num / str); //NaN
console.log(num / bool); //8

str = '6'
bool = false
console.log(bool / str); //0
console.log(num / str); //1.3333333333333333
console.log(num / bool); //Infinity

console.log(false / 'string'); //NaN
console.log(5 / 'string'); //NaN
console.log(5 / true); //5
console.log(false / '5'); //0
console.log(5 / '3'); //1.6666666666666667
console.log(5 / false); //Infinity

let bool1 = 10;
bool = Boolean(10);
console.log(bool1); //true
console.log(typeof bool1);

bool1 = Boolean('string');
console.log(bool1); //true
console.log(typeof bool1);

bool1 = Boolean(' ');
console.log(bool1); //true
console.log(typeof bool1);

bool1 = Boolean(0);
console.log(bool1); //false
console.log(typeof bool1);

bool1 = Boolean(undefined);
console.log(bool1); //false
console.log(typeof bool1);

bool1 = Boolean(null);
console.log(bool1); //false
console.log(typeof bool1);

bool1 = Boolean(NaN);
console.log(bool1); //false
console.log(typeof bool1);

bool1 = Boolean('');
console.log(bool1); //false
console.log(typeof bool1);



let num1 = true;
num1 = Number(true);
console.log(num1); //1
console.log(typeof num1);

num1 = Number(false);
console.log(num1); //0
console.log(typeof num1);

num1 = Number(null);
console.log(num1); //0
console.log(typeof num1);

num1 = Number(undefined);
console.log(num1); //NaN
console.log(typeof num1);

num1 = parseInt(' ');
console.log(num1); //0
console.log(typeof num1);

num1 = parseInt('string');
console.log(num1); //NaN
console.log(typeof num1);

num1 = parseInt('78g');
console.log(num1); //78
console.log(typeof num1);

let str1 = true;
str1 = String(true);
console.log(str1); 
console.log(typeof str1);

str1 = String(false);
console.log(str1); 
console.log(typeof str1);

str1 = String(578);
console.log(str1); 
console.log(typeof str1);

str1 = String(null);
console.log(str1); 
console.log(typeof str1);

str1 = String(undefined);
console.log(str1);
console.log(typeof str1);

str1 = (NaN).toString();
console.log(str1); 
console.log(typeof str1);