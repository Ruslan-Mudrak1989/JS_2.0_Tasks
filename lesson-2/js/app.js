// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.

console.log('******Task-1******');

let a = 7;
let b = 9;
console.log(a * b);

// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу результат деления c на d.

let c = 7;
let d = 9;

document.querySelector('.div').innerHTML = c / d;


// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу результат сложения e + f.

let e = 3;
let f = 5;

document.querySelector('.add').innerHTML = e + f;

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу результат сложения e1 + f1. Объясните разницу.

let e1 = '3';
let f1 = 5;

document.querySelector('.concat').innerHTML = e1 + f1; /*Когда мы соединяем число и строку происходит конкатенация*/

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу результат деления e2 на f2.

let e2 = 3;
let f2 = 0;

document.querySelector('.infinity').innerHTML = e2 / f2;


// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу результат сложения двух переменных.

let e3 = 3;
let f3 = 'Hello';

document.querySelector('.variable').innerHTML = e3 + f3;


// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу результат умножения двух переменных.

let e4 = 3;
let f4 = 'Hello';

document.querySelector('.mult').innerHTML = e4 * f4;

// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.

console.log('*****Task-8******');

let inputIn = document.querySelector('.input-in');
let btn = document.querySelector('.btn');

btn.onclick = function () {
    console.log(inputIn.value);
};

// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция,
// которая выводит на страницу, что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.


let input = document.querySelector('.input');
let button = document.querySelector('.button');
let output = document.querySelector('.out');


button.onclick = function () {
    let inputValue = input.value;
    output.innerHTML = inputValue;
    input.value = '';
};

// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое
// ввел пользователь умноженное на 10.

let input2 = document.querySelector('.num');
let btn2 = document.querySelector('.btn-2');
let out2 = document.querySelector('.out-2');

btn2.onclick = function () {
    let inputValue2 = input2.value;
    out2.innerHTML = inputValue2 * 10;
    input2.value = '';
};

// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число,
// которое ввел пользователь и к нему добавленное число 10.

let number = document.querySelector('.num-2');
let btn3 = document.querySelector('.btn-3');
let out3 = document.querySelector('.out-3');

btn3.onclick = function () {
    let inputNum = number.value;
    out3.innerHTML = inputNum + 10;
    number.value = '';
};

// Task 12.
// Создайте два input и кнопку. В первый input пользователь вводит имя, во второе фамилию.
// При нажатии кнопки выполняется функция, которая выводит в консоль строку 'Hello имя фамилия', где имя - имя пользователя
// и фамилия - введенная фамилия.

console.log('*****Task-12*****');

let name = document.querySelector('.name');
let surname = document.querySelector('.surname');
let send = document.querySelector('.send');
name.style.color = 'red';
surname.style.color = 'green';

send.onclick = function () {
    console.log('Hello '+ name.value +' '+ surname.value);
};

// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция,
// которая выводит сумму данных двух чисел на страницу.

let number1 = document.querySelector('.number-1');
let number2 = document.querySelector('.number-2');
let count = document.querySelector('.count');
let outputNum = document.querySelector('.output-num');



count.onclick = function () {
    let firstNum = +number1.value;
    let secondNum = +number2.value;
    outputNum.innerHTML = firstNum + secondNum;
};

// Task 14.
// Создайте input и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.

let change = document.querySelector('.change');
change.value ='Hello';

// Task 15.
// Создайте input и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red'.
// Изучите результат операции.

let y = document.querySelector('.y');
y.style.border = '2px solid red';

// Task-16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел.

let number3 = document.querySelector('.number-3');
let number4 = document.querySelector('.number-4');
let addNum = document.querySelector('.add-num');

addNum.onclick = function(){
   document.querySelector('.output-num-1').innerHTML = +number3.value + +number4.value;
};

// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию,
// которая запускается по нажатию на кнопку. Получите значение из input в переменную t.
// А затем сделайте операцию t = parseInt(t), и результат операции выведите в консоль.
// Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

console.log('*****Task-17*****');

let inputIn2 = document.querySelector('.input-in-2');
let btn4 = document.querySelector('.btn-4');


btn4.onclick = function () {
    let t = inputIn2.value;
    console.log(parseInt(t));
};

// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число.
// Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t.
// А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию.
// Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

console.log('*****Task-18*****');

let inpuIn3 = document.querySelector('.input-in-3');
let btn5 = document.querySelector('.btn-5');

btn5.onclick = function () {
    let t = inpuIn3.value;
    console.log(parseFloat(t));
};

// Task19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел.

let number5 = document.querySelector('.number-5');
let number6 = document.querySelector('.number-6');
let count2= document.querySelector('.count-2');
let negative = document.querySelector('.negative');

count2.onclick = function () {
    negative.innerHTML = +number5.value + +number6.value
};
// Task20.
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку.
// По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...'
// куда поставьте соответствующие данные из inputов.

let name2 = document.querySelector('.name-2');
let surname2 = document.querySelector('.surname-2');
let age = document.querySelector('.age');
let job = document.querySelector('.job');
let send2 = document.querySelector('.send-2');
let outputUser = document.querySelector('.output-user');

send2.onclick = function () {
    outputUser.innerHTML = 'Dear ' + name2.value + ' ' + surname2.value + ', your age is ' + age.value +' years old, and you work as a ' + job.value
};



















