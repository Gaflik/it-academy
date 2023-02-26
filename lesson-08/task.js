// 1. поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]

let arr = [1, 2, 3, 4, 5, 6];

function reverseArr() {
    return arr.reverse();
}


// 2. найти максимальное значение числа в массиве ([3,67,15...])

let numArray = [3, 67, 15, 78, 35, 101, -587];

function getArrayMax(numArray) {
  return Math.max.apply(null, numArray);
}


// 3. записать в массив ряд фибоначчи начиная с N члена с длинной массива M
let m = 10;
let arrFibonachi = new Array(m);

function getFibonachiArr() {
  function getFibonachi(n) {
    return n <= 1 ? n : getFibonachi(n-1) + getFibonachi(n-2);
  }
  for (let i = 0; i < m; i++) {
    arrFibonachi[i] = getFibonachi(0 + i);
  }
  return arrFibonachi
}


// 4. даны 2 4-х значных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают 
// по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 )

let num1 = 3487;
let num2 = 3794;
let counter1 = new Array();
let counter2 = new Array();
let num1Arr = Array.from(String(num1), Number);
let num2Arr = Array.from(String(num2), Number);

function compareValue() {
  for (let i = 0; i < num1Arr.length; i++) {
    for (let k = 0; k < num2Arr.length; k++) {
      if (num1Arr[i] === num2Arr[k]) {
        counter2.push(num1Arr[i])
      } 
    }
    if (num1Arr[i] === num2Arr[i]) {
      counter1.push(num1Arr[i])
    }
  }
  return [counter1.length, counter2.length]
}


// 5. сортировка массива по возрастанию/убыванию

numArray = numArray.sort(function (a, b) {
  return a - b;
});

numArray = numArray.sort(function (a, b) {
  return b - a;
});


// 6. удалить из массива все повторяющиеся элементы

const numArr = [5, 7, 7, 8, 5, 8];

let numArr2 = numArr.filter((item, index) => {
  return numArr.indexOf(item) === index;
});

