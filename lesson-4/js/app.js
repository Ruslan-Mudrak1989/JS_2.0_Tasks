// Task 1.
//Создайте button - при нажатии на него выводите alert с номером задачи.

const btnAl = document.querySelector('.btn-alert');

btnAl.onclick = () => {
    alert(1);
};

// Task 2.
// Создайте input type=button - при нажатии на него выводите alert с номером задачи.

const btnMsg = document.querySelector('#btn-msg');

btnMsg.onclick = () => {
    alert(2);
};

// Task 3.
// Создайте p - при нажатии на него выводите alert с номером задачи.

const paragraph = document.querySelector('#paragraph');

paragraph.onclick = () => {
    alert(3);
};

// Task 4.
// Создайте input(checkbox) и button - при нажатии на него выводите true если checkbox выбран и false если нет.
console.log('*****Task-4*****');

const check = document.querySelector('#check');
const click = document.querySelector('#click-me');

check.onclick = () => {
    if (click.checked) {
        console.log(true);
    } else {
        console.log(false);
    }
};

// Task 5.
// Создайте input(checkbox) и button. Добавьте value для checkbox. При нажатии на него выводите
// value если checkbox выбран и false если нет.

const btn = document.querySelector('#btn');
const check2 = document.querySelector('#click-me-2');

btn.onclick = () => {
    if (check2.checked) {
        console.log(check2.value);
    } else {
        console.log(false);
    }
};

// Task 6.
// Создайте input(hidden) и button - при нажатии на него выводите alert с value прописанным в input.


document.querySelector('#btn-2').onclick = () => {
    let hid = document.querySelector('#hid');
    alert(hid.value)
};

// Task 7.
// Создайте input(password) и button - при нажатии на него выводите alert с value прописанным в input. Выводите
// в консоль предупреждение, если длина пароля меньше 6 символов.

document.querySelector('#btn-3').onclick = () => {
    let password = document.querySelector('#pass');

    if (password.value.length <= 6) {
        console.log('Password is too short');
    } else {
        alert(password.value);
    }
};

// Task 8.
// Создайте div и кнопку. При нажатии кнопки создавайте внутри div элемент input и кнопку (innerHTML). Добавьте на
// созданную кнопку событие - при клике выводить alert c содержимым созданного input.

let open = document.querySelector('#open');
open.onclick = () => {
    let div = document.querySelector('div');
    div.innerHTML = '<input type="text" id="input-in"> <button id="btn-4">Click</button>';
    div.style.marginBottom = '5px';
    let btn4 = document.querySelector('#btn-4');
    btn4.onclick = () => {
        let inputIn = document.querySelector('#input-in');
        alert(inputIn.value)
    };
};

// Task 9.
// Создайте один input(radio) . и button - при нажатии на button выводите alert с value прописанным в активном
// (если он активен, если нет - то alert - false) radiobutton.

let male = document.querySelector('#male');
let btn4 = document.querySelector('#btn-4');

btn4.onclick = () => {
    if (male.checked) {
        alert(male.value);
    } else {
        alert('False');
    }
};

// Task 10.
// Создайте input(color) и button - при нажатии на него окрашивайте div выбранным цветом.

let color = document.querySelector('#ten');

document.querySelector('#btn-5').onclick = () => {
    document.querySelector('#task-10 div').style.backgroundColor = color.value;
};

// Task 11.
// Создайте input(color) - два элемента и button - при нажатии на кнопку присвойте цвет из первого input в value второго.

document.querySelector('#btn-6').onclick = () => {
    let first = document.querySelector('#first');
    let second = document.querySelector('#second');
    second.value = first.value;
};

// Task 12.
// Создайте input(date) и button - при нажатии на кнопку выводите на страницу выбранную дату.

document.querySelector('#btn-7').onclick = () => {
    let twelve = document.querySelector('#twelve');
    document.querySelector('#task-12 p').innerHTML = twelve.value;
};

// Task 13.
// Создайте input(range) и button - при нажатии на кнопку выводите на страницу значение из input.
// Добавьте событие oninput на range и тоже выводите значение на страницу.

let thirteen = document.querySelector('#thirteen');

function outputRange() {
    document.querySelector('#task-13 p').innerHTML = thirteen.value;
}

document.querySelector('#btn-8').onclick = outputRange;
thirteen.oninput = outputRange;

// Task 14
// Создайте text-area и button - при нажатии на кнопку выводите на страницу значение из textarea.

document.querySelector('#btn-9').onclick = () => {
    let fourteen = document.querySelector('#fourteen');
    document.querySelector('#task-14 p').innerHTML = fourteen.value
};

// Task 15
// Создайте text-area, input и button - при нажатии на кнопку выводите текс из input в textarea и на страницу.

let fifteen = document.querySelector('#fifteen');
let areafif = document.querySelector('#fif');

document.querySelector('#btn-10').onclick = () => {
    document.querySelector('#task-15 p').innerHTML = fifteen.value;
    areafif.value = fifteen.value
};
// Task 16
// Создайте select и button - при нажатии на кнопку выводите на страницу value выбраннов в select option.

document.querySelector('#btn-11').onclick = () => {
    let countries = document.querySelector('#countries');
    document.querySelector('#task-16 span').innerHTML = countries.value
};

// Task 18
// Создайте select добавьте на него событие onchange. По данному событию выводите value выбранного option на страницу.

function changeCities() {
    let cities = document.querySelector('#cities');
    document.querySelector('#task-18 span').innerHTML = 'You have chosen ' + cities.value
}

// Task 19
// Создайте форму. В ней input(text) и input(password) - и кнопку. По нажатию кнопки выводите значение text и password в консоль!.

document.querySelector('#btn-12').onclick = (event) => {
    event.preventDefault();
    let userName = document.querySelector('#user-name');
    let userPass = document.querySelector('#password');
    console.log(userName.value);
    console.log(userPass.value);
};

// Task 20
// Создайте форму. В ней input(text) и input(password) - и кнопку. По нажатию кнопки выводите значение text и password
// в консоль! Используйте form.elements (читать)

document.querySelector('#btn-13').onclick = (event) => {
    event.preventDefault();
    let form = document.querySelector('#task-20 form');
    console.log(form.elements.users.value);
    console.log(form.elements.twenty["value"]);
};










