//  Task 1.--------------------
// Создайте функцию (именнованную), которая при клике на кнопке выводит в консоль ваше имя.

document.querySelector('.btn-1').onclick = name;

function name() {
    console.log('Ruslan');
}

// Task 2.--------------------
// Создайте функцию (именованную). Функция должна примать один параметр - имя (например Ivan) и выводить имя переданное
// ей в консоль. Запустите функцию и передайте в качестве имени Sergey.

document.querySelector('.btn-2').onclick = () => {
    changeName('Sergey');
};

function changeName(Ivan) {
    console.log(Ivan);
}


// Task 3.--------------------
// Создайте именнованную функцию, которая принимает параметр число и выводит его значение умноженное на 10 в консоль.
//     Запустите выполнение функции. Убедитесь, что она работает. Теперь создайте кнопку и добавьте на нее событие onclick
// которое вызывает данную функцию с параметром.
//
//     Если вы напишите, подобный синтаксис elem.onclick = myFunc(11), то увидите, что данная функция - выполняется сразу
// при загрузке страницы! Действительно, ведь мы поставили скобки. Как передать параметр и не запустить функцию сразу?
//     Довольно хитро:

//elem.onclick = function(){
//     myFunc(22);
// }

function num(a) {
    console.log(a * 10);
}

let mult = document.querySelector('.btn-3');

mult.onclick = () => {
    num(7);
};


// Task 4.--------------------
// Создайте кнопку и функцию. При нажатии кнопки, функция окрашивает данную кнопку в background: red.

let btn4 = document.querySelector('#task-4 button');
btn4.onclick = color;

function color() {
    btn4.style.backgroundColor = 'red';
}


// Task 5.--------------------
// Создайте функцию, которая возвращает ваше имя. Имя вводится с input

let userName = document.querySelector('#name-2');
let btn5 = document.querySelector('#task-5 button');
let p5 = document.querySelector('#task-5 p');


function myName() {
    return  p5.innerHTML = userName.value;
}

btn5.onclick = myName;


// Task 6.--------------------
// Создайте функцию, которая принимает 2 числа и возвращает большее число из двух, либо любое из них если они равны.

document.querySelector('.btn-6').onclick = () => {
    moreThan(7, 8);
};

function moreThan(a, b) {
    if (a > b) {
        return console.log(a);
    } else if (a < b) {
        return console.log(b);
    } else {
        return console.log(a);
    }
}


// Task 7.--------------------
// Создайте функцию, которая принимает год рождения и возвращает ваш возраст. Текущий год задавать как 2019.
let curYear = 2019;
let birthYear = document.querySelector('#year');
let out7 = document.querySelector('#task-7 pre');

function age() {
    let res = curYear - birthYear.value;
    return out7.innerHTML = res;
}

birthYear.onchange = age;


// Task 8.--------------------
// Создайте функцию, которая возвращает случайное число от 1 до 10. По случайным числам читаем все здесь и задаем
// вопросы в чате.
document.querySelector('.btn-8').onclick = () => {
    console.log(randomInteger(1, 10));
};


function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}


// Task 9.--------------------
// Создайте функцию, которая возвращает случайное число в указанном диапазоне. Диапазон указывает пользователь с помощью
// двух переменных, которые передаются функции в качестве параметров.

let btn9 = document.querySelector('.btn-9');
let out9 = document.querySelector('#task-9 pre');
let x = 15;
let p = 35;

