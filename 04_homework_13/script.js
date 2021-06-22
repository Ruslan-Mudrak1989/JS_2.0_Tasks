//  task 1 Выведите массив a1 на страницу.
// a1 = {
//     3 : 'hello',
//     'one' : 'hi'
// };

let a1 = {
    3: 'hello',
    'one': 'hi'
};

let out1 = '';
for (let key in a1) {
    out1 += `${key}: ${a1[key]}, <br>`
}
document.querySelector('.btn-1').onclick = () => {
    document.querySelector('.out-1').innerHTML = out1;
};

// task 2 Выведите на страницу элементы из масиива a2 у которых символов больше 4.
// a2 = {
//     3 : 'hello',
//     'one' : 'hi',
//     'testt' : 'vodoley',
//     'ivan' : 'ivanov'
// };

let a2 = {
    3: 'hello',
    'one': 'hi',
    'testt': 'vodoley',
    'ivan': 'ivanov'
};


let out2 = '';

for (let key in a2) {
    if (a2[key].length >= 4) {
        out2 += `${key}: ${a2[key]}, <br>`
    }
}

document.querySelector('.btn-2').onclick = () => {
    document.querySelector('.out-2').innerHTML = out2
};


// task 3  Выведите на страницу элементы из масиива a3 у которых ключ содержит больше 4 символов.
// a3 = {
//     3 : 'hello',
//     'one' : 'hi',
//     'testt' : 'vodoley',
//     'ivan' : 'ivanov'
// };

let a3 = {
    3: 'hello',
    'one': 'hi',
    'testt': 'vodoley',
    'ivan': 'ivanov'
};

let out3 = '';

for (let key in a2) {
    if (key.length >= 4) {
        out3 += `${key}: ${a3[key]}, <br>`
    }
}

document.querySelector('.btn-3').onclick = () => {
    document.querySelector('.out-3').innerHTML = out3
};


// task 4 Выведите на страницу элементы из масиива a4 у которых значение - число.
// a4 = {
//     3 : 'hello',
//     'one' : 4,
//     'testt' : 'vodoley',
//     'ivan' : 6
// };

let a4 = {
    3: 'hello',
    'one': 4,
    'testt': 'vodoley',
    'ivan': 6
};

out4 = '';

for (let key in a4) {
    if (+a4[key]) {
        out4 += `${key}: ${a4[key]},<br>`;
    }
}

document.querySelector('.btn-4').onclick = () => {
    document.querySelector('.out-4').innerHTML = out4;
};

// task 5 Дан ассоциативный массив a5. Найдите сумму элементов находящихся в нем.
// a5 = {
//     a : 7,
//     z : 4,
//     45 : 12,
//     f : 6
// };

let a5 = {
    a: 7,
    z: 4,
    45: 12,
    f: 6
};

let out5 = 0;

for (let key in a5) {
    out5 += a5[key];
}

document.querySelector('.btn-5').onclick = () => {
    document.querySelector('.out-5').innerHTML = out5;
};


//task 6 Создайте ассоциативный массив a6, который содержит ключи name, age, sex, height и значения любого персонажа.
// Выведите массив на страницу.


const a6 = {
    name: 'Ben',
    age: 38,
    sex: 'male',
    height: 1.82
};

out6 = '';

for (let key in a6) {
    out6 += `${key}: ${a6[key]} <br>`;
}

document.querySelector('.btn-6').onclick = () => {
    document.querySelector('.out-6').innerHTML = out6;
};

// //  task 7 Создайте ассоциативный массив a7, два input (u7-key__input, u7-value__input) и кнопку. При нажатии кнопки
// добавляйте в массив новое значение с соответствующим ключем. Выводите массив на страницу.

let nameU7 = document.querySelector('.u7-key__input');
let valueU7 = document.querySelector('.u7-value__input');


let a7 = {};

document.querySelector('.btn-7').onclick = func_add;


