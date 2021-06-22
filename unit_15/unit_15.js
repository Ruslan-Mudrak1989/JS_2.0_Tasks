// let a2_res,
//     a8_res = [],
//     a9_res = [],
//     a10_res = {},
//     a11_res = [],
//     a12_res = [],
//     a15_res = [],
//     a16_res = {},
//     a18_res = {},
//     s20_res,
//     s21_res
// ;

// Task 1 ============================================
/* Создайте новый Set. Добавьте в него через add элементы. Выведите в консоль.  */

function t1() {
    let a1 = new Set();
    a1.add(13);
    a1.add(16);
    a1.add('hello');
    console.log(a1);
}

document.querySelector('.b-1').onclick = t1;

// Task 2 ============================================
/*  Создайте input куда пользователь может вводить элементы и кнопку. По нажатию на кнопку значение из input добавляется в set. Set выводится в консоль.Результат присвойте переменной a2_res. Действия запускаются при вызове функции t2. */


let add = document.querySelector('.i-2');
let a2_res1 = new Set();

function t2(elem) {
    if (elem === '') {
        alert('Please enter some value')
    } else {
        a2_res1.add(elem);
        console.log(a2_res1);
    }
}

document.querySelector('.b-2').onclick = function () {
    t2(add.value);
    add.value = '';
};


// Task 3 ============================================
/* Добавьте к предыдущему заданию кнопку удалить. При нажатии кнопки читаете содержимое input и удаляете его из Set. Если input пустой - выводите ошибку(alert). */
const deleted = document.querySelector('.i-3');

function t3(elem) {
    if (elem === '') {
        alert('Please enter some value')
    } else {
        a2_res1.delete(elem);
        console.log(a2_res1);

    }

}

document.querySelector('.b-3').onclick = function () {
    t3(deleted.value);
    deleted.value = '';
};


// Task 4 ============================================
/*  Добавьте к предыдущему заданию кнопку проверить. При нажатии кнопки читаете содержимое input и проверяет его наличие в Set. Функция должна возвращать true или false.Действия запускаются при вызове функции t4. 
*/

const has = document.querySelector('.i-4');

function t4(elem) {
    if (elem === '') {
        alert('Please enter some value')
    } else {
        console.log(a2_res1.has(elem));
    }
}

document.querySelector('.b-4').onclick = function () {
    t4(has.value);
    has.value = '';
};


// Task 5 ============================================
/*  Выведите размер полученного в результате предыдущих операций Set. Выводить на страницу и возвращать в функции.
 Действия должны запускаться при вызове функции t5. */

const out5 = document.querySelector('.out-5');

function t5(elem, out) {
    let size = elem.size;
    out.textContent = size;
    return size;
}

document.querySelector('.b-5').onclick = () =>
    t5(a2_res1, out5);


// Task 6 ============================================
/* Есть массив  a6 = [3,4,3,2,4,56,1,23]. Напишите функцию, которая возвращает и выводит на страницу количество уникальных
элементов в массиве a6. Решение должно использовать set.
Действия должны запускаться при вызове функции t6. */

const out6 = document.querySelector('.out-6');

let a6 = [3, 4, 3, 2, 4, 56, 1, 23];

function t6(arr, out) {
    let size = new Set(arr);
    return out.innerHTML = size.size;
}

document.querySelector('.b-6').onclick = function () {
    t6(a6, out6);
};


// Task 7 ============================================
/*  Создайте input куда пользователь может ввести пароль и кнопку - проверить. Проверяйте с помощью Set, чтобы
пользователь использовал в пароле только не повторяющиеся символы. Логика решения - получаем строку из input - и
преобразуем ее в массив (arr.split('')). Считаем длину массива. На основе массива создаем  Set. Сравниваем размеры массива
и Set. Функция должна возвращать true или false. Запуск - по нажатию кнопки b-7. */

const out7 = document.querySelector('.out-7');

function t7(login, pass, out) {
    let loginArr = login.split('');
    let passArr = pass.split('');
    let loginSet = new Set(loginArr).size;
    let passSet = new Set(passArr).size;
    if (loginArr.length === loginSet && passArr.length === passSet) {
        out.textContent = 'true';
    } else {
        out.textContent = 'false';
    }
}

document.querySelector('.b-7').onclick = function () {
    let login = document.querySelector('.login').value;
    let pass = document.querySelector('.pass').value;
    let res = t7(login, pass, out7);
};


// Task 8 ============================================
/* Создайте набор set a8. Напишите функцию, которая принимает set в качестве параметра и четные элементы из набора
добавляет в массив a8_res. После завершения операции - выводит a8_res на страницу. Запуск - по нажатию кнопки b-8. */

const out8 = document.querySelector('.out-8');

let a8 = new Set();
a8.add(12);
a8.add(15);
a8.add(5);
a8.add(14);
a8.add(51);
a8.add(51);
a8.add('hi');
console.log(a8);

