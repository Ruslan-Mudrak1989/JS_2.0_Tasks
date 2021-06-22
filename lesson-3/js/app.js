// Task 1.
// Создайте переменную a = 4. Используя конструкцию if проверьте что a == 4. Выведите сообщение в консоль.

console.log('******Task-1******');

let a = 4;

if (a == 4) {
    console.log('True');
}

// Task 2.
// Создайте b = 8 и с = 10. С помощью if, else выведите в консоль сообщение о том, какая из переменных больше.

console.log('******Task-2******');

let b = 8;
let c = 10;

if (b > c) {
    console.log('b > c');
} else if (b == c) {
    console.log('b = c');
} else {
    console.log('b < c');
}

// Task 3.
// Используя else if добавьте в предыдущую задачу проверку на равенство.


// Task 4.
// Создайте на странице 2 input, куда пользователь может вводить числа. Добавьте кнопку.
// При нажатии кнопки выполняйте функцию, которая сравнит два числа и выведет большее на страницу. Если числа равны - выводится строка "равны".

const input1 = document.querySelector('.num-1');
const input2 = document.querySelector('.num-2');
const btn = document.querySelector('.btn-1');
const output = document.querySelector('.output');

btn.onclick = () => {
    let num1 = +input1.value;
    let num2 = +input2.value;
    if (num1 > num2) {
        output.innerHTML = num1;
    } else if (num1 < num2) {
        output.innerHTML = num2;
    } else {
        output.innerHTML = 'Равны';
    }
};


// Task 5.
// Создайте на странице input, куда пользователь может вводить год рождения. Добавьте кнопку. При нажатии кнопки выполняйте
// функцию, которая если год рождения меньше 2000 выводит на страницу возраст пользователя (2019 - введенный год рождения),
// если год рождения больше или равен 2000 - выводит в консоль возраст пользователя.

console.log('******Task-5******');

const year = document.getElementById('year');
const btn2 = document.querySelector('.btn-2');
const age = document.querySelector('.age');


btn2.onclick = () => {
    let yearValue = year.value;
    let currentYear = 2019;
    if (yearValue < 2000) {
        age.innerHTML = currentYear - yearValue;
    } else {
        console.log(currentYear - yearValue);
    }
};

// Task 6.
// Создайте input куда пользователь может ввести номер квартиры. Если квартира от 1 до 32 - то выводите сообщение,
// о том, что такая квартира есть,если другое число - сообщение о том, что квартира не существует.

const btn3 = document.querySelector('.btn-3');

btn3.onclick = () => {
    let apt = document.querySelector('#apt');
    let numApt = document.querySelector('.num-apt');
    if (apt.value >= 1 && apt.value <= 32) {
        numApt.innerHTML = '<b>The apartment is exist</b>';
    } else {
        numApt.innerHTML = '<b>The apartment is <span style="color: maroon">NOT Exist</span> </b>';
    }
};

// // Task 7.
// // Создайте input куда пользователь может ввести число. После нажатия кнопки -
// на страницу должно выводиться сообщение - большие или меньше нуля это число.

const btn4 = document.querySelector('.btn-4');

btn4.onclick = () => {
    let number = document.querySelector('#number');
    let output2 = document.querySelector('.output-2');
    if (number.value > 0) {
        output2.innerHTML = parseFloat(number.value) + ' > 0';
    } else if (number.value < 0) {
        output2.innerHTML = parseFloat(number.value) + ' < 0';
    } else {
        output2.innerHTML = 'Not a number';
    }
};

//  Task 8.
//  Создайте input куда пользователь может ввести число. После нажатия кнопки - на страницу должно выводиться сообщение -
//  четное или нет это число. Определить четное или нет число в JS очень просто. Нужно получить целый остаток от деления
//  (читать за оператор), для этого используется оператор % . И проверить.
//  Если остаток от деления 0 - то число четное, если нет - не четное.

const number2 = document.querySelector('#number-2');
const output3 = document.querySelector('.output-3');
const btn5 = document.querySelector('.btn-5');

btn5.onclick = () => {
    if (number2.value == 0) {
        output3.innerHTML = +number2.value;
    } else if (number2.value % 2 == 0) {
        output3.innerHTML = +number2.value + ' is even number';
    } else if (number2.value % 2 != 0) {
        output3.innerHTML = +number2.value + ' is odd number';
    }
    number2.value = '';
};


//  Task 9.
// Создайте 2 инпута. Если оба инпута заполнены (не равны пустой строке), то по нажатию кнопки число из первого
// инпута возведите в степень из второго input. Результат выведите на страницу.

const number3 = document.querySelector('#number-3');
const number4 = document.querySelector('#number-4');
const output4 = document.querySelector('.output-4');
const btn6 = document.querySelector('.btn-6');