function func_add() {
    out7 = '';
    if (nameU7.value.trim() == '' || valueU7.value.trim() == '') {
        out7 = 'Please enter some symbol';
    } else {
        a7[nameU7.value] = valueU7.value;
        for (let key in a7) {
            out7 += `${key}: ${a7[key]} <br>`;
        }
    }
    document.querySelector('.out-7').innerHTML = out7;
    nameU7.value = '';
    valueU7.value = '';
}


//  task 8 Добавьте к предыдущей задачи input.u8-key__input и кнопку. При нажатии кнопки - удаляйте значение с
// соответствующим ключем. Выводите массив на страницу.

let deleteVal = document.querySelector('.u8-key__input');
document.querySelector('.btn-8').onclick = func_del;


function func_del() {
    let out7 = '';
    if (deleteVal.value.trim() == '') {
        out7 = 'Please enter some symbol';
    } else {
        for (let key in a7) {
            if (key == deleteVal.value) {
                delete a7[key];
            } else {
                out7 += `${key}: ${a7[key]} <br>`;
            }
        }
    }
    document.querySelector('.out-7').innerHTML = out7;
    deleteVal.value = '';
}

// task 9  Добавьте к предыдущей задачи input.u9-delete-value__input и кнопку. При нажатии кнопки - удаляйте записи с
// соответствующим значением. Выводите массив на страницу.

let inputVal = document.querySelector('.u9-delete-value__input');

document.querySelector('.btn-9').onclick = () => {
    let out7 = '';
    if (inputVal.value.trim() == '') {
        out7 = 'Please enter some symbol';
    } else {
        for (let key in a7) {
            if (a7[key] == inputVal.value) {
                delete a7[key];
            } else {
                out7 += `${key}: ${a7[key]} <br>`;
            }
        }
    }
    document.querySelector('.out-7').innerHTML = out7;
    inputVal.value = '';
};


// task 10 Добавьте к предыдущей задачи input.u10-has-key__input и кнопку. При нажатии кнопки - возвращайте true
// если такой ключ есть в массиве, и false если нет.

let currentKey = document.querySelector('.u10-has-key__input');
document.querySelector('.btn-10').onclick = () => {
    func_cur_key(currentKey.value)
};


function func_cur_key(val) {
    out7 = '';
    if (val.trim() == '') {
        out7 = 'Please enter some symbol';
    } else {
        for (let key in a7) {
            if (key == val) {
                out7 = true;
                break;
            } else {
                out7 = false
            }
        }
    }
    document.querySelector('.out-7').innerHTML = out7;
    val = '';
}


//  task 11 Создайте массив, который описывает метро киевского метрополитена, выведите его на страницу.
// a11 = {
//     "red" : ['Академгородок',...],
//     "green" :
// }
let out11 = document.querySelector('.out-11');
let a11 = {
    red: ['Академмістечко', 'Житомирська', 'Святошин', 'Нивки', 'Берестейська', 'Шулявська', 'Політехнічний Інститут', 'Вокзальна', 'Університет', 'Театральна', 'Хрещатик', 'Арсенальна', 'Дніпро', 'Гідропарк', 'Лівобережна', 'Дарниця', 'Чернігівська', 'Лісова'],
    green: ['Сирець', 'Дорогожичі', 'Лукянівська', 'Золоті Ворота', 'Палац спорту', 'Кловська', 'Печерська', 'Дружби Народів', 'Видубичі', 'Славутич', 'Осокорки', 'Позняки', 'Харківська', 'Вирлиця', 'Бориспільська', 'Червоний Хутір'],
    blue: ['Героїв Дніпра', 'Мінська', 'Оболонь', 'Почайна', 'Тараса Шевченка', 'Контрактова площа', 'Поштова площа', 'Майдан Незалежності', 'Площа Льва Толстого', 'Олімпійська', 'Палац України', 'Либідська', 'Деміївська', 'Голосіївська', 'Васильківська', 'Виставковий центр', 'Іподром', 'Теремки']
};