function randomNum(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

btn9.onclick = () => {
    out9.innerHTML = randomNum(x, p);
};


// Task 10.--------------------
// Создайте функцию, которая возвращает случайный цвет. Напомню - цвет это строка rgb(0..255, 0..255, 0..255) - которая
// содержит 3 числа от нуля до 255 включительно, разделенных запятыми. Т.е. вам нужно три раза создать случайное
// число от 0 до 255.

let btn10 = document.querySelector('.btn-10');
let out10 = document.querySelector('#task-10 pre');

function randomColor() {
    return Math.floor(Math.random() * (255 - 0)) + 0;
}

btn10.onclick = () => {
   out10.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
};


// Task 11.--------------------
// Создайте функцию f11, которая возвращает число 5. Создайте функцию которая принимает 2 параметра и перемножает
// их между собой. В качестве первого параметра передайте f11().

let btn11 = document.querySelector('.btn-11');
let out11 = document.querySelector('#task-11 pre');

function f11() {
    return 5;
}

function multiply(h, j) {
    return h * j;
}

btn11.onclick = () => {
    out11.innerHTML = multiply(7,f11())
};


 // Task 12.--------------------
// Создайте функцию toNum, которая принимает 1 параметр - объект input, и возвращает введенное в него значение преобразованное в число.

let enter = document.querySelector('#enter');
let btn12 = document.querySelector('.btn-12');
let out12 = document.querySelector('#task-12 pre');

function toNum(a) {
    return +a;
}

btn12.onclick = () => {
    out12.innerHTML = toNum(enter.value);
    enter.value = '';
};



 //  Task 13.--------------------
// Создайте функцию emptyInput - которая принимает в качестве параметра input, удаляет все пробелы введенные до и после
// значения (trim), и проверяет - если результат равен пустой строке - то возвращает false, если нет - то сам результат
// с обрезанными пробелами.

let btn13 = document.querySelector('.btn-13');
let input13 = document.querySelector('#input-13');
let out13 = document.querySelector('#task-13 pre');
function emptyInput(par) {
    if (par == ''){
        return false;
    } else {
        return par.trim();
    }
}
btn13.onclick = () => {
    out13.innerHTML = emptyInput(input13.value);
};

 // Task 14.--------------------
// Создайте функцию, которая принимает параметр число и возвращает true если число четное и false если нечетное.

let btn14 = document.querySelector('.btn-14');
let out14 = document.querySelector('#task-14 pre');

function even(ev) {
    return +ev % 2 == 0;
}

btn14.onclick = () => {
    out14.innerHTML = even(5);
};


// Task 15.--------------------
// Создайте div, задайте ему ширину и высоту в CSS, границу. Добавьте на div событие onmousemove - и стрелочную функцию
// срабатывающую при этом событии. Стрелочная функция должна выводить move в консоль.

let movement = document.querySelector('.m-move');

movement.onmousemove = () => {
    console.log('Move!');
};


//  Task 16.--------------------
// Создайте div, задайте ему ширину и высоту в CSS, границу. Добавьте на div событие onmouseenter - и стрелочную функцию
// срабатывающую при этом событии. Стрелочная функция должна выводить enter в консоль.

let enterM = document.querySelector('.m-enter');

enterM.onmouseenter = () => {
    console.log('Enter!');
};


 //  Task 17.--------------------
// Создайте div, задайте ему ширину и высоту в CSS, границу. Добавьте на div событие onmouseleave- и стрелочную функцию
// срабатывающую при этом событии. Стрелочная функция должна выводить leave в консоль.

let mLeave = document.querySelector('.m-leave');

mLeave.onmouseleave = () => {
    console.log('Leave!');
};

 //  Task 18.--------------------
// Создате div задайте ему ширину и высоту в CSS, границу. Добавьте на div событие onclick и анонимную ( не стрелочную)
// функцию, внутрь которой запишите this.style.background = 'red'; В этом случае this указывает на объект, на котором
// приозошло событие.

let bg18 = document.querySelector('.bg');

bg18.onclick = function () {
    this.style.background = 'red';
};

 //  Task 19.--------------------
// Создате div задайте ему ширину и высоту в CSS, границу. Добавьте на div событие onclick и стрелочную функцию,
// внутрь которой запишите this.style.background = 'red'; Увы, в данном случае (особенность стрелочных функций)
// не указывает на объект где произошло событие.

let bg19 = document.querySelector('.bg-19');

bg19.onclick = () => {
    this.style.background = 'red';
};

 //  Task 20.--------------------
// Создайте 5 div.go с текстом. C помощью цикла повесьте на них событие клик и анонимную (не стрелочную) функцию.
//     Внутри функции укажите this.style.background = 'red'; Кликайте по div, изучите результат.

let go = document.querySelectorAll('.go');
for (let i = 0; i < go.length; i++) {
    go[i].onclick = function () {
        this.style.background = 'red';
    }
}