btn6.onclick = () => {
    let num3 = +number3.value;
    let num4 = +number4.value;
    if (num3 != '' && num4 != '') {
        output4.innerHTML = num3 ** num4;
    } else {
        output4.innerHTML = 'Input the number';
    }
};

// Task 10.
// Есть поле input куда пользователь может ввести свое имя. Нужно при нажатии кнопки - сказать с помощью alert('Hello имя_пользователя'),
// но хитрые пользователи часто нажимают несколько раз пробел. Вроде ничего и не ввел, но программа считывает пробелы и пытается работать.
// Напишите проверку,которая выводит предупреждение если пользователь ничего не ввел, или ввел один пробел. В остальных случаях - Hello...

const name = document.querySelector('#name');
const btn7 = document.querySelector('.btn-7');

btn7.onclick = () => {
    if (name.value == '' || name.value == ' ') {
        alert('Please enter your name')
    } else {
        alert('Hello ' + name.value);
    }
};


// Task 11.
//Хитрый пользователь научился обходить нашу предыдущую задачу, и начал вводить где 3, а где и 5 пробелов.
// Напишите программу, которая проверяет пробелы или нет введены в строку. Как защититься от пробелов? Обрезать их.
// Допустим вы получили значение из input в переменную a. Теперь напишите a = a.trim(); - это обрежет пробелы и результат
// запишет в переменную a. Теперь просто сравните переменную a c пустой строкой.
// Если она равна - выведите ошибку, если нет - сообщение с содержимым input.

const name1 = document.querySelector('#name-1');
const btn8 = document.querySelector('.btn-8');

btn8.onclick = () => {
    let str = name1.value;
    str = str.trim();
    if (str == '') {
        alert('Incorrect input')
    } else {
        alert('Hello ' + str.trim());
    }
};

// Task 12.
// Пользователь может ввести число от 1 до 3. Если пользователь ввел 1 - то в консоль выведите слово "один" и т.д.
// Для решения используйте switch.

const number5 = document.querySelector('#number-5');

document.querySelector('.btn-9').onclick = () => {
    let num5 = +number5.value;
    switch (num5) {
        case 1:
            console.log('One');
            break;
        case 2:
            console.log('Two');
            break;
        case 3:
            console.log('Three');
            break;
        default:
            console.log('Incorrect');
    }
};

//  Task 13.
// Пользователь может ввести номер дома. Если дом от 1 до 5 - то улица 1, если от 6 до 11 -
// улица 2, если от 11 до 20 - улица 3. Используя if, elseif - реализуйте программу, которая будет указывать
// улицу в зависимости от введенного дома.


const building = document.querySelector('#building');
const street = document.querySelector('.street span');

document.querySelector('.btn-10').onclick = () => {
    const buildVal = +building.value;
    if (buildVal >= 1 && buildVal <= 5) {
        street.innerHTML = ' 1';
    } else if (buildVal >= 6 && buildVal <= 11) {
        street.innerHTML = ' 2';
    } else if (buildVal >= 12 && buildVal <= 20) {
        street.innerHTML = ' 3';
    } else {
        street.innerHTML = '<span style="color: maroon">There is no street<span/>';
    }
};

//  Task 14.
// Создайте input куда пользователь может ввести количество рентген. Это число от 0 и до 1000. С помощью if, else if
// реализуйте вывод по таблице: от 0 до 25 - не обнаруживается до 50 - снижение числа лимфоцитов до 100 - вялость, рвота,
// до 150 - смертность 5%, до 350 - смертность 50% за 30 суток, до 600 - 90% смертность за 2 недели.
// Больше 600 - смертность 100%. Вывод результатов сделайте на страницу.

const xRay = document.querySelector('#x-ray');
const btn11 = document.querySelector('.btn-11');
const outX = document.querySelector('.out-x span');

btn11.onclick = () => {
    if (+xRay.value >= 0 && +xRay.value <= 25) {
        outX.innerHTML = 'не обнаруживается';
    } else if (+xRay.value <= 50) {
        outX.innerHTML = ' снижение числа лимфоцитов';
    } else if (+xRay.value <= 100) {
        outX.innerHTML = 'вялость, рвота';
    } else if (+xRay.value <= 150) {
        outX.innerHTML = 'смертность 5%';
    } else if (+xRay.value <= 350) {
        outX.innerHTML = 'смертность 50% за 30 суток';
    } else if (+xRay.value <= 600) {
        outX.innerHTML = '90% смертность за 2 недели';
    } else {
        outX.innerHTML = '<b style="color: maroon">смертность 100%<b/>';
    }
};

// Task-15.
// Создайте переменные x = 1, y = 0. Выведите в консоль результат операции x && y, а затем x || y. Изучите результат.

console.log('*****Task-15*****');
let x = 1;
let y = 0;

console.log(x && y);
console.log(x || y);