let res11 = '';
for (let key in a11) {
    res11 += `${key.bold()} --- ${a11[key].join(', ')}<br>`;
}

document.querySelector('.btn-11').onclick = () => {
    out11.innerHTML = res11;
};


// task 12 Добавьте к предыдущей задаче select.u12-branch и кнопку. Пользователь может выбрать цвет ветки и нажать
// кнопку, после чего на страницу будут выведены только станции данной ветки.

let branch12 = document.querySelector('.u-12-branch');
console.log(branch12);
branch12.onchange = func_change;

function func_change() {
    let branchVal = branch12.value;
    let res12 = '';
    for (key in a11) {
        if (key == branchVal) {
            res12 = a11[key];
        }
    }
    document.querySelector('.btn-12').onclick = () => {
        out11.innerHTML = res12;
    };
}

// ALTERNATIVE
// let str12 = '';
//
// document.querySelector('.btn-12').onclick = () => {
//     let select = document.querySelector('.u-12-branch').value;
//     // console.log(out12);
//     for (let key in a11) {
//         if (select == 'red') {
//             str12 = a11.red + ' ';
//             break;
//         } else if (select == 'green') {
//             str12 = a11.green;
//             break;
//         } else if (select == 'blue') {
//             str12 = a11.blue;
//             break;
//         }
//     }
//     out11.innerHTML = str12;
// };


// task13 Добавьте к предыдущей задаче кнопку button.u13-reverse которая при нажатии выводит станции ветки в обратном
// порядке. Внимание! Все подобные задачи не меняют массив, а меняют только вывод!!!


// branch12.onchange = func_reverse;
//
// function func_reverse() {
//     let branchVal = branch12.value;
//     let res13 = '';
//     let a13 = [];
//     for (key in a11) {
//         if (key == branchVal) {
//             a13 = a11[key];
//         }
//     }
//     for (let i = a13.length - 1; i >= 0; i--) {
//         res13 +=a13[i];
//     }
//
document.querySelector('.btn-13').onclick = func_reverse;

function func_reverse() {
    let branchVal = branch12.value;
    let res13 = '';
    let a13 = [];
    for (key in a11) {
        if (key == branchVal) {
            a13 = a11[key];
        }
    }
    for (let i = a13.length - 1; i >= 0; i--) {
        res13 += a13[i] + ',';
    }
    out11.innerHTML = res13;
}


//  task14 Добавьте к предыдущей задаче select.u14-find-station и кнопку. В select - пользователь может выбрать станцию,
//  а вы перебирая массив - вывести ветку на которой эта станция находится.

let findStation = document.querySelector('.u14-find-station');

function pushStation (arr,select){
    for (let key in arr){
        for (let i = 0; i < arr[key].length; i++) {
            let station = document.createElement('option');
            station.innerHTML = arr[key][i];
            station.setAttribute('value',arr[key][i]);
            select.append(station);
        }
    }
}

pushStation(a11,findStation);

findStation.onchange = () =>{
    func_station(a11,findStation);
};

function func_station(arr,select) {
    res14 = '';
    for (let key in arr) {
        for (let i = 0; i < arr[key].length; i++) {
            if (arr[key][i] == select.value) {
                res14 =`Line -- ${key}`;
            }
        }

    }
    document.querySelector('.btn-14').onclick = () => {
        out11.innerHTML = res14;
        console.log(res14);
        if (res14 == 'Line -- red') {
            out11.style.color = 'red';
        } else if(res14 == 'Line -- green'){
            out11.style.color = 'green';
        } else{
            out11.style.color = 'blue';
        }
    }
}


// task 15. Добавьте к предыдущему заданию 2 select где пользователь может выбрать 2 станции, и если они на одной
//         ветке - то по нажатию на кнопку будет показано сколько станций между ними (сами станции не включаем. Если это
//         соседние станции - то 0).