function t8(elem, out) {
    let a8_res = [];
    for (let item of elem) {
        if (item % 2 == 0) {
            a8_res.push(item);
        }
    }
    out.innerHTML = a8_res;
}

document.querySelector('.b-8').onclick = function () {
    t8(a8, out8);

};


// Task 9 ============================================
/*  Создайте набор set a9. Напишите функцию, которая принимает set в качестве параметра присваивает a9_res так, что
порядок элементов в a9_res обратный a9. Выведите a9_res на страницу. Действия должны запускаться при вызове функции t9.*/

const out9 = document.querySelector('.out-9');

function t9(elem, out) {
    let a9_res = Array.from(elem).reverse();
    out.textContent = a9_res;
}

document.querySelector('.b-9').onclick = function () {
    let a9 = new Set();
    a9.add(1);
    a9.add(32);
    a9.add('hello');
    a9.add(56);
    a9.add(3);
    a9.add(4);
    a9.add(51);
    a9.add('bye');
    t9(a9, out9);
};


// Task 10 ============================================
/*  Сложная задача!!! Самая сложная задача за урок. Если ее решите - то массивов вы больше не испугаетесь. Задачу Можно
пропустить. Создайте массив элементов a10. Посчитайте, сколько раз встречается каждый из элементов в массиве. Результат
присвойте массиву a10_res.
Логика решения: создайте на основе массива - набор. Потом запустите перебор набора и внутри цикла перебора запустите еще
один цикл - перебираете массив и смотрите совпадения если элемент массива совпадает с элементом набора - то плюсуете счетчик.
После прохода внутреннего цикла добавляете в a20_res запись в виде элемент набора - счетчик.
 */

a10_res = {};

const out10 = document.querySelector('.out-10');

let a10 = [5, 7, 9, 11, 13, 15, 5, 7, 5, 2, 3, 7, 13];

function t10(arr) {
    let setA10 = new Set(arr);
    let amount = 0;
    for (let item of setA10) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                amount++;
            }
        }
        a10_res[item] = amount;
        console.log(a10_res[item]);
        amount = 0;
    }
    console.log(a10_res);
    let elemAmount = '';
    for (let key in a10_res) {
        elemAmount += `${key} : ${a10_res[key]}<br>`;
    }
    out10.innerHTML = elemAmount;
}

document.querySelector('.b-10').onclick = function () {
    t10(a10);
};


// Task 11 ============================================
/*  Эмулируем работу set. Пользователь может ввести значение в i-11. Напишите функцию, которая по нажатию b-11 запускает
функцию t11. Функция получает введенное значение и добавляет его в массив a11_res. Добавление происхдит если такого
значения в массиве нет. После каждой операции выводите a11_res на страницу.
 */
const out11 = document.querySelector('.out-11');
let a11_res = [];

function t11(a11, arr) {
    if (a11.trim() === '' || arr.includes(a11) === true) {
        out11.innerHTML = 'Please enter correct item';
        out11.style.color = 'red';
    } else {
        if (arr.includes(a11) === false) {
            arr.push(a11);
            out11.innerHTML = arr;
            out11.style.color = 'black';
            console.log(arr);
        }
    }
}

document.querySelector('.b-11').onclick = function () {
    t11(document.querySelector('.i-11').value, a11_res);
};


// Task 12 ============================================!
/*  Напишите функцию, которая принимает в качестве параметра набор set и преобразует его в массив, результат выводит на
страницу и присваивает a12_res. Действия должны запускаться при вызове функции t12.
 */

const out12 = document.querySelector('.out-12');

let a12 = new Set();

