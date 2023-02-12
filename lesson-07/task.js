// Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге по 3 раза. У кого сумма трех бросков будет наибольшей - тот выиграл. 
// Если суммы равны то ничья

function playerThrow() {
    return Math.ceil(Math.random() * 6);
}

let summ1 = 0;
let summ2 = 0;

for (let i = 0; i < 3; i++) {
    player1 = playerThrow();
    summ1 += player1;
}

for (let k = 0; k < 3; k++) {
        player2 = playerThrow();
        summ2 += player2;
} 

if (summ1 > summ2) {
    console.log('First win')
} else if (summ1 < summ2) {
    console.log('Second win')
} else if (summ1 === summ2) {
    console.log('Draw')
}


// 2. Подсчитать количество Пятниц 13-ого с 01/01/2000 до сегодня. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )

let startDate = new Date('2000-01-01T00:00:00.000Z')
let endDate = new Date('2023-01-20T00:00:00.000Z')
let numOfDays = 0;

function fridaysOf13() {
    for (let i = startDate; i <= endDate; startDate.setDate(startDate.getDate() + 1)) {
        if (startDate.getDate() === 13 && startDate.getDay() === 5) {
            numOfDays++;
        } 
    }
    return numOfDays
}
console.log(fridaysOf13())


// 3. Напишите код который будет разбивать число на заданное количество рандомных чисел сумма которых будет равна 
// изначальному числу. Пример: разбить 15 на 3 части (сумма четырех чисел будет равна 15) (4,6,5)
// а. числа изначальное число целое, числа разбивки - целые (4,6,5)

let num = 45;
let parts = 5;
let numArr = [];

for (let i = 1; i <= parts; i++) {      
    if (i === parts) {
        numArr.push(num);
        break;
    }

    let partOfNum = Math.round(Math.random() * num);
    numArr.push(partOfNum);
    num -= partOfNum;
}
console.log(numArr)
function sumOfnumParts() {
    return numArr.reduce((accumulator,currentValue) => accumulator + currentValue)
}
console.log(sumOfnumParts())


// б. числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)

let num2 = 35;
let parts2 = 6;
let numArr2 = [];

for (let i = 1; i <= parts2; i++) {      
    if (i === 6) {
        numArr2.push(Number(num2.toFixed(2)));
        break;
    }

    let partOfNum2 = Number((Math.random() * num2).toFixed(2));
    numArr2.push(partOfNum2);
    num2 -= partOfNum2;
}
console.log(numArr2)
function sumOfnumParts2() {
    return numArr2.reduce((accumulator,currentValue) => accumulator + currentValue)
}
const sumOfnumParts2round = Math.round(sumOfnumParts2());
console.log(sumOfnumParts2round)