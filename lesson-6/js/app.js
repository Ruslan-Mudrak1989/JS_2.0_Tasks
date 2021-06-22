//  Task 1.--------------------
// С помощью вложенных циклов и символа * нарисуйте:
// *** *** ***

let one = document.querySelector('#task-1 pre');
let out1 = '';
for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 3; k++) {
        out1 += '*';
    }
    out1 += '&nbsp';
}
one.innerHTML += out1;

// Task 2.--------------------
// С помощью вложенных циклов и символа * нарисуйте:
// *****
// *****
// *****

let two = document.querySelector('#task-2 pre');
let out2 = '';
for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 5; k++) {
        out2 += '*';
    }
    out2 += '<br>';
}
two.innerHTML += out2;


// Task 3.--------------------
// С помощью вложенных циклов и символа 1,0 нарисуйте прямоугольник. 1 или 0 выводите в зависимости
// от того четная или нет переменная внутреннего цикла.
// 101010
// 101010
// 101010

let three = document.querySelector('#task-3 pre');
let out3 = '';
for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 6; k++) {
        if (k % 2 == 0) {
            out3 += 1;
        } else {
            out3 += 0;
        }
    }
    out3 += '<br>'
}
three.innerHTML += out3;

// Task 4.--------------------
// С помощью вложенных циклов и символа 1,0 нарисуйте прямоугольник. 1 или 0 выводите в зависимости от того
// четная или нет переменная внутреннего цикла. Каждый третий элемент заменяйте на x:
// 10x01x
// 10x01x
// 10x01x

let four = document.querySelector('#task-4 pre');
let out4 = '';
for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 6; k++) {
        if (k == 2 || k == 5) {
            out4 += 'x';
        } else if (k % 2 == 0) {
            out4 += 1;
        } else {
            out4 += 0;
        }
    }
    out4 += '<br>';
}
    four.innerHTML += out4;


// Task 5.--------------------
//С помощью вложенных циклов и символа * нарисуйте:
//  *
//  **
//  ***

//  One way

// let five = document.querySelector('#task-5 pre');
// let str5 = '';
// for (let i = 0; i < 3; i++) {
//     str5 += '*';
//     five.innerHTML += str5 + '<br>';
// }

//  Alternative

let five = document.querySelector('#task-5 pre');
let str5 = '';
for (let i = 0; i < 3; i++) {
    for (let k = 0; k <= i; k++) {
        str5 += '*';
    }
    str5 += '<br>';
}
five.innerHTML += str5 + '<br>';

//  Task 6.--------------------
// С помощью вложенных циклов и символа * нарисуйте:
// *****
// ****
// ***
// **
// *

//  One way

// let six = document.querySelector('#task-6 pre');
// let str6 = '';
// let s = 5;
// for (let i = 0; i < 5; i++) {
//     for (let k = s; k > 0; k--) {
//         str6 += '*';
//     }
//     str6 += '<br>';
//     s--;
// }
//     six.innerHTML += str6;


//  Alternative
let out6 = '';
let six = document.querySelector('#task-6 pre');
for (let i = 0; i < 5; i++) {
    for (let k = 5; k > i; k--) {
        out6 += '*';
    }
    out6 += '<br>';
}
six.innerHTML += out6;


// Task 7.--------------------
// С помощью вложенных циклов и символа * нарисуйте:
//     *****
//    *****
//   *****


//  One way


let seven = document.querySelector('#task-7 pre');
let out7 = '';
let s = 5;
for (let i = 0; i < 3; i++) {
    for (let k = 7; k > i; k--) {
        if (k > s) {
            out7 += '&nbsp';
        } else {
            out7 += '*';
        }
    }
    out7 += '<br>';
    s++;
}
seven.innerHTML += out7;


// Alternative

