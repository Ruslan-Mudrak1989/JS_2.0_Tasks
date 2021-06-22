// TASK 1.  Напишите функцию func_1, которая присваивает p.u-1 ширину 200px.Проверьте ее работу.Допишите возможность
// присваивать высоту равную 100px;

const u1 = document.querySelector('.u-1');

function func_1() {
    u1.style.width = '200px';
    console.log(u1.style);
    u1.style.height = '100px';
}

func_1();

// TASK 2. Напишите функцию func_2, которая будучи запущенной присваивает блоку p.u-2 класс css-1. Задайте данному
// классу через CSS зеленый цвет фона.

function func_2() {
    const u2 = document.querySelector('.u-2');
    u2.classList.add('css-1');
}

func_2();

// TASK 3. Используя цикл, добавьте на все блоки p.u - 3 событие onclick.По клику запускайте функцию func_3, которая 
// окрашивает элемент, на котором произошло событие в красный цвет фона.Для обращения внутри функции к такому элементу 
// используйте this.

function func_3() {
    const u3 = document.querySelectorAll('.u-3');
    for (let i = 0; i < u3.length; i++) {
        u3[i].onclick = function () {
            this.style.backgroundColor = 'red';
        }
    }
}

func_3();

// TASK 4. Используя цикл, добавьте на все блоки p.u - 4 событие onclick.По клику запускайте функцию func_4, которая
// присваивает элементу, на котором произошло событие, класс css - 2. Для обращения внутри функции к такому элементу
// используйте this.

function func_4() {
    const u4 = document.querySelectorAll('.u-4');
    for (let i = 0; i < u4.length; i++) {
        u4[i].onclick = function () {
            this.classList.add('css-2');
        }
    }
}

func_4();


// TASK 5. C помощью цикла, повесьте на блоки p.u - 5 функцию func_5, которая при клике будет удалять класс css - 3 с
// элемента, на котором произошло событие.

const u5 = document.querySelectorAll('.u-5');

function func_5() {
    for (let i = 0; i < u5.length; i++) {
        u5[i].onclick = function () {
            this.classList.remove('css-3');
        }
    }
}

func_5();

// TASK 6. Есть кнопка.u - 6. Напишите функцию, которая при клике делает toggle классу.active для данной кнопки.


function func_6() {
    const u6 = document.querySelector('.u-6');
    u6.onclick = function () {
        this.classList.toggle('active');
    }
}

func_6();


// TASK 7. Напишите функцию func - 7, которая будучи запущенной возвращает количество элементов с классом css-3.

function func_7() {
    const css3 = document.querySelectorAll('p.css-3');
    let p = '';
    for (let i = 0; i < css3.length; i++) {
        p += i;
    }
    return console.log(p.length);
}

func_7();


// TASK 8. Напишите функцию func - 8, которая будучи запущенной, присваивает всем элементам p.u - 1 атрибут title со значением test - data.

function func_8() {
    u1.setAttribute('title', 'test-data');
}

func_8();

// TASK 9. С помощью цикла получите кнопки.u - 9. Добавьте на них событие onclick которое запускает функцию func - 9.
// Функция возращает data атрибут элемента, по которому кликнули.

const u9 = document.querySelectorAll('.u-9');

function func_9() {
    let res9 = '';
    for (let i = 0; i < u9.length; i++) {
        u9[i].onclick = function () {
            res9 = this.getAttribute('data');
            return console.log(res9);
        }
    }
}

func_9();

// TASK 10. Напишите функцию func - 10, которая при клике на кнопке.u -10__button читает атрибут валюты data - currency
// и на основании этого выводит в p.u -10__out коэффициент данной валюты по отношению к доллару.Коэффициент возьмите
// приблизительно из интернета.Считается, что пользователь всегда вводит валюту в долларах.

const btn10 = document.querySelectorAll('.u-10__button');
const out10 = document.querySelector('.u-10__out');

function func_10() {
    for (let i = 0; i < btn10.length; i++) {
        btn10[i].onclick = function () {
            let currency = this.getAttribute('data-currency');
            if (currency == 'euro') {
                out10.innerHTML = 0.9;
            } else if (currency == 'usd') {
                out10.innerHTML = 1;
            } else {
                out10.innerHTML = 62.9;
            }
        }
    }
}

func_10();

//ALTERNATIVE

// function func_10() {
//     for (let i = 0; i < btn10.length; i++) {
//         btn10[i].onclick = function () {
//             let currency = this.getAttribute('data-currency');
//             switch(currency){
//                 case'euro':
//                     out10.innerHTML = 0.9;
//                     break;
//                 case 'usd':
//                     out10.innerHTML = 1;
//                     break;
//                 case 'rub':
//                     out10.innerHTML = 62.9
//                     break;
//             }
//         }
//     }
// }
// func_10();

// TASK 11.Напишите функцию func - 11, которая при клике на кнопке.u -11__button читает атрибут валюты data - currency
// и на основании этого выводит в p.u -11__out перевод валюты введенной пользователем в input.u -11__input в указанную
// валюту.Считается, что пользователь всегда вводит валюту в долларах.
const btn11 = document.querySelectorAll('.u-11__button');
const input11 = document.querySelector('.u-11__input');
const out11 = document.querySelector('.u-11__out');


