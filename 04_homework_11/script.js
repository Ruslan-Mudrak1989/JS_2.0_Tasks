// task 1 Создайте пустой массив arr1, input.u-1, кнопку button.u-2__push. При нажатии кнопки, функция читает содержимое
// input и добавляет содержимое в массив, после чего выводит содержимое массива в div.out-1.

const u1 = document.querySelector('.u-1');
const out1 = document.querySelector('.out-1');
let arr1 = [];
document.querySelector('.u-2__push').onclick = pushme;

function pushme() {

    if (u1.value.trim() == '') {
        out1.innerHTML = 'Please enter some data';
        out1.style.color = 'red';
    } else {
        arr1.push(u1.value);
        out1.innerHTML = arr1;
        out1.style.color = 'black';
    }
    u1.value = '';
}


// task 2 Добавьте к предыдущему заданию кнопку button.u-2__pop, при нажатии которой, к массиву arr1 применяется метод
// pop, после чего массив выводится в div.out-1

const pop = document.createElement('button');
pop.classList.add('u-2__pop');
pop.innerHTML = 'Pop';
out1.before(pop);

pop.onclick = function () {
    arr1.pop();
    return out1.innerHTML = arr1;
};


// task 3 Добавьте к заданию 1 кнопку button.u-3__shift, которая применяет к массиву arr1 метод shift ( читать за метод
// shift). После применения shift, массив arr1 выподится в div.out-1.

const shift = document.createElement('button');
shift.innerHTML = 'Shift';
shift.classList.add('u-3__shift');
out1.before(shift);


shift.onclick = () => {
    arr1.shift();
    return out1.innerHTML = arr1;
};


// task 4 Добавьте к заданию 1 кнопку button.u-4__unshift, которая применяет к массиву arr1 метод unshift ( читать за
// метод unshift). После применения unshift, массив arr1 выподится в div.out-1. Надеюсь, вы догадаетесь проверять input
// на пустоту перед применением unshift. Надеюсь, вы это сделали и в первой задаче?

const unshift = document.createElement('button');
unshift.innerHTML = 'Unshift';
unshift.classList.add('u-4__unshift');
out1.before(unshift);


unshift.onclick = () => {
    if (u1.value.trim() == '') {
        out1.innerHTML = 'Please enter some data';
        out1.style.color = 'red';
    } else {
        arr1.unshift(u1.value);
        out1.innerHTML = arr1;
        out1.style.color = 'black';
    }
    u1.value = '';
};

// task 5 Обьявите массив arr5, добате два элемента input, в первый пользователь может ввести индекс элемента, во
// второй - количество. Добавьте кнопку, по нажатию на которую к массиву arr5 применяется метод splice. Результат
// применения выводите в div.out-5.
// let arr5 = [3,14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];

let arr5 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];

const index5 = document.querySelector('.index-5');
const amount5 = document.querySelector('.amount-5');
const out5 = document.querySelector('.out-5');

document.querySelector('.splice-5').onclick = func_5_spl;

function func_5_spl() {
    arr5.splice(+index5.value, +amount5.value);
    out5.innerHTML = arr5;
}


// task 6 Напишите функцию funcPush, которая эмулирует работу метода push, функция, по нажатию кнопки:
//
// читает содержимое input в переменную
// вычисляет длину массива
// присваивает массиву новый элемент, а в качестве индекса указывает длину массива
// Выводит массив на страницу

const item6 = document.querySelector('.item-6');
const out6 = document.querySelector('.out-6');

document.querySelector('.push-6').onclick = funcPush;

let arr6 = [];

function funcPush() {
    let input6 = item6.value;
    if (input6.trim() == '') {
        out6.innerHTML = 'Enter some item';
        out6.style.color = 'red';
    } else {
        arr6[arr6.length] = input6;
        out6.innerHTML = arr6;
        out6.style.color = 'black';
    }
    item6.value = '';
}


// // task 7 Напишите функцию funcPop, которая эмулирует работу метода pop, функция, по нажатию кнопки:
//
// удаляет последний элемент массива
// Выводит массив на страницу

const pop7 = document.querySelector('.pop-7');
const out7 = document.querySelector('.out-7');

let arr7 = [1, 2, 3, 4, 5];
out7.innerHTML = arr7;

pop7.onclick = funcPop;

function funcPop() {
    arr7.length = arr7.length - 1;
    out7.innerHTML = arr7;
}

// ALTERNATIVE 1