// let seven = document.querySelector('#task-7 pre');
// let out7 = '';
// let s = 2;
// let q = 6;
// for (let i = 0; i < 3; i++) {
//     for (let k = 0; k < 7; k++) {
//         if (k < s || k > q) {
//             out7 += '&nbsp';
//         } else {
//             out7 += '*';
//         }
//     }
//     out7 += '<br>';
//     s--;
//     q--;
// }
// seven.innerHTML += out7;


// Task 8.--------------------
// С помощью вложенных циклов и символа * нарисуйте:
// *
// **
// ***
// **
// *

let eight = document.querySelector('#task-8 pre');

let out8 = '';
let a = 0;
let b = 4;
for (let i = 0; i < 5; i++) {
    for (let k = 0; k < 3; k++) {
        if (k > a || k > b) {
            out8 += '&nbsp';
        } else {
            out8 += '*';
        }
    }
    out8 += '<br>';
    a++;
    b--;
}
eight.innerHTML += out8;

// Task 9.--------------------
// С помощью вложенных циклов и символа * нарисуйте:
// ******
// *    *
// *    *
// *    *
// ******

let nine = document.querySelector('#task-9 pre');

let out9 = '';
let c = 0;
let d = 5;
for (let i = 0; i < 5; i++) {
    for (let k = 0; k < 6; k++) {
        if (i == 0 || i == 4) {
            out9 += '*';
        } else if (k > c && k < d) {
            out9 += '&nbsp';
        } else {
            out9 += '*';
        }
    }
    out9 += '<br>';
}

nine.innerHTML += out9;


 // Task 10.--------------------
// С помощью вложенных циклов и символа который вводит пользователь нарисуйте:
// ******
// *    *
// *    *
// *    *
// ******

let ten = document.querySelector('#task-10 pre');
let symbol = document.querySelector('#symbol');
symbol.oninput = () => {
    if (symbol.value.length > 1) {
        alert('mistake');
        symbol.value = '';
    } else {
        let out10 = '';
        let e = 0;
        let f = 5;
        for (let i = 0; i < 5; i++) {
            for (let k = 0; k < 6; k++) {
                if (i == 0 || i == 4) {
                    out10 += symbol.value;
                } else if (k > e && k < f) {
                    out10 += '&nbsp';
                } else {
                    out10 += symbol.value;
                }
            }
            out10 += '<br>';
        }

        ten.innerHTML += out10;
    }
};


 // Task 11.--------------------
// С помощью вложенных циклов вывените таблицу умножения на 6 и 7.

let eleven = document.querySelector('#task-11 pre');
let out11 = '';
for (let i = 6; i < 8; i++) {
    for (let k = 1; k < 10; k++) {
        out11 += `${i} * ${k} = ${i * k} <br>`;
    }
    out11 += '<hr>';
}
eleven.innerHTML += out11;


// Task 12.--------------------
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

let twelve = document.querySelector('#task-12 pre');
let out12 = '';
for (let i = 1; i < 6; i++) {
    for (let k = 1; k <= i; k++) {
        out12 += k;
    }
    out12 += '<br>';
}
twelve.innerHTML += out12;


// Alternative 1

// let twelve = document.querySelector('#task-12 pre');
// let out12 = '';
// let count12 = 1;
// for (let i = 0; i < 5; i++) {
//     for (let k = 0; k < 1; k++) {
//         out12 += count12;
//     }
//     twelve.innerHTML += out12 + '<br>';
//     count12++;
// }


// Alternative 2

// let twelve = document.querySelector('#task-12 pre');
// let out12 = '';
// for (let i = 1; i < 6; i++) {
//     out12 += i;
// twelve.innerHTML += out12 + '<br>';
// }


//  Task 13.--------------------
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50


let thirteen = document.querySelector('#task-13 pre');
let out13 = '';
for (let i = 0; i < 5; i++) {
    for (let k = 1; k < 11; k++) {
        if (k == 10) {
            out13 += `${i + 1}0 `;
        } else {
            out13 += `${i}${k} `;
        }
    }
    out13 += '<br>';
}
thirteen.innerHTML += out13;


