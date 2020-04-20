//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

function t1() {
    for (let i = 0; i < 3; i++) {
        d1.innerHTML += '***';
        for (let j = 0; j < 1; j++) {
            d1.innerHTML += '_';
        }
    }
}

document.querySelector('.b-1').onclick = t1;
let d1 = document.querySelector('.out-1');

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>
function t2() {
    for (let i = 1; i <= 3; i++) {
        d2.innerHTML += '<br>' + i + '<br>';
        for (let j = 1; j <= 3; j++) {
            d2.innerHTML += '*_';
        }
    }
}

document.querySelector('.b-2').onclick = t2;
let d2 = document.querySelector('.out-2');


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>
function t3() {
    for (let i = 0; i <= 3; i++) {
        d3.innerHTML += '<br>';
        for (let j = 0; j <= 2; j++) {
            d3.innerHTML += '*_';
        }
    }
}

document.querySelector('.b-3').onclick = t3;
let d3 = document.querySelector('.out-3');

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 0_10_1_9_2_8_3_7_4_6_5_5_6_4_7_3_8_2_9_1_10_0_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит числа на четных позициях (от 0 до 10) внутренний цикл  - числа на нечетных позициях  (от 10 до 0).</p>
function t4() {
    for (let i = 0; i <= 10; i++) {
        d4.innerHTML += i;
        for (let j = 1; j <= 1; j++) {
            if (j == 0) {
                d4.innerHTML += i;
            } else {
                d4.innerHTML += '_' + (10 - i) + '_';
            }
        }
    }
}

document.querySelector('.b-4').onclick = t4;
let d4 = document.querySelector('.out-4');


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>
function t5() {
    for (let i = 0; i < 3; i++) {
        d5.innerHTML += '<br>';
        for (let j = 0; j < 3; j++) {
            d5.innerHTML += '10';
        }
    }
}

document.querySelector('.b-5').onclick = t5;
let d5 = document.querySelector('.out-5');


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>
function t6() {
    for (let i = 0; i < 3; i++) {
        d6.innerHTML += '<br>';
        for (let j = 0; j < 1; j++) {
            d6.innerHTML += '10x01x';
        }
    }
}

document.querySelector('.b-6').onclick = t6;
let d6 = document.querySelector('.out-6');


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>

let d7 = '';
let q = 4;

function t7() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j <= 4; j++) {
            if (j < q) {
                d7 += '';
            } else {
                d7 += '*';
            }
        }
        q--;
        d7 += '<br>';
        document.querySelector('.out-7').innerHTML = d7;
    }
}

document.querySelector('.b-7').onclick = t7;
document.querySelector('.out-7').innerHTML = d7;


//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. </p>

let d8 = '';
let g = 4;

function t8() {
    for (let i = 5; i >= 0; i--) {
        for (let j = 5; j >= 0; j--) {
            if (j > g) {
                d8 += '';
            } else {
                d8 += '*';
            }
        }
        g--;
        d8 += '<br>';
        document.querySelector('.out-8').innerHTML = d8;
    }
}

document.querySelector('.b-8').onclick = t8;
document.querySelector('.out-8').innerHTML = d8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>

let d9 = '';
let q9 = 1;

function t9() {
    for (let i = 0; i <= 5; i++) {
        d9 += '<br>';
        for (let j = 1; j <= 5; j++) {
            if (j < q9) {
                d9 += j + ' ';
            }
        }
        q9++;
        document.querySelector('.out-9').innerHTML = d9;
    }
}

document.querySelector('.b-9').onclick = t9;
document.querySelector('.out-9').innerHTML = d9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>

let d10 = '';

function t10() {
    for (i = 0; i < 5; i++) {
        for (let j = 1; j <= 10; j++) {
            if (i == 0 && j < 10) {
                d10 += '0';
            }
            d10 += (i * 10) + j + ' ';
        }
        d10 += '<br>';
        document.querySelector('.out-10').innerHTML = d10;
    }
}

document.querySelector('.b-10').onclick = t10;
document.querySelector('.out-10').innerHTML = d10;