function t12(set) {
    set.clear();
    for (let i = 0; i < 10; i++) {
        set.add(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
    }
    a12_res = Array.from(set);
    out12.textContent = a12_res;
    console.log(a12_res);
}


document.querySelector('.b-12').onclick = () => t12(a12);

// Task 13 ============================================!
/*  
    Напишите функцию, которая принимает set и выводит его на страницу в указанный элемент. Элемент задавать как второй параметр.
    Действия должны запускаться при вызове функции t13.
 */

let set13 = new Set();

// let elem13 =

function t13(set, elem13, min, max) {
    set.clear();
    for (let i = 0; i < 10; i++) {
        set.add(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    document.querySelector(elem13).textContent = Array.from(set);
}

document.querySelector('.b-13').onclick = () => {
    t13(set13, '.out-13', 1, 100);

};


// Task 14 ============================================
/*  
    Напишите функцию, которая принимает set и выводит его на страницу в указанный элемент. Элемент задавать как второй
    параметр. Третий параметр - разделитель.
        Действия должны запускаться при вызове функции t14.
        Т.е. ввели в качестве разделителя дефис и вывод на страницу 1-2-3- (без пробелов).
 */

let set14 = new Set();
let elem14 = document.querySelector('.out-14');
let sep14 = '-';

function t14(set, elem, sep, min, max) {
    set.clear();
    for (let i = 0; i < 10; i++) {
        set.add(Math.floor(Math.random() * (max - min + 1)) + min)
    }
    elem.textContent = Array.from(set).join(sep);

}

document.querySelector('.b-14').onclick = () => {
    t14(set14, elem14, sep14, 1, 100);
};

// Task 15 ============================================!
/*  
Дан массив a15. Добавьте вложенные в него массивы  в набор. Изучите результат. Результирующий набор выведите на страницу.
Добавление сделайте через цикл.
    Действия должны запускаться при вызове функции t15. Результат операции запишите в a15_res.
 */

let a15 = [
    [1, 0],
    [1, 0],
    [2, 0]
];
let a15_res = [];

function t15(arr) {
    let set15 = new Set();
    for (let i = 0; i < arr.length; i++) {
        set15.add(arr[i]);
    }
    console.log(set15);
    // for (let item of set15){
    //     a15_res = document.querySelector('.out-15').textContent += item;
    // }
    a15_res = document.querySelector('.out-15').textContent = Array.from(set15);
    console.log(a15_res);
}

document.querySelector('.b-15').onclick = function () {
    t15(a15);
};


// Task 16 ============================================
/* 
Дан массив a16 = [
    { Ivan: 1 },
    { Ivan: 1 },
    { Ivan: 2 },
    { Serg: 0 }
]. Добавьте вложенные в него массивы  в набор. Изучите результат. Результирующий набор  выведите в консоль. Добавление сделайте через цикл. 
    Действия должны запускаться при вызове функции t15. 
    Результат операции запишите в a16_res.
 */

let a16 = [
    {Ivan: 1},
    {Ivan: 1},
    {Ivan: 2},
    {Serg: 0}
];
let out16 = document.querySelector('.out-16');
let arrRes16 = {};

function t16(arr) {
    let set16 = new Set();
    for (let i = 0; i < arr.length; i++) {
        set16.add(arr[i]);
    }
    a16_res = set16;
    console.log(a16_res);
}

document.querySelector('.b-16').onclick = function () {
    t16(a16);
};

// Task 17 ============================================
/*  Дана строка u17 = 'Primer'. Создайте новый набор с Set(u17). Выведите в консоль. Изучите результат.
    Действия должны запускаться при вызове функции t17.
 */


function t17() {
    let u17 = 'Primer';
    let a17_res = new Set(u17);
    console.log(a17_res);
}

document.querySelector('.b-17').onclick = t17;

// Task 18 ============================================
/*  
    Очень сложное! Можно пропустить без последствий! Напишите функцию, которая принимает строку и считает сколько раз
    встречается та либо инная буква. Результат в виде ассоциативного массива присваивает в переменуню a18_res.
     Данную функцию можно использовать для анализа текста.
    Действия должны запускаться при вызове функции t18.
 */
let a18_res = {};
let a18 = 'Hello';

function t18(string) {
    let set18 = new Set(string);
    let count = 0;
    for (let item of set18) {
        for (let i = 0; i < string.length; i++) {
            if (string[i] === item) {
                count++;
            }
        }
        a18_res[item] = count;
        count = 0;
    }
    let str = '';
    for (let key in a18_res) {
        str += `${key}:${a18_res[key]}<br>`;
    }
    document.querySelector('.out-18').innerHTML = str;
}

document.querySelector('.b-18').onclick = function () {
    t18(a18)
};

// Task 19 ============================================!!!
/*  Создайте набор a19 и добавьте в него значения. Выведите на страницу каждый второй по счету элемент набора.
    Действия должны запускаться при вызове функции t19.
 */

let a19 = new Set();
a19.add(5);
a19.add('great');
a19.add(12);
a19.add(56);
a19.add(4);
a19.add(90);
a19.add('done');
console.log(a19);


function t19(value) {
    let arr19N = [];
    let a19_res = Array.from(value);
    for (let i = 1; i < a19_res.length; i += 2) {
        arr19N.push(a19_res[i]);
    }
    console.log(arr19N);
    document.querySelector('.out-19').textContent = arr19N;
}

document.querySelector('.b-19').onclick = () => {
    t19(a19)
};

// Task 20 ============================================!!!
/* Создайте функцию, которая принимает массив и четные по индексу элементы добавляет в набор s20_res в нечетные в набор
s21_res. Выводите данные наборы в консоль.
 */

function t20(arr) {
    let s20_res = new Set();
    let s21_res = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            s20_res.add(arr[i]);
        } else {
            s21_res.add(arr[i]);
        }
    }
    console.log(s20_res);
    console.log(s21_res);

}

document.querySelector('.b-20').onclick = function () {
    let arr20 = [1, 15, 86, 78, 14, 16, 'hi', 'grow', 5];
    t20(arr20);
};

