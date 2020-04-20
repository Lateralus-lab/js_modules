//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.

let i1 = 0;

function t1() {
    while (i1 < 50) {
        i1++;
        out1.innerHTML += i1 + ' ';
    }
}

document.querySelector('.b-1').onclick = t1;
let out1 = document.querySelector('.out-1');

//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
//     2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла  while.

let i2 = 0;

function t2() {
    while (i2 < 122) {
        i2 = i2 + 2;
        out2.innerHTML += i2 + ' ';
    }
}

document.querySelector('.b-2').onclick = t2;
let out2 = document.querySelector('.out-2');



//  Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
//     25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла  while.

let i3 = 26;

function t3() {
    while (i3 >= 8) {
        i3--;
        out3.innerHTML += i3 + ' ';
    }
}

document.querySelector('.b-3').onclick = t3;
let out3 = document.querySelector('.out-3');

//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
//     77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла  while.

let i4 = 80;

function t4() {
    while (i4 > 35) {
        i4 = i4 - 3;
        out4.innerHTML += i4 + '_';
    }
}

document.querySelector('.b-4').onclick = t4;
let out4 = document.querySelector('.out-4');


//  Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
//     1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла  while.

let i5 = 0;

function t5() {
    while (i5 < 17) {
        i5++;
        if (i5 % 2 == 0) {
            out5.innerHTML += i5 + '_**';
        } else {
            out5.innerHTML += i5 + '_*';
        }
    }
}

document.querySelector('.b-5').onclick = t5;
let out5 = document.querySelector('.out-5');


//  Task 6
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br.
// Количество строк (итераций, повторений) цикла  while вводит пользователь в i-6.


function t6() {
    let t6 = 0;
    let pre = '';
    while (t6 < i6.value) {
        t6++;
        pre += '****** '
    }
    document.querySelector('pre').innerHTML = pre;
    i6.value = '';
}

document.querySelector('.b-6').onclick = t6;
let i6 = document.querySelector('.i-6');
let out6 = document.querySelector('.out-6');


//  Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция f7, которая выводит в out-7 числа от введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4 3 2 1
// Задача решается с помощью цикла  while.


function t7() {
    let i = i7.value;
    while (i !== -1) {
        i--;
        out7.innerHTML += i + 1 + ' ';
    }
}

document.querySelector('.b-7').onclick = t7;
let i7 = document.querySelector('.i-7');
let out7 = document.querySelector('.out-7');


//  Task 8
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8  должна запускаться функция f8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// Задача решается с помощью цикла  while.

function t8() {
    i = i8One.value;
    while (i <= i8Two.value) {
        i++;
        out8.innerHTML += i - 1 + ' ';
    }
}

document.querySelector('.b-8').onclick = t8;
let i8One = document.querySelector('.i-81');
let i8Two = document.querySelector('.i-82');
let out8 = document.querySelector('.out-8');


//  Task 9
// Есть input i-91 и i-92 куда пользователь может ввести числа.
// По нажатию кнопки b-9 должна запускаться функция f9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл  while.

function t9() {
    if (i9One.value < i9Two.value) {
        let i = i9One.value;
        while (i <= i9Two.value) {
            i++;
            out9.innerHTML += i - 1 + ' ';
        }
    } else {
        let i = i9Two.value;
        while (i <= i9One.value) {
            i++;
            out9.innerHTML += i - 1 + ' ';
        }
    }
}

document.querySelector('.b-9').onclick = t9;
let i9One = document.querySelector('.i-91');
let i9Two = document.querySelector('.i-92');
let out9 = document.querySelector('.out-9');


//  Task 10
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно.
// Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).

function t10() {
    let i = 1948;
    while (i <= 2000) {
        i++;
        if (i % 2 == 0) {
            out10.innerHTML += i + ' ';
        }
    }
}

document.querySelector('.b-10').onclick = t10;
let out10 = document.querySelector('.out-10');

//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
//     В результате должно получиться так:
//     one 3 4 two


function t11() {
    i = -1;
    while (i <= d11.length) {
        i++;
        out11.innerHTML += d11[i].innerHTML + ' ';
    }
}

document.querySelector('.b-11').onclick = t11;
let d11 = document.querySelectorAll('.div-11');
let out11 = document.querySelector('.out-11');

//  Task 12
// Кнопка b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’


function t12() {
    let i = -1;
    while (i < d12.length) {
        i++;
        out12.innerHTML = d12[i].style.background = 'orange';
    }
}

document.querySelector('.b-12').onclick = t12;
let d12 = document.querySelectorAll('.div-12');
let out12 = document.querySelector('.out-12');

//  Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...

function t13() {
    let i = -1;
    while (i <= i13.length) {
        i++;
        if (i13[i].value) {
            i13[i].value = i + 1;
        }
    }
}

document.querySelector('.b-13').onclick = t13;
let i13 = document.querySelectorAll('.i-13');
let out13 = document.querySelector('.out-13');

//  Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.


function t14() {
    let i = -1;
    while (i < i14.length) {
        i++;
        if (i14[i].checked) {
            out14.innerHTML = i14[i].value;
        }
    }
}

document.querySelector('.b-14').onclick = t14;
let i14 = document.querySelectorAll('.i-14');
let out14 = document.querySelector('.out-14');

//  Task 15
// Кнопка b-15 запускает функцию t15  Функция должна выводить следующую последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл  while. Разделитель пробел.

function t15() {
    i = 12;
    while (i >= 0) {
        i--;
        if (i == 10) {
            out15.innerHTML += ' ' + i + ' ' + 0;
        }
        else if (i == 9) {
            out15.innerHTML += ' ' + i + ' ' + 1;
        }
        else if (i == 8) {
            out15.innerHTML += ' ' + i + ' ' + 2;
        }
        else if (i == 7) {
            out15.innerHTML += ' ' + i + ' ' + 3;
        }
        else if (i == 6) {
            out15.innerHTML += ' ' + i + ' ' + 4;
        }
        else if (i == 5) {
            out15.innerHTML += ' ' + i + ' ' + 5;
        }
        else if (i == 4) {
            out15.innerHTML += ' ' + i + ' ' + 6;
        }
        else if (i == 3) {
            out15.innerHTML += ' ' + i + ' ' + 7;
        }
        else if (i == 2) {
            out15.innerHTML += ' ' + i + ' ' + 8;
        }
        else if (i == 1) {
            out15.innerHTML += ' ' + i + ' ' + 9;
        }
        else if (i == 0) {
            out15.innerHTML += ' ' + i + ' ' + 10;
        }
    }
}

document.querySelector('.b-15').onclick = t15;
let out15 = document.querySelector('.out-15');