// Alternative 2

// let thirteen = document.querySelector('#task-13 pre');
// let numbers = 1;
// let out13 = '';
// for (let i = 0; i < 5; i++) {
//     for (let k = 1; k < 11; k++) {
//         if (k == 10) {
//             out13 += numbers + '0';
//         } else {
//             out13 += `${i}${k} `;
//         }
//     }
//     out13 += '<br>';
//     numbers++;
// }
// thirteen.innerHTML += out13;


// Task 14.--------------------
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1

let fourteen = document.querySelector('#task-14 pre');

let out14 = '';
for (let i = 0; i < 5; i++) {
    for (let k = 5; k > i; k--) {
        out14 += k - i;
    }
    out14 += '<br>'
}
fourteen.innerHTML += out14;

// Task 15.--------------------
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// X X X X 1
// X X X 2 1
// X X 3 2 1
// X 4 3 2 1
// 5 4 3 2 1

let fifteen = document.querySelector('#task-15 pre');

let out15 = '';
for (let i = 1; i < 6; i++) {
    for (let k = 5; k >= 1; k--) {
        if (k > i) {
            out15 += 'X';
        } else {
            out15 += k;
        }
    }
    out15 += '<br>';
}
fifteen.innerHTML += out15;


// Task 16.--------------------
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 1
// 2  2
// 3  3  3
// 4  4  4  4
// 5  5  5  5  5

let sixteen = document.querySelector('#task-16 pre');
let out16 = '';
for (let i = 1; i < 6; i++) {
    for (let k = 0; k < i; k++) {
        out16 += `${i} `;
    }
    out16 += '<br>';
}
sixteen.innerHTML += out16;

//  Task 17.--------------------
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 5
// 4  4
// 3  3  3
// 2  2  2  2
// 1  1  1  1  1

let seventeen = document.querySelector('#task-17 pre');
let out17 = '';
for (let i = 5; i > 0; i--) {
    for (let k = 6; k > i; k--) {
        out17 += `${i} `;
    }
    out17 += '<br>'
}
seventeen.innerHTML += out17;


//  Task 18.--------------------
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла (четные заменены на X):
// 5
// X  X
// 3  3  3
// X  X  X  X
// 1  1  1  1  1

let eighteen = document.querySelector('#task-18 pre');
let out18 = '';
for (let i = 5; i > 0; i--) {
    for (let k = 6; k > i; k--) {
        if (i % 2 == 0) {
            out18 += `X `;
        } else {
            out18 += `${i} `;
        }

    }
    out18 += '<br>'
}
eighteen.innerHTML += out18;


//  Task 19.--------------------
// С помощью вложенных циклов и символа * нарисуйте:
//
//   *****
//  *******
// *********

let nineteen = document.querySelector('#task-19 pre');

let out19 = '';
let x1 = 2;
let x2 = 6;
for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 9; k++) {
        if (k < x1 || k > x2) {
            out19 += '&nbsp';
        } else {
            out19 += '*';
        }
    }
    out19 += '<br>';
    x1--;
    x2++;
}
nineteen.innerHTML += out19;


//  Task 20.--------------------
// С помощью вложенных циклов и символа * нарисуйте:
//   **
//  ****
// ******
//  ****
//   **

let twenty = document.querySelector('#task-20 pre');

let out20 = '';
let y1 = 2;
let y2 = 3;
let t1 = 7;
let t2 = -2;
for (let i = 0; i < 5; i++) {
    for (let k = 0; k < 6; k++) {
        if (k < y1 || k > y2) {
            out20 += '&nbsp';
        } else if (k > t1 || k < t2) {
            out20 += '&nbsp';
        } else {
            out20 += '*';
        }
    }
    out20 += '<br>';
    y1--;
    y2++;
    t1--;
    t2++;
}
twenty.innerHTML += out20;