// // Task 16.
// В Казахстане, налог на объем двигателя составляет:
//
//     от 0 до 499 кубов - 2525 тенге
// от 500 до 1199 кубов - 5050 тенге
// от 1200 до 1599 кубов - 8275 тенге
// от 1600 до 1899 кубов - 9675 тенге
// от 1900 до 1999 кубов - 11075тенге
// от 2000 и выше кубов - 15000 тенге
// Напишите программу, где пользователь может ввести в input объем двигателя и получить налог на данный двигатель.

const engine = document.querySelector('#engine');
const btn12 = document.querySelector('.btn-12');
const outEngine = document.querySelector('.out-engine span');

btn12.onclick = () => {
    let cubes = +engine.value;
    if (cubes >= 0 && cubes <= 499) {
        outEngine.innerHTML = ' 2525 тенге';
    } else if (cubes >= 500 && cubes <= 1199) {
        outEngine.innerHTML = ' 5050 тенге';
    } else if (cubes >= 1200 && cubes <= 1599) {
        outEngine.innerHTML = ' 8275 тенге';
    } else if (cubes >= 1600 && cubes <= 1899) {
        outEngine.innerHTML = ' 9675 тенге';
    } else if (cubes >= 1900 && cubes <= 1999) {
        outEngine.innerHTML = ' 11075 тенге';
    } else if (cubes >= 2000) {
        outEngine.innerHTML = '15000 тенге';
    } else {
        outEngine.innerHTML = ' Incorrect input'
    }
};


// // Task 17.
// // Создайте input type="text" куда пользователь может ввести строку и число.
// // Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t.
// // А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию.
// // Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

const dollar = document.querySelector('#dollar');
const othCurr = document.querySelector('#oth-curr');
const btn13 = document.querySelector('.btn-13');
const outCurr = document.querySelector('.out-curr span');


btn13.onclick = () => {
    let dolVal = dollar.value;
    let othVal = othCurr.value;

    if (othVal == 'uah') {
        outCurr.innerHTML = dolVal * 24.62;
    } else if (othVal == 'euro') {
        outCurr.innerHTML = dolVal * 0.9;
    } else if (othVal == 'rub') {
        outCurr.innerHTML = dolVal * 65.65;
    } else {
        outCurr.innerHTML = 'Incorrect currency';
    }
};

//  Task 18.
// Проделайте предыдущую задачу с помощью switch case.

const dollar1 = document.querySelector('#dollar-1');
const othCurr1 = document.querySelector('#oth-curr-1');
const btn14 = document.querySelector('.btn-14');
const outCurr1 = document.querySelector('.out-curr-1 span');


btn14.onclick = () => {
    let dolVal1 = dollar1.value;
    let othVal1 = othCurr1.value;

    switch (othVal1) {
        case 'uah':
            outCurr1.innerHTML = dolVal1 * 24.62;
            break;
        case 'euro':
            outCurr1.innerHTML = dolVal1 * 0.9;
            break;
        case 'rub':
            outCurr1.innerHTML = dolVal1 * 65.65;
            break;
        default:
            outCurr1.innerHTML = 'Incorrect currency';
    }
};

// Task 19.
// Создайте 2 input куда пользователь может ввести числа. В третий input - может ввести знак - минус, плюс, умножить, поделить.
// С помощью if, else if по нажатию кнопки выводите результат выбранной операции на страницу.

const numb1 = document.querySelector('#numb-1');
const numb2 = document.querySelector('#numb-2');
const btn15 = document.querySelector('.btn-15');
const symbol = document.querySelector('#sign');
const outSum = document.querySelector('.out-sum span');

btn15.onclick = () => {
    if (symbol.value == '+'){
        outSum.innerHTML = +numb1.value + +numb2.value;
    } else if (symbol.value == '-'){
        outSum.innerHTML = numb1.value - numb2.value;
    } else if (symbol.value == '*'){
        outSum.innerHTML = numb1.value * numb2.value;
    }else if (symbol.value == '/'){
        outSum.innerHTML = numb1.value / numb2.value;
    } else {
        outSum.innerHTML = 'Incorrect symbol';
    }
};

// Task 20.
// Проделайте предыдущую задачу с помощью switch case.

const numb3 = document.querySelector('#numb-3');
const numb4 = document.querySelector('#numb-4');
const btn16 = document.querySelector('.btn-16');
const symbol1 = document.querySelector('#sign-1');
const outSum1 = document.querySelector('.out-sum-1 span');

btn16.onclick = () => {
    switch (symbol1.value) {
        case '+':
            outSum1.innerHTML = +numb3.value + +numb4.value;
            break;
        case '-':
            outSum1.innerHTML = numb3.value - numb4.value;
            break;
        case '*':
            outSum1.innerHTML = numb3.value * numb4.value;
            break;
        case '/':
            outSum1.innerHTML = numb3.value / numb4.value;
            break;
        default:
            outSum1.innerHTML = 'Incorrect symbol';
    }
};
