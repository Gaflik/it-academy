// 1. Решить используя промисы и async/await. Сделайте 3 промиса, в каждом из которых расположена функция setTimeout 
// со случайной задержкой от 1 до 5 секунд. Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.
// С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.

function getRandNum(min,max) {
    return Math.floor(Math.random() * (max - min) + min)
}

let numOne = new Promise((resolve, reject) =>
    setTimeout(() => {
        resolve('One')
    }, getRandNum(1,6) * 1000) //600)//
);

let numTwo = new Promise((resolve, reject) =>
    setTimeout(() => {
        resolve('Two')
    }, getRandNum(1,6) * 1000)
);

let numThree = new Promise((resolve, reject) =>
    setTimeout(() => {
        resolve('Three')
    }, getRandNum(1,6) * 1000)
);

Promise.race([numOne, numTwo, numThree])
    .then(
        data => {
            console.log(data)
        })
    .catch(err => {
        console.log(`error ${err}`)
    })


// 2. Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 
// до 5. Создайте async функцию, которая с помощью await будет дожидаться результата getNum, затем возводить его в 
// квадрат и выводить на экран.

function getNum() {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve(getRandNum(1,6));
        }, 3000);
    })
}

async function waitGetNum() {
    let getNumResult = await getNum();
    let result = await Math.pow(getNumResult, 2);
    console.log(result);
}
waitGetNum()
 

// 3. Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 
// до 5. Сделайте также функцию getNum2, которая возвращает промис, который с задержкой в 5 секунд выведет случайное 
// число от 6 до 10. Создайте async функцию, которая с помощью await будет дожидаться результата getNum1, затем будет 
// дожидаться результата getNum, а затем найдет сумму полученных чисел и выводит на экран.

function getNum2() {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve(getRandNum(6,11));
        }, 3000);
    })
}

async function waitGetNum2() {
    let getNumResult = await getNum();
    let getNumResult2 = await getNum2();
    let result = await getNumResult + getNumResult2;
    console.log(result);
}
waitGetNum2()