// function funcPop() {
//     let a =[];
//     for (let i = 0; i < arr7.length-1; i++) {
//         a.push(arr7[i]);
//     }
//     arr7 = a;
//     out7.innerHTML = a;
// }


// task 8 Напишите функцию funcShift, которая эмулирует работу метода shift, функция, по нажатию кнопки:
//
// Создает новый массив где нулевым элементом выступает первый элемент исходного массива
// Выводит массив на страницу

const input8 = document.querySelector('.in-8');
const out8 = document.querySelector('.out-8');

document.querySelector('.shift-8').onclick = funcShift;


let arr8 = [3, 4, 14, 5, 63, 71];


function funcShift() {
    let b = [];
    for (let i = 1; i < arr8.length; i++) {
        b.push(arr8[i]);
    }
    arr8 = b;
    out8.innerHTML = arr8;
}


// task 9 Напишите функцию funcUnShift, которая эмулирует работу метода unshift, функция, по нажатию кнопки:
//
// читает содержимое input в переменную
// создает новый массив где нулевым элементов задает считанную из input строку
// дописывает остальные значения старого массива в новый
// Выводит массив на страницу

const input9 = document.querySelector('.in-9');
const out9 = document.querySelector('.out-9');

document.querySelector('.unshift-9').onclick = funcUnShift;


let arr9 = [];

function funcUnShift() {
    let in9 = input9.value;
    if (in9.trim() == '') {
        out9.innerHTML = 'Please write some data';
        out9.style.color = 'red';
    } else {
        let newArr = [];
        newArr[0] = in9;
        for (let i = 0; i < arr9.length; i++) {
            newArr.push(arr9[i]);
        }
        arr9 = newArr;
        out9.innerHTML = arr9;
        out9.style.color = 'black';
    }
    input9.value = '';

}


//  task 10  Создайте массив arr10, примените к массиву метод reverse ( читать за метод reverse). После применения
//  reverse, массив arr10 выподится в div.out-10.
//let arr10 = [2,4, 6, 8, 10, 'hello'];

let arr10 = [2, 4, 6, 8, 10, 'hello'];

arr10.reverse();
document.querySelector('.out-10').innerHTML = arr10;


//  task 11 Создайте input.u-11__input и кнопку button.u-11__button. Объявите массив arr11. По нажатию на кнопку,
// читайте содержимое input.u-11__input в переменную u11. Потом примените к массиву arr11 метод indexOf ( читать за метод
// indexOf). Результат применения indexOf выводите на страницу в div.out-11. Последовательно проверьте программу вводя в
// input числа 1, 3, 5, 12.
// let arr11 = [0, 2, 3, 7, 8, 5, 11];

const input11 = document.querySelector('.u-11__input');
const out11 = document.querySelector('.out-11');

let arr11 = [0, 2, 3, 7, 8, 5, 11];

document.querySelector('.u-11__button').onclick = function () {
    const u11 = +input11.value;
    out11.innerHTML = arr11.indexOf(u11);
    input11.value = '';
};

// task 12 Напишите функцию funcIndexOf, которая эмулирует работу метода indexOf. Программа должна:
// читает содержимое input в переменную
// Запускать цикл по массиву и сравнивать каждый элемент массива с введенным.
// Если совпадение есть - останавливать цикл и выводить номер индекса на котором произошло совпадение.
// Если совпадения нет выводить -1.

const input12 = document.querySelector('.u-12__input');
const out12 = document.querySelector('.out-12');

let arr12 = [54, 3, 12, 67, 'hi', false, 11];

document.querySelector('.u-12__button').onclick = funcIndexOf;

function funcIndexOf() {
    let value12 = input12.value;
    for (let i = 0; i < arr12.length; i++) {
        console.log(arr12[i]);
        if (arr12[i] == value12) {
            out12.innerHTML = i;
            break;
        } else {
            out12.innerHTML = -1;
        }
    }
    input12.value = '';
}


// task13 Напишите функцию funcReverse, которая эмулирует работу метода reverse. Программа должна:
//
// Создать новый пустой массив
// Перебирать старый массив с конца (массив создайте сами)
// По очереди по элементу присвоить значения в новый массив.
// Вывести новый массив.


const out13 = document.querySelector('.out-13');
let arr13 = [13, 28, 'Hello', true, 29, 14, 'bye'];


document.querySelector('.u-13__button').onclick = function () {
    let newArr13 = [];
    for (let i = arr13.length - 1; i >= 0; i--) {
        newArr13.push(arr13[i]);
    }
    out13.innerHTML = newArr13;
};