function chooseStation(array, selector) {
    let currOpt = selector;
    for (let line in array) {
        for (let i = 0; i < array[line].length; i++) {
            let newOption = document.createElement('option');
            newOption.innerText = array[line][i];
            newOption.setAttribute('value', array[line][i]);
            currOpt.append(newOption);
        }
    }
}

let firstStation = document.querySelector('.u15-first-station');
let secondStation = document.querySelector('.u15-second-station');

chooseStation(a11, firstStation);
chooseStation(a11, secondStation);

document.querySelector('.btn-15').onclick = () => {
    let start, end, result, branch1, branch2;
    for (let line in a11) {
        for (let k = 0; k <= a11[line].length; k++) {
            if (a11[line][k] == firstStation.value) {
                start = a11[line].indexOf(firstStation.value);
                branch1 = line;
            }
            if (a11[line][k] == secondStation.value) {
                end = a11[line].indexOf(secondStation.value);
                branch2 = line;
            }
        }
    }
    if (start != end && branch1 == branch2) {
        result = Math.abs(start - end);
        res15 = `Branch:${branch1} <br> Station between: ${result - 1} <br> ${firstStation.value} --- ${secondStation.value}`;
    } else {
        res15 = 'The same station or different branches';
    }
    out11.innerHTML = res15;
};

// task16. Добавьте 3 radiobutton.u16-radio которые содержат value = red, green, blue - в соотвтествии с цветом веток
// метро. Добавьте пустой select.u16-select. При выборе radio - программа должна в select добавлять option с названиями
// станций метро. Т.е. выбрали radio(value="green") то внутрь select должны быть записаны option со станциями зеленой
// ветки. Выбрали red - select должен быть очищен и добавлены option со станциями красной ветки.

let radioBranch = document.querySelectorAll('.u16-radio');
let select16 = document.querySelector('.u16-select');

for (let k = 0; k < radioBranch.length; k++) {
    radioBranch[k].onchange = function () {
        select16.innerHTML = '';
        for (let line in a11) {
            for (let i = 0; i < a11[line].length; i++) {
                if (radioBranch[k].value == line) {
                    let optionBranch = document.createElement('option');
                    optionBranch.setAttribute('value', a11[line[i]]);
                    optionBranch.innerText = a11[line][i];
                    select16.append(optionBranch);
                }
            }
        }
    }
}

// Создайте массив, который описывает метро киевского метрополитена и обозначаются конечные и станции перехода, выведите
// его на страницу. Конечные - обозначать 0, перехода - 1.

// a17 = {
//     "red" : [ ['Академгородок', 0] ,...],
//     "green" :
// }

let kyivMetro = {
    red: [['Академмістечко', 0], ['Житомирська', 0], ['Святошин', 0], ['Нивки', 0], ['Берестейська', 1], ['Шулявська', 0], ['Політехнічний Інститут', 1], ['Вокзальна', 1], ['Університет', 0], ['Театральна', 1], ['Хрещатик', 1], ['Арсенальна', 0], ['Дніпро', 0], ['Гідропарк', 0], ['Лівобережна', 1], ['Дарниця', 0], ['Чернігівська', 0], ['Лісова', 0]],
    green: [['Сирець', 0], ['Дорогожичі', 0], ['Лукянівська', 0], ['Золоті Ворота', 1], ['Палац спорту', 1], ['Кловська', 0], ['Печерська', 0], ['Дружби Народів', 0], ['Видубичі', 1], ['Славутич', 0], ['Осокорки', 0], ['Позняки', 0], ['Харківська', 0], ['Вирлиця', 0], ['Бориспільська', 0], ['Червоний Хутір', 0]],
    blue: [['Героїв Дніпра', 0], ['Мінська', 0], ['Оболонь', 0], ['Почайна', 1], ['Тараса Шевченка', 0], ['Контрактова площа', 0], ['Поштова площа', 0], ['Майдан Незалежності', 1], ['Площа Льва Толстого', 1], ['Олімпійська', 0], ['Палац України', 0], ['Либідська', 0], ['Деміївська', 0], ['Голосіївська', 0], ['Васильківська', 0], ['Виставковий центр', 0], ['Іподром', 0], ['Теремки', 0]]
};
let out17 = document.querySelector('.out-17');

