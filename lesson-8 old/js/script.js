// Task 1
// Создайте функцию func_1, которая возращает строку от нуля до 100 в формате
// 0 1 2. .100(после 100 тоже есть пробел)
// задание сделать с помощью while

function func_1() {
    let res1 = '';
    let i = 0;
    while (i <= 100) {
        res1 += i + ' ';
        i++;
    }
    return res1;
}

console.log(func_1());

//  Task 2
//  Создайте функцию func_2, которая принимает от пользователя 2 параметра числа и возращает строку от первого числа до второго с шагом 1. Разделитель пробел.
//  Пример: пользователь ввел 5 и 7
//  5 6 7
//  считаем что второе число всегда больше первого. Решаем с помощью while

let out2 = document.querySelector('#task-2 pre');
let number = document.querySelectorAll('#task-2 input');
let btn2 = document.querySelector('.btn-2');

function func_2(a, b) {
    let i = +a.value;
    let res2 = '';
    while (i <= b.value) {
        res2 += +i + ' ';
        i++;
    }
    return res2;
}

btn2.onclick = () => {
    out2.innerHTML = func_2(number[0], number[1]);
};


// // Task 3
// // Создайте функцию func_3, которая принимает от пользователя 2 параметра числа и возращает строку от большего числа меньшего с шагом 1. Разделитель пробел.
// // Пример: пользователь ввел 5 и 7
// // 7 6 5
// // Решаем с помощью while
let out3 = document.querySelector('#task-3 pre');
let number3 = document.querySelectorAll('#task-3 input');
let btn3 = document.querySelector('.btn-3');

function func_3(a, b) {
    let i = +a.value;
    let j = +b.value;
    let res3 = '';
    if (i > j) {
        while (i >= j) {
            res3 += i + ' ';
            i--;
        }
    } else {
        while (i <= j) {
            res3 += j + ' ';
            j--;
        }
    }
    return res3;
}

btn3.onclick = () => {
    out3.innerHTML = func_3(number3[0], number3[1]);
};

// Task 4
// Создайте функцию func_4, которая принимает от пользователя 3 параметра(число, число и шаг) и возращает строку от
// большего числа меньшего с заданным. Разделитель пробел.
// Пример: пользователь ввел 1 5 2
// 5 3 1
// Решаем с помощью while

function func_4(a, b, c) {
    let res4 = '';
    while (b >= a) {
        res4 += b + ' ';
        b = b - c;
    }
    return res4;
}

let numbers4 = document.querySelectorAll('#task-4 input');
let btn4 = document.querySelector('.btn-4');
let out4 = document.querySelector('#task-4 pre');
btn4.onclick = () => {
    out4.innerHTML = func_4(+numbers4[0].value, +numbers4[1].value, +numbers4[2].value);
};

// Task5
// С помощью цикла
// while создайте функцию func_5, считает и возвращает сумму чисел от 0 до 20.

function func_5() {
    let res5 = 0;
    let i = 0;
    while (i <= 20) {
        res5 = res5 + i;
        i++;
    }
    return res5;
}

document.querySelector('.btn-5').onclick = () => {
    document.querySelector('#task-5 pre').innerHTML = 'Result: ' + func_5();
};


// // Task 6
// // C помощью цикла
// // while создайте функцию func_6, которая принимает 2 параметра, и если второй параметр больше первого, то возвращает
// сумму чисел от первого до второго включительно. Если нет - то false.Считаем, что пользователь может ввести только числа.

function func_6(a, b) {
    let res6 = 0;
    if (b > a) {
        while (b >= a) {
            res6 = res6 + a;
            a++;
        }
        return res6;
    } else {
        return false;
    }
}

let input6 = document.querySelectorAll('#task-6 input');
let btn6 = document.querySelector('.btn-6');
let out6 = document.querySelector('#task-6 pre');

btn6.onclick = () => {
    out6.innerHTML = func_6(+input6[0].value, +input6[1].value)
};


//  Task 7
//  C помощью цикла while создайте функцию func_7, которая принимает 2 параметра, и если второй параметр больше первого,
// то возвращает произведение чисел от первого до второго включительно.Если нет - то false.Считаем, что пользователь
// может ввести только числа.

