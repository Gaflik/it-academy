function add(first, b) {
    return first + b;
};

// console.log(add()) //в функции не обязательно задавать параметр , если параметр не задан, возвращает НаН
// console.log(add(1)) // можно вызвать один параметр
// console.log(add(2, 17))
// console.log(add(1, 4, 6, 6, 9)) .. можно много, выведет две

// (function asd() {
//     console.log(5+6);
//     return 5 + 6;
// })(); // IIFE функция вызывается сама

let a = 5

// function newA() {
//     console.log(10);
//     return 10;
// }; // такая сама не вызывается

const arr2 = [1, 2, 5, 9, 4, 13, 4, 10];
const findNumber = arr2.find(number => number === 4)
const findNumber1 = arr2.find(function (number) {
    return number === 4;
});
const findNumber3 = arr2.find(number => {
    return number === 4
});

const obj = {
    name: 'Yau',
    surname: 'B',
    car: 'H',
    age: 19,
    greet: function (aditionalText) {
        console.log(`My name is ${this.name} ${this.surname}, I am ${this.age} years old and I have a car ${this.car}. ${aditionalText}`)
    }
}

const obj1 = {
    name: 'Misha',
    surname: 'Wolf',
    car: 'Mers',
    age: 32,
}
////////////////////////// Как вызывать функции
//obj.greet();

// obj.greet.call(obj1, 'Addddddd');
// obj.greet.apply(obj1, ['fdfdf', 'sdsdfsdf', 'sdfdsfds']);
// //
// const func = obj.greet.bind(obj1, 'Addd');
// //
// func();


////////////////////////////  Азгумент - это тип функции когда вы можете обрабатывать неограниченное количество атрибутов, которые передаются в функции. Нет типов, все строками обраб, аргументы, кот не передаются они андефаинд

// function multuply(first, second) {
//     return first * second;
// };
// console.log(multuply(5, 7)); //35
// console.log(multuply(5, 7, 10, 12, 15)) // 35



// function multuplyA(first, second) {
//     for(let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i])
//     }
//     return first * second;
// };
// console.log(multuplyA(5, 7, 10, 12, 15))//5 7 10 12 15

// function multuplyB(first, second) {
//     let sum = first * second;
//     for(let i = 2; i < arguments.length; i++) {
//         sum *= arguments[i]
//     }
//     return sum;
// };
// console.log(multuplyB(5, 7, 10, 12, 15))

// function multuply1(first, second, ...rest) {
//     let sum = first * second;
//     for(let i = 0; i < rest.length; i++) {
//         console.log(rest[i])
//         sum *= rest[i]
//     }
//     return sum;
// };

// multuply1(10, 15) //  не отработает, т.к. мы ни разу не вошли в цикл
// multuply1(10, 15, 7, 19, 20) // 7 19 12
// console.log(multuply1(10, 15)) // 150 
// console.log(multuply1(10, 15, 7, 19, 20)); // 7 19 20 399000


// function greeting(name, surname, age, car, additionalText) {
//     console.log(`My name is ${name} ${surname}, I am ${age} years old and I have a car ${car}. ${additionalText}`)
// }
// greeting(); //My name is undefined undefined, I am undefined years old and I have a car undefined. undefined


// function greeting(greet, name = 'Masha', surname = 'Yak', age = 22, car = 'BMW') {
//     console.log(`${greet} My name is ${name} ${surname}, I am ${age} years old and I have a car ${car}.`)
// }

// greeting('Hi'); //
// greeting('Hello','YA', "Bi", 34);


/////////////////// Замыкания

// function counter() {
//     let count = 0;
//     return function () {
//         return count++;
//     }
// }
// const newCounter = counter();
// console.log(newCounter());
// console.log(newCounter());
// console.log(newCounter());
// console.log(newCounter());
// console.log(newCounter()); // замкнул переменную каунт на контекст в функцию 

function counter() {
    let count = [];
    return function (result) {
        count.push(result);
        return count;
    }
}

const newCounter = counter();
const newCounter1 = counter();
console.log(newCounter({number: 1, result: 'passed'}));
console.log(newCounter({number: 2, result: 'passed'}));
console.log(newCounter({number: 3, result: 'skip'}));
// console.log(newCounter1())
console.log(newCounter({number: 4, result: 'failed'}));
console.log(newCounter({number: 5, result: 'passed'}));
console.log(newCounter({number: 6, result: 'passed'}));

console.log(newCounter1())
console.log(newCounter1())
console.log(newCounter1())