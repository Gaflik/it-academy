////////////////////Array
let a = Symbol('asd');
let b = Symbol('asd'); //символ присваивается только через обект, символ и всегда уникален
// console.log (a === b); // false

let d = Symbol.for('sd');// чтобы символ был не уникален нужно использовать метод Фор
let e = Symbol.for('sd');
// console.log (d === e); // true

let str = 'string' // присваивание через литерал
let str1 = String('string') //присваивание через объект

const obj = {};
const obj1 = Object.create({});

const arr =['str', 10, false, {}, [], 'newstring', 153]; //у массива нет ограничений, он может содержать все типы
const array = new Array(3); //при создании массива с одним типом, это не должно быть число, т.к. он воспринимает его как длину массива
const array1 = new Array("3");

///////////////// методы массивов

var arrayAsString = array.join(); //метод превращает массив в строку
const arr1 = ['str', 'hello', 'it', 'new'];
// console.log(arr1.join(' - '));// str - hello - it - new

array.reverse() //переворачивает массив
// console.log(arr1.reverse(' - ')); // [ 'new', 'it', 'hello', 'str' ]

array.sort() // сортирует
//console.log(arr1.sort()); //[ 'hello', 'it', 'new', 'str' ]

const arrNum = [1, 10, 2, 6, 28, 100, 9, 80]; // сортирует строки по умолчанию
// console.log(arrNum.sort()); //[
//     1, 10, 100, 2,
//    28,  6,  80, 9
//  ]

//console.log(arrNum.sort((a,b) => a - b)); //[
//     1,  2,  6,   9,
//    10, 28, 80, 100
//  ] чтобы сортировать числа

// console.log(arrNum.sort((a,b) => b - a)); //[
//     100, 80, 28, 10,
//       9,  6,  2,  1
//   ]

var newArry = array.concat('array2') //соединяет два массива
const arrConc = [2, 4, 6];
const arrConc2 = [8, 10];
// console.log(arrConc.concat(arrConc2));// [ 2, 4, 6, 8, 10 ]

var subArray = array.slice('startIndex', 'endIndex');// вырезает посимвольно между стартовым индексом и последним
// console.log(arrNum.slice(1, 3));// [10, 2]
// console.log(arrNum.slice(1));//[
//     10, 2,  6, 28,
//    100, 9, 80
//  ]

array.splice('startIndex', 'itemsToRemove');// удаляет из массива какое-то кол-во знаений из массива, передает старт массив и сколько удалить
myArray = ['a', 'b', 'c', 'd'];
myArray.splice(1,1); // ['a','c','d']

var newArrayLength = array.push("value");// вставляет в конец новое значение
// console.log(arrNum.push(111));//9 - новая длина массива - добавляет число и возвращает длину
// console.log(arrNum); //[
//     1, 10,  2,   6, 28,
//   100,  9, 80, 111
// ] если выполнять последовательно

var removedValue = array.pop();//удаляет число и возвращает то, кот удалил
// console.log(arrNum.pop());//80 или 111 если вып послед-но все 4 
// console.log(arrNum); //[
//     1,  10, 2, 6,
//    28, 100, 9
//  ]

var newArrayLength = array.unshift("array");//вставляет в начало
// console.log(arrNum.unshift(123));//9 - нов. длина, 
// console.log(arrNum); //9
// [
//   123,   1, 10,  2, 6,
//    28, 100,  9, 80
// ]

var removedValue = array.shift();//уд. в начале
// console.log(arrNum.shift());//
// console.log(arrNum);

myArray = ['a', 'b', 'c', 'd'];
delete myArray[1];// ['a', undefined, 'c', 'd'] удаляет переменную из массива - удалит b
myArray.splice(1,1); // ['a','c','d']


////////////// Function

//console.log(add(10, 100));
function add(num1, num2) {
    return num1 + num2;
} // function declaration



const minus = function (num1, num2) {
    return num1 - num2;
} //function expression нет поднятия - хойстинга, воспринимает как просто переменную, нельзя вызвать до создания функции
//console.log(minus(100, 70));

////////////////// Comparsions
"==" //сравниваем значение в привидением - нестрогое сравнение
// console.log(false == 0) // true
"==="// сравниваем и тип данных и значение (рекоменд)
// console.log(false === 0)
//!=, !== аналогично

"in" // сравнение для объектов, проверяет есть ли ключ в нашем объекте
const obj2 = {name: 'gala'} 

// console.log('name' in obj2); //true
// console.log('surname' in obj2);//false

"logical or ||" // возвращает тру на первом тру


// const age = 18;
//     if (age >= 18) {
//         console.log('Ok, you can go!')
//     } else {
//         console.log('No, go away!')
//     } //Ok, you can go!

// const age2 = 17;
//     if (age2 >= 18) {
//         console.log('Ok, you can go!')
//     } else {
//         console.log('No, go away!')
//     } //No, go away!

// const age3 = 66;
//     if (age3 >= 18 && age3 < 65) {
//         console.log('Ok, you can go!')
//     } else if (age3 >= 65) {
//         console.log('Greate, your enter is free!')
//     } else {
//         console.log('No, go away!')
//     } //Greate, your enter is free!


// const month = 4;

// switch (month) {
//     case 1:
//         console.log('January');
//         break;
//     case 2:
//         console.log('February');
//         break;
//     case 3:
//         console.log('March');
//         break;
//     default:
//         console.log('This is not a month');
// }


"while"
// let num = 0;
// while(num <= 10) {
//     console.log(num);
//     num++;
// } // 0 1 2 3 4 5 6 7 8 9 10

// while(false) {
//     console.log(num);
//     num++;
// } // не выполнится

// do {
//     console.log(num);
//     num++;
// } while(num < 0)

// for(let i = 0; i < arr.length; i++) { // для перебора массивов и строк
//     console.log(arr[i])
// }

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i] + ' new sent')
// }

// for(let value of arr1) { // для массивов
//     //console.log(i)
//     console.log(value + ' new sent')
// }


// const obj3 = {
//     name: 'Y',
//     surmane: 'B',
//     car: 'X',
//     age: 19,
// }


// for(let i = 0; i < arr.length; i++) { 
//     if(typeof arr[i] === 'object') {
//         console.log('oh, this object')
//         continue
//     }
//     console.log(`Type variable ${arr[i].toString()} is ${typeof arr[i]}`)
// }

// try {
//     console.log(newVar)
//     let newVar = 'new var';

// }catch (err) {
//     console.error(`New error - ${err} !!!`)
// } //New error - ReferenceError: Cannot access 'newVar' before initialization !!!

// try {
//     let a = 10/0;
//     if (a === Infinity) {
//         throw new Error ('You cant devide by 0')
//     }
// } catch(err) {
//     console.error(`There is a new ERROR - ${err} !!!`)//There is a new ERROR - Error: You cant devide by 0 !!!
// } finally {}

// console.log('CONTUNUE')