function func_7(a, b) {
    let res7 = '';
    if (b > a) {
        while (b >= a) {
            res7 += a + ' ';
            a++;
        }
        return res7;
    } else {
        return false;
    }
}

let first = document.querySelector('#first');
let second = document.querySelector('#second');
let out7 = document.querySelector('#task-7 pre');
document.querySelector('.btn-7').onclick = () => {
    out7.innerHTML = func_7(+first.value, +second.value);
};


//  Task 8
//  У пользователя есть 333 монеты в кармане.Каждый день, начиная с первого количество монет увеличиваетя в 2 раза.
// Напишите функцию func_8, которая вернет день, в который количество монет станет больше или равно 1 000 000.

function func_8() {
    let p = 333;
    let day = 0;
    while (p <= 1000000) {
        p = p * 2;
        day = day + 1;
    }
    return day;
}

let out8 = document.querySelector('#task-8 pre');
document.querySelector('.btn-8').onclick = () => {
    out8.innerHTML = func_8();
};


//  Task 9
//  Создайте функцию func_9, которая принимает 2 параметра и возращает строку от первого до второго введенного
// параграфа, где все четные числа заменены на символ нуля(0).

function func_9(a, b) {
    let res9 = '';
    while (a <= b) {
        if (a % 2 == 0) {
            res9 += 0 + ' ';
        } else {
            res9 += a + ' ';
        }
        a++;
    }
    return res9;
}

let param1 = document.querySelector('#param-1');
let param2 = document.querySelector('#param-2');

document.querySelector('.btn-9').onclick = () => {
    document.querySelector('#task-9 pre').innerHTML = func_9(+param1.value, +param2.value)
};


// Task 10
// Cоздайте функцию func_10, которая вернет строку(решаем через
//         while):
//     **
//     *
//     **
//     *
//     **
//     *

function func_10() {
    let res10 = '';
    let i = 0;
    while (i < 6) {
        if (i % 2 == 0) {
            res10 += '**' + '<br>';
        } else {
            res10 += '*' + '<br>';
        }
        i++;
    }
    return res10;
}

document.querySelector('.btn-10').onclick = () => {
    document.querySelector('.ten').innerHTML = func_10();
};


// Task 11
// Создайте функцию func_11, которая вернет следующую строку: 10 1 9 2 8 3. . 1 10. Решаем через
// while.

function func_11() {
    let res11 = '';
    let i = 1;
    let j = 10;
    while (j > 0) {
        res11 += `${j} ${i} `;
        j--;
        i++;
    }
    return res11;
}

document.querySelector('.btn-11').onclick = () => {
    document.querySelector('#task-11 pre').innerHTML = func_11();
};


// Task 12
// Прочитайте о цикле <a href = "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while"
// target = "_blank" >do while</a>. Напишите код:
// let a = 0;
// do
//     console.log('do while work');
// while (a < 0);

// let b = 0;
// while (b < 0) {
//     console.log('while work');
// }

// изучите вывод.Как видите, цикл do while срабатывает минимум один раз в любом случае.Т.е.вначале идет срабатывание, а потом проверка.

function func_12() {
    let a = 0;
    do
        return console.log('do while work!');
    while (a < 0);

    let b = 0;
    while (b > 0) {
        return console.log('while work!');
    }
}

func_12();


// Task 13
// Напишите функцию func_13 которая возвращает строку, от 100 до 0 включительно.Используем цикл do while.

function func_13() {
    let str13 = '';
    let i = 100;
    do {
        str13 += i + ' ';
        i--;
    } while (i > 0);
    return str13;
}

document.querySelector('.btn-13').onclick = () => {
    console.log(func_13());
};

// Task 14
// Стаханов в первый день своей работы добыл 5 тонн угля.Во второй - на 30 % больше от предыдущего дня .Напишите функцию
// func_14 которая вернет день, когда Стаханова побьют все, кто с ним работает, этот день наступит тогда, когда Стаханов
// в день добудет 132 тонны угля.Используйте для решения do while. Считаем, что каждый день Стаханов дает угля на 30%
// больше предыдущего.

function func_14() {
    let coal = 5;
    let day = 1;
    do {
        day++;
        coal = coal * 1.3;
    } while (coal < 132);
    return day;
}