function func_11() {
    for (let i = 0; i < btn11.length; i++) {
        btn11[i].onclick = function () {
            let curr = this.getAttribute('data-currency');
            if (curr == 'euro') {
                out11.innerHTML = +input11.value * 0.9;
            } else if (curr == 'usd') {
                out11.innerHTML = +input11.value * 1;
            } else {
                out11.innerHTML = +input11.value * 62.9;
            }
        }
    }
}

func_11();

// TASK  12. Создайте функцию func - 12, которая создает через createElement элемент div, присваивает ему класс css - 4
// и возвращает данный элемент

function func_12() {
    let div12 = document.createElement('div');
    div12.classList.add('css-4');
    return console.log(div12);
}

func_12();

// TASK  13.Создайте функцию func - 13, которая создает элемент span.span - 13 с текстом 13 через createElement и
// вставляет его в p.u - 13(append).

const u13 = document.querySelector('.u-13');

function func_13() {
    let span13 = document.createElement('span');
    span13.innerHTML = '13';
    span13.classList.add('span-13');
    u13.append(span13);
}

func_13();

// TASK  14. Создайте функцию func - 14, которая создает элемент span.span - 14 с текстом 14 через createElement и
// вставляет его в p.u - 14(prepend).

const u14 = document.querySelector('.u-14');

function func_14() {
    let span14 = document.createElement('span');
    span14.classList.add('span-14');
    span14.innerHTML = '14';
    u14.prepend(span14);
}

func_14();

// TASK 15. Создайте функцию func - 15, которая создает элемент span.span - 15 с текстом 15 через createElement и
// вставляет его в p.u - 15(before)

const u15 = document.querySelector('.u-15');

function func_15() {
    const span15 = document.createElement('span');
    span15.innerHTML = '15';
    span15.classList.add('span-15');
    u15.before(span15);
}

func_15();

// TASK    16. Создайте функцию funct - 16, которая создает элемент button.u - 16 c текстом Push.Повесьте на данный
// элемент событие onclick со стрелочной функцией, которая в консоль выводит текст u - 16.
// И после добавления события добавьте данный элемент на страницу в div.u -16__out.Проверьте работоспособность события.

const out16 = document.querySelector('.u-16__out');

function func_16() {
    const btn16 = document.createElement('button');
    btn16.classList.add('u-16');
    btn16.innerText = 'Push';
    btn16.onclick = () => {
        console.log('u-16');
    };
    out16.append(btn16);
}

func_16();

// TASK 17. Создайте функцию, funct - 17, которая при запуске создаст элемент p c текстом 17 и заменит этим элементом
// div.u - 17

const u17 = document.querySelector('.u-17');

function func_17() {
    const p17 = document.createElement('p');
    p17.innerText = '17';
    u17.replaceWith(p17);
}

func_17();

// TASK 18. C помощью цикла повесьте на div.out - 18 функцию func - 18. Данная функция дожна удалять элемент,
// на котором произошел клик из DOM.Функция должна возвращать удаленный элемент

const out18 = document.querySelectorAll('.out-18');

function func_18() {
    for (let i = 0; i < out18.length; i++) {
        out18[i].onclick = function () {
            this.remove();
            return console.log(out18[i]);
        }
    }
}

func_18();

// TASK   19. Создайте функцию func - 19, которая принимает параметр текст.Создает элемент li, вставляет в него
// указанный текст, и добавляет на страницу в ul.u - 19 в конец списка.

const ul19 = document.querySelector('.u-19');

function func_19(x) {
    const li19 = document.createElement('li');
    li19.innerText = x;
    ul19.append(li19);
}

func_19('Hello');

// TASK 20. Доработайте предыдущее задание.Допишите функцию func - 20 которая может принимать текст от пользователя
// и вставлять в список ul.u - 20. Также добавьте checkbox - важное, при этом созданный li получает класс.css - 5.

const u20 = document.querySelector('.u-20');


const input20 = document.createElement('input');
input20.classList.add('t-20');
input20.setAttribute('type', 'text');
u20.before(input20);

const label = document.createElement('label');
label.innerHTML = 'Important';
input20.after(label);

const checkbox = document.createElement('input');
checkbox.setAttribute('type', 'checkbox');
checkbox.classList.add('imp');
label.prepend(checkbox);

const btn20 = document.createElement('button');
btn20.innerHTML = 'Add the task';
btn20.classList.add('btn-20');
label.after(btn20);


btn20.onclick = func_20;

    function func_20() {
        if (checkbox.checked) {
            const checked = document.createElement('li');
            checked.classList.add('css-5');
            u20.append(checked);
            checked.innerHTML = input20.value;
            input20.value = '';
        }
            else {
            const checked = document.createElement('li');
            u20.append(checked);
            checked.innerHTML = input20.value;
            input20.value = '';
        }
}