// task14 Создайте инпут, куда пользователь может ввести число элементов в массиве. Создайте функцию, которая прочитает
// введенное число и создаст массив такой длины, причем каждый элемент - это случайное число от 0 до 100.
// Массивы выведите на страницу.

const input14 = document.querySelector('.u-14__input');
const out14 = document.querySelector('.out-14');
let min = 0;
let max = 100;

document.querySelector('.u-14__button').onclick = function () {
    funcLength(min, max)
};


function funcLength(min, max) {
    let value14 = +input14.value;
    let arr14 = [];
    arr14.length = value14;
    for (let i = 0; i < arr14.length; i++) {
        arr14[i] = (Math.floor(Math.random() * (max - min + 1)) + min);
    }
    out14.innerHTML = arr14;
}


// task 15. Создайте массив arr15. Напишите функцию, которая создаст новый массив, в который входят только четные
// элементы массива arr15 (элементы с четным индексом). Выведите на экран.


const btn15 = document.querySelector('.u-15__button');
const out15 = document.querySelector('.out-15');

let arr15 = [45, 2, 14, 51, 5, 16, 13];

btn15.onclick = even;

function even() {
    let newArr15 = [];
    for (let i = 0; i < arr15.length; i++) {
        if (i % 2 == 0) {
            newArr15.push(arr15[i]);
        }
    }
    out15.innerHTML = newArr15;
    console.log(newArr15);
}


// task 16.Создайте button.u-16__button. Объявите массив arr16_1 и arr16_2. По нажатию на кнопку примените к массивам
// метод concat ( читать за метод concat). Результат применения concat выводите на страницу в div.out-16.
//
// let arr16_1 = [3, 5, 7 ];
// let arr16_2 = [2, 4, 6 ];

let arr16_1 = [3, 5, 7];
let arr16_2 = [2, 4, 6];

document.querySelector('.u-16__button').onclick = function () {
    document.querySelector('.out-16').innerHTML = arr16_1.concat(arr16_2);
};

// task 17. Напишите функцию funcConcat, которая эмулирует работу метода concat. Программа должна:
//
// Перебирает второй массив и его элементы добавляет в первый массив.
// Выводит массив на страницу.


let out17 = document.querySelector('.out-17');

let arr17_1 = [1, 2, 3];
let arr17_2 = ['a', 'b', 'c'];

document.querySelector('.u-17__button').onclick = function () {
    for (let i = 0; i < arr17_2.length; i++) {
        arr17_1.push(arr17_2[i]);
    }
    out17.innerHTML = arr17_1;
};

// task 18. Создайте button.u-18__button и input.u-18__input. Объявите массив arr18 . По нажатию на кнопку примените к
// массивам метод includes, который проверяет есть ли в массиве значение введенное в input. ( читать за метод includes).
// Результат применения includes выводите на страницу в div.out-18.
// let arr18 = [3, 5, 7, 11, 12, 13, 14 ];

let arr18 = [3, 5, 7, 11, 12, 13, 14];

let input18 = document.querySelector('.u-18__input');
let out18 = document.querySelector('.out-18');
let btn18 = document.querySelector('.u-18__button');



btn18.onclick = () => {
    if (input18.value.trim() == '') {
        out18.innerHTML = 'Please enter some item';
        out18.style.color = 'red';
    } else {
        out18.innerHTML = arr18.includes(+input18.value);
        out18.style.color = 'black';
    }
};


//  task 19. Напишите функцию funcIncludes, которая эмулирует работу метода includes. Программа должна:
//
// Перебирает второй массив и сравнивать если введенный элемент совпал с текущим - прекращать работу цикла и выводить true.
// Если совпадений нет - false.


let input19 = document.querySelector('.u-19__input');
let out19 = document.querySelector('.out-19');
let btn19 = document.querySelector('.u-19__button');


btn19.onclick = () => {
    for (let i = 0; i < arr18.length; i++) {
        if (arr18[i] == +input19.value) {
            out19.innerHTML = true;
            out19.style.color = 'black';
            break
        } else if (input19.value.trim() =='') {
            out19.innerHTML = 'Please enter correct item';
            out19.style.color = 'red';
        } else {
            out19.innerHTML = false;
            out19.style.color = 'black';
        }
    }
};


 // task20 Объявите массив arr20. Создайте кнопку, по нажатию которую к массиву применяется метод join ( читать за
// метод join). Результа выведите на страницу.

let arr20 = ['I','am',30,'years','old'];

document.querySelector('.u-20__button').onclick = () => {
    document.querySelector('.out-20').innerHTML =  arr20.join(' ');
};