document.querySelector('.btn-14').onclick = () => {
    document.querySelector('#task-14 pre').innerHTML = func_14();
};

// Task 15
// Гермиона Грейнджер в первый день наварила 1.1 литра зелья.Во второй день на 0.3 литра зелья больше.Напишите функцию
// func_15, которая вернет день, когда в Хоргвардсе не останется пустых котлов(суммарный объем котлов в замке 568 литров).
// Обратите внимание, что вам нужно найти суммарных объем сваренного зелья, а не дневной объем.Используем do while.

function func_15() {
    let herb = 1.1;
    let days15 = 1;
    do {
        days15++;
        herb = herb + 0.3;
    } while (herb < 568);
    return days15;
}

document.querySelector('.btn-15').onclick = () => {
    document.querySelector('#task-15 pre').innerHTML = func_15();
};

// Task 16
// На странице есть четыре параграфа p.task-16. Используя цикл do ..while посчитайте количество параграфов p.task-16
// и если число четное - верните значение, если нет - верните false.Код напишите в функции func_16.


// ALTERNATIVE
// function func_16() {
//     let paragraph = document.querySelectorAll('.p-16');
//     // console.log(paragraph.length);
//     let i = 0;
//     let res16 = '';
//     do {
//         if (i % 2 == 0) {
//              res16 = false
//         } else {
//             res16 = paragraph.length;
//         }
//         i++;
//     }while(i < paragraph.length);
//    return res16;
// }
// document.querySelector('.btn-16').onclick = () => {
//     document.querySelector('#task-16 pre').innerHTML = func_16();
// };


let paragraph = document.querySelectorAll('.p-16');

function func_16() {
    let i = 0;
    do {
        if (paragraph.length % 2 == 0) {
            return paragraph.length;
        } else {
            return false;
        }
        i++;
    } while (i < paragraph.length);
}

document.querySelector('.btn-16').onclick = () => {
    document.querySelector('#task-16 pre').innerHTML = func_16();

};


// Task 17
// На странице есть четыре параграфа p.task-16. Используя цикл do ..while выведите в первый p.task-16 - число 1,
// во второй 2 и т.д.Решение оформите в виде функции func_17.

let p17 = document.querySelectorAll('.p-17');

function func_17() {
    let i = 0;
    let num = 1;
    do {
        p17[i].innerHTML = num;
        p17[i].style.backgroundColor = 'orange';
        i++;
        num++;
    } while (i < p17.length)
}

document.querySelector('.btn-17').onclick = func_17;


// // Task 18
// // На странице есть три параграфа p.task-18. Используя цикл do ..while выведите в первый p.task-18 - число равное
// количеству параграфов p.task - 18, во второй на единицу меньше и т.д.Решение оформите в виде функции func_18.

let p18 = document.querySelectorAll('.p-18');

function func_18() {
    let i = 0;
    let num18 = p18.length;
    do {
        p18[i].innerHTML = num18;
        p18[i].style.backgroundColor = 'blue';
        i++;
        num18--;
    } while (i < p18.length)
}

document.querySelector('.btn-18').onclick = func_18;


// // Task 19
// // Напишите функцию func_19, которая возвращает строку вида: 1*3*5*7*9*11*13*15*17*19. Решите с помощью do while.

function func_19() {
    let i = 1;
    let res19 = '';
    do {
        if (i % 2 == 0) {
            res19 += '*';
        } else {
            res19 += i;
        }
        i++;
    } while (i < 20);
    return res19;
}

document.querySelector('.btn-19').onclick = () => {
    document.querySelector('#task-19 pre').innerHTML = func_19();
};


// // Task 20
// // Напишите функцию func_20, которая возвращает строку вида:
// //     1 * * *
// //     * 1 * *
// //     * * 1 *
// //     * * * 1
//
function func_20() {
    let res20 = '';
    let i = 0;
    while (i < 4) {
        let k = 0;
        while (k < 4) {
            if (k == i) {
                res20 += '1';
            } else {
                res20 += '*';
            }
            k++;
        }
        res20 += '<br>';
        i++;
    }
    return res20;
}

document.querySelector('.btn-20').onclick = () => {
    document.querySelector('#task-20 pre').innerHTML = func_20()
};

