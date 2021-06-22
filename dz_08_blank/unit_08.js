//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.

let out1 = document.querySelector('.out-1');

function t1() {
    let i = 1;
    res1 = '';
    while (i <= 50) {
        res1 += i + ' ';
        i++;
    }
    return out1.innerHTML = res1;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
//     2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла  while.

let out2 = document.querySelector('.out-2');

function t2() {
    let i = 2;
    res2 = '';
    while (i <= 122) {
        res2 += i + ' ';
        i += 2;
    }
    return out2.innerHTML = res2;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
//     25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла  while.

let out3 = document.querySelector('.out-3');

function t3() {
    let i = 25;
    res3 = '';
    while (i > 6) {
        res3 += `${i} `;
        i--;
    }
    return out3.innerHTML = res3;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
//     77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла  while.

let out4 = document.querySelector('.out-4');

function t4() {
    let i = 77;
    res4 = '';
    while (i > 34) {
        res4 += i + '_';
        i -= 3;
    }
    return out4.innerHTML = res4;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
//     1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла  while.

let out5 = document.querySelector('.out-5');

function t5() {
    let i = 1;
    let res5 = '';
    while (i < 18) {
        if (i % 2 == 0) {
            res5 += `${i}_**`
        } else {
            res5 += `${i}_*`
        }
        i++;
    }
    return out5.innerHTML = res5;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br.
// Количество строк (итераций, повторений) цикла  while вводит пользователь в i-6.
let out6 = document.querySelector('.out-6');
let i6 = document.querySelector('.i-6');

function t6() {
    let i = 0;
    res6 = '';
    while (i < i6.value) {
        res6 += '******' + '<br>';
        i++;
    }
    return out6.innerHTML = res6;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция f7, которая выводит в out-7 числа от введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4 3 2 1 0
// Задача решается с помощью цикла  while.
let out7 = document.querySelector('.out-7');
let i7 = document.querySelector('.i-7');

function t7() {
    let i = +i7.value;
    let res7 = '';
    while (i >= 0) {
        res7 += i + ' ';
        i--;
    }
    return out7.innerHTML = res7;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8  должна запускаться функция f8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// Задача решается с помощью цикла  while.
let out8 = document.querySelector('.out-8');
let i81 = document.querySelector('.i-81');
let i82 = document.querySelector('.i-82');

function t8() {
    let res8 = '';
    let i = +i81.value;
    let k = +i82.value;
    while (i <= k) {
        res8 += i + ' ';
        i++;
    }
    return out8.innerHTML = res8;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// Есть input i-91 и i-92 куда пользователь может ввести числа.
// По нажатию кнопки b-9 должна запускаться функция f9, которая выводит в out-9 числа от меньшего введенного до большего
// включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл  while.
let out9 = document.querySelector('.out-9');
let i91 = document.querySelector('.i-91');
let i92 = document.querySelector('.i-92');

function t9() {
    let i = +i91.value;
    let k = +i92.value;
    let res9 = '';
    if (i <= k) {
        while (i <= k) {
            res9 += i + ' ';
            i++
        }
    } else {
        while (i >= k) {
            res9 += k + ' ';
            k++;
        }
    }
    return out9.innerHTML = res9;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно.
// Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).

let out10 = document.querySelector('.out-10');

function t10() {
    let i = 1950;
    let res10 = '';
    while (i <= 2000) {
        res10 += i + ' ';
        i += 2;
    }

    return out10.innerHTML = res10;
}

document.querySelector('.b-10').onclick = t10;

//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
//     В результате должно получиться так:
//     one 3 4 two

let div11 = document.querySelectorAll('.div-11');
let out11 = document.querySelector('.out-11');

function t11() {
    let i = 0;
    res11 = '';
    while (i < div11.length) {
        res11 += div11[i].innerHTML + ' ';
        i++;
    }
    return out11.innerHTML = res11
}

document.querySelector('.b-11').onclick = t11;

//  Task 12
// Кнопка b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’

let div12 = document.querySelectorAll('.div-12');

function t12() {
    let i = 0;
    res12 = '';
    while (i < div12.length) {
        res12 += div12[i].style.backgroundColor = 'orange';
        i++;
    }
    return res12;
}

document.querySelector('.b-12').onclick = t12;

//  Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...

let i13 = document.querySelectorAll('.i-13');
let out13 = document.querySelectorAll('.out-13');

function t13() {
    let i = 0;
    res13 = '';
    while (i < i13.length) {
        res13 += i13[i].value = i + 1;
        i++;
    }
    return res13;
}

document.querySelector('.b-13').onclick = t13;

//  Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.

let i14 = document.querySelectorAll('input[name="i-14"]');
let out14 = document.querySelector('.out-14');

function t14() {
    let i = 0;
    res14 = '';
    while (i < i14.length) {
        if (i14[i].checked) {
            res14 = i14[i].value;
            break;
        }
        i++;
    }
    return out14.innerHTML = res14;
}

document.querySelector('.b-14').onclick = t14;

//  Task 15
// Кнопка b-15 запускает функцию t15  Функция должна выводить следующую последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл  while. Разделитель пробел.
let out15 = document.querySelector('.out-15');

function t15() {
    let i = 0;
    let k = 10;
    let res15 = '';
    while (k >= 0) {
        res15 += `${k} ${i} `;
        k--;
        i++;
    }
    return out15.innerHTML = res15;
}

document.querySelector('.b-15').onclick = t15;