document.querySelector('.btn-17').onclick = () => {
    let res17 = '';
    for (let line in kyivMetro) {
        res17 += `${line.bold()} --- ${kyivMetro[line].join('; ')}<br>`;
    }
    out17.innerHTML = res17
};


// task 18. Выведите на страницу только станции с переходами из массива a17.

document.querySelector('.btn-18').onclick = () => {
    let res18 = '';
    for (let line in kyivMetro) {
        for (let i = 0; i < kyivMetro[line].length; i++) {
            for (let k = 0; k < kyivMetro[line][i].length; k++) {
                if (kyivMetro[line][i][k] == 1) {
                    res18 += `${line} --- ${kyivMetro[line][i]} <br>`;
                }
            }
        }
    }
    out17.innerHTML = res18;
};


//  task 19. Создайте ассоциативный массив где ключами являются страны азии, а вложенными массивами - ассоциативный массив
//  содержащий название столицы, количество населения, площадь. Выведите его на страницу.

let asia = {
    'China': {
        capital: 'Beijing',
        population: 1420647786,
        area: 9596961
    },
    'Japan': {
        capital: 'Tokyo',
        population: 126317000,
        area: 337937
    },
    'South Korea': {
        capital: 'Seoul',
        population: 51709098,
        area: 100363
    },
    'India': {
        capital: 'New Delhi',
        population: 1352642280,
        area: 3287263
    },
    'Iran': {
        capital: 'Tehran',
        population: 82531700,
        area: 1648195
    },
    'Indonesia': {
        capital: 'Jakarta',
        population: 267670543,
        area: 1904569
    },
    'Thailand': {
        capital: 'Bangkok',
        population: 69428453,
        area: 513120
    },
    'Malaysia': {
        capital: 'Kuala Lumpur',
        population: 32772110,
        area: 330803
    },
    'Saudi Arabia': {
        capital: 'Riyadh',
        population: 34218169,
        area: 2149690
    },
    'The Philippines': {
        capital: 'Manila',
        population: 100981437,
        area: 300000
    }
};
let out19 = document.querySelector('.out-19');


document.querySelector('.btn-19').onclick = () => {
    let res19 = '';
    for (let country in asia) {
        res19 += `${country.bold()}: <br> Capital -- ${asia[country].capital}<br> Population -- ${asia[country].population}<br> Area -- ${asia[country].area}<br>`;
    }
    out19.innerHTML = res19;
};


// task20 Дополните массив из задачи 19 так, чтобы пользователь мог сам выбирать страну в select, а необходимая
// информация подтягивалась на страницу.

let out20 = document.querySelector('.out-20');

let selectCountries = document.getElementById('countries');

function chooseCoun(array,select20){
    for (let key in array) {
        let optionCountry = document.createElement('option');
        optionCountry.innerText = key;
        optionCountry.setAttribute('value',key);
        select20.append(optionCountry);
    }
}

chooseCoun(asia,selectCountries);

document.querySelector('.btn-20').onclick = () => {
    infoCountry(asia,selectCountries)
};

function infoCountry(arr20,select) {
    let res20;
    for (let country in arr20){
        if (country == select.value){
            res20 =`Capital --${arr20[country].capital} <br> Population -- ${arr20[country].population}<br>Area --${arr20[country].area}<br>`
        }
    }
    out20.innerHTML = res20;
}

// ALTERNATIVE

// selectCountries.onchange = infoChange;
//
// function infoChange() {
//     let res20;
//     for (let country in asia){
//         if (country == selectCountries.value){
//             res20 =`Capital --${asia[country].capital} <br> Population -- ${asia[country].population}<br>Area --${asia[country].area}<br>`
//         }
//     }
//     out20.innerHTML = res20;
// }

