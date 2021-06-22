// // Task 1.
// Выведите в консоль с помощью цикла числа от 1 до 10.

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// Task 2.
// Выведите на страницу с помощью цикла числа от 1 до 10.

let two = '';
for (let i = 0; i <= 10; i++) {
    two += i + ',';
}
document.querySelector('.two').innerHTML = two;


// Task 3.
// Выведите на страницу с помощью цикла числа в диапазоне от 10 до 0.

let three = '';

for (let i = 10; i >= 0; i--) {
    three += i + ',';
}
document.querySelector('.decrement').innerHTML = three;


// // Task 4.
// Выведите на страницу с помощью цикла числа в диапазоне от 0 до 10 с шагом 2.

let four = '';

for (let i = 0; i <= 10; i += 2) {
    four += i + ',';
}
document.querySelector('.four').innerHTML = four;


// Task 5.
// Выведите на страницу с помощью цикла числа в диапазоне от 21 до 0 с шагом 3.

let five = '';

for (let i = 21; i >= 0; i -= 3) {
    five += i + ',';
}
document.querySelector('.five').innerHTML = five;

// Task 6.
// Используя строку ****** - нарисуйте квадрат 6х6 и выведите его на страницу.

let six = '';
for (let i = 0; i < 6; i++) {
    six += '******' + '<br>';
}
document.querySelector('.six').innerHTML = six;


// Task 7.
// Создайте input, button. По клику на кнопку выведите на страницу все числа, начиная от
// введенного пользователем в input до нуля.

let num = document.getElementById('num');
let seven = '';
document.getElementById('btn').onclick = () => {
    for (let i = +num.value; i >= 0; i--) {
        seven += i + ',';
    }
    document.querySelector('#task-7 p').innerHTML = seven;
};

// Task 8.
// Создайте input,input, button. По клику на кнопку выведите на страницу все числа, в диапазоне введенных пользователем
// чисел. Считаем что второе число всегда больше первого.

let number = document.querySelectorAll('#task-8 input');
let eight = '';
document.getElementById('btn-1').onclick = () => {
    if (+number[0].value > +number[1].value) {
        alert('Error!')
    } else {
        for (let i = +number[0].value; i <= +number[1].value; i++) {
            eight += i + ',';
        }
    }
    document.querySelector('#task-8 p').innerHTML = eight
};


// Task 9.
// Доработайте предыдущую задачу. Добавьте проверку введенных чисел, если второе число больше первого - то делаем вывод,
// если нет - выводим alert о ошибке.


// Task 10.
// Выведите на страницу все четные годы в промежутке от 1901 до 1950.

let p10 = document.querySelector('#task-10 p');
let ten = '';

for (let i = 1901; i <= 1950; i++) {
    if (i % 2 == 0) {
        ten += i + ' , '
    }
}
p10.innerHTML = ten;


// Task 11.
// Создайте несколько div.one. С помощью length выведите количество div.one на странице.


let one = document.querySelectorAll('.one');
document.querySelector('#task-11 p').innerHTML = one.length;

// Task 12.
// Создайте кнопку, при нажатии на которую запускается функция. Функция окрашивает все div.one в оранжевый цвет.

document.querySelector('.btn-12').onclick = () => {
    for (let i = 0; i < one.length; i++) {
        one[i].style.backgroundColor = 'orange';
        one[i].style.border = '2px solid brown';
    }
};

//  Task 13.
//Создайте кнопку, при нажатии на которую запускается функция. Функция выводит в консоль содержимое всех div.one.

document.querySelector('.btn-13').onclick = () => {
    for (let i = 0; i < one.length; i++) {
        console.log(one[i].innerHTML);
    }
};

// Task 14
// Создайте кнопку, при нажатии на которую запускается функция. Функция для всех input[type="text"]
// устанавливает свойство placeholder = 'Введите данные'

let inputText = document.querySelectorAll('input[type="text"]');

document.querySelector('.btn-14').onclick = () => {
    for (let i = 0; i < inputText.length; i++) {
        inputText[i].placeholder = 'Enter some text...';
    }
};


// Task 15
// Создайте кнопку, при нажатии на которую запускается функция. Функция выводит в консоль количество input[type="text"]

document.querySelector('.btn-15').onclick = () => {
    console.log(inputText.length);
};

// Task 16
// Создайте три связанных radiobutton[name="p1"]. Задайте им value. При нажатии на кнопку выводите на страницу value выбранного.

let inputP1 = document.querySelectorAll('input[name="p1"]');
// console.log(inputP1);
document.querySelector('.btn-16').onclick = () => {
    for (let i = 0; i < inputP1.length; i++) {
        if (inputP1[i].checked) {
            document.querySelector('#task-16 p').innerHTML = inputP1[i].value
        }
    }
};

//  Task 17
// Добавьте кнопку. При нажатии кнопки делайте первый из созданных radiobutton в примере выше - checked.

document.querySelector('.btn-17').onclick = () => {
    inputP1[0].checked = true;
};


//  Task 18
// Получите все radiobutton[name="p1"]. C помощью цикла замените в них value. Первому элементу присвойте value = 0, второму value = 1 и т.д.

document.querySelector('.btn-18').onclick = () => {
    for (let i = 0; i < inputP1.length; i++) {
        inputP1[i].value = [i];
    }
};


//  Task 19
// Создайте 3 input[radiobutton][name="p2"]. Задайте им value равное 5, 3, 6. Добавьте кнопку при нажатии на котору
// проверяйте value выбранного элемента. Если оно не равно 6 - выводите false, если равно - true.

let inputP2 = document.querySelectorAll('input[name="p2"]');
let variant = false;
document.querySelector('.btn-19').onclick = () => {
    for (let i = 0; i < inputP2.length; i++) {
        if (inputP2[i].checked && inputP2[i].value == 6) {
            variant = true;
            break;
        }
    }
    alert(variant);
};

//  Task 20
// Создайте 3 input[radiobutton][name="p3"]. С помощью цикла добавьте на них событие oninput. При изменении состояния
// input - выводите в консоль текст "был изменен input"

let inputP3 = document.querySelectorAll('input[name="p3"]');
for (let i = 0; i < inputP3.length; i++) {
    inputP3[i].oninput = () => {
        console.log('был изменен input');
    }
}

