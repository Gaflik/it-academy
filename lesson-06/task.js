// 1. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

let str = '264372';
let sum264 = 0;
let sum372 = 0;

for (let i = 0; i < str.length/2; i++) {
    sum264 = sum264 + Number(str[i]);
    sum372 = sum372 + Number(str[i + str.length/2]);
}
if (sum264 === sum372) {
    console.log('Да');
} else {
    console.log('Нет');
};

let str2 = '738695';
let sum738 = 0;
let sum695 = 0;

for (let i = 0; i < str2.length/2; i++) {
    sum738 = sum738 + Number(str2[i]);
    sum695 = sum695 + Number(str2[i + str2.length/2]);
}
if (sum738 === sum695) {
    console.log('Да');
} else {
    console.log('Нет');
};

// 2. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, 
// необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

let n = 1000;
let num = 1;

while(n >= 50) {
    console.log(n);
    console.log(num);
    n = n / 2;
    num++;
} 


// 3. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

let arr = [12, 15, 20, 25, 59, 79];
let sumArr = 0;
for (let i = 0; i < arr.length; i++) {
    sumArr = sumArr + arr[i];
}
let result = sumArr / arr.length;
console.log(result);

// 4. Дан массив [1, 2, 3, 4, 5]. Cделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

let arr2 = [1, 2, 3, 4, 5];
arr2.splice(3, 0, 'a', 'b', 'c');

// 5. Дан массив [1, 2, 3, 4, 5]. Cделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

let arr3 = [1, 2, 3, 4, 5];
arr3.splice(1, 0, 'a', 'b');
arr3.splice(6, 0, 'c');
arr3.push('e');

// 6. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

let arr4 = [3, 4, 1, 2, 7];
arr4.sort((a,b) => a - b);
