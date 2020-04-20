// Task 1
//Создайте массив ar1 содержащий строки, числа, булевы значения. Выведите его в .out-1. Вывод - по нажатию кнопки b-1

let ar1 = ['string', 1, true];
const o1 = document.querySelector('.out-1');

function f1() {
    o1.innerHTML = ar1;
    console.log(ar1);
}

document.querySelector('.b-1').onclick = f1;

// Task 2
//Создайте массив ar2 содержащий строки, числа, булевы значения. Выведите его в div.out-2. Используйте шаблон вывода из кода в JS. Вывод - по нажатию кнопки b-2

let ar2 = ['string', 1, 3, false];

function f2() {
    let out = '';
    for (let i = 0; i < ar2.length; i++) {
        out += ar2[i] + ' ';
    }
    document.querySelector('.out-2').innerHTML = out;
}

document.querySelector('.b-2').onclick = f2;

// Task 3
//Создайте массив ar3, заполните его любыми значениями. Выведите длину массива.
// Вывод - по нажатию кнопки b-3
// Вывод в out-3
// Тест допустим массив [1,2,3] вывод - 3

let ar3 = ['ape', 10000, 24];
const o3 = document.querySelector('.out-3');

function f3() {
    o3.innerHTML = ar3.length;
    console.log(ar3);
}

document.querySelector('.b-3').onclick = f3;

// Task 4
//Создайте массив ar4. Выведите нулевой, третий, восьмой элемент массива в out-4 через пробел. Сделайте вывод о 888-м элементе.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-4
// Вывод в out-4
// Тест допустим массив [1,2,3,4,5,6,7,8,9,10] вывод: 1 4 10

let ar4 = ['Kamaz', 24, 55, 'trash', 44, 77, 80, 21, 100];
const o4 = document.querySelector('.out-4');

function f4() {
    let s = ' ';
    o4.innerHTML = ar4[0] + s + ar4[2] + s + ar4[7];
}

document.querySelector('.b-4').onclick = f4;

// Task 5
//Создайте массив ar5 длина которого больше 5. Выведите сумму нулевого, второго и третьего элементов массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-5
// Вывод в out-5
// Тест допустим массив [1,2,3,4,5,6,7,8,9,10] вывод: 8

let ar5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const o5 = document.querySelector('.out-5');

function f5() {
    o5.innerHTML += ar5[0, 2, 3];
}

document.querySelector('.b-5').onclick = f5;

// Task 6
//Создайте массив ar6, который содержит ваше имя, знак зодиака, день рождения и месяц рождения. Выведите массив на страницу в div-6. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-6
// Вывод в out-6

let ar6 = ['Ilya', 'Gemini', 10, 'June'];
const o6 = document.querySelector('.out-6');

function f6() {
    let s = ' ';
    for (let i = 0; i < ar6.length; i++) {
        o6.innerHTML += ar6[i] + s;
    }
    console.log(ar6);
}

document.querySelector('.b-6').onclick = f6;

// Task 7
// Добавьте в массив ar7  значения 'vietnam' с индексом 7 , 'turkey' с индексом 6, 'italy' с индексом 5. Добавление элементов сделайте в f7. Выведите массив на страницу в .out-7. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-7
// Вывод в out-7

let ar7 = ['china', 'india', 'brazil', 'japan', 'egypt'];
const o7 = document.querySelector('.out-7');

function f7() {
    let s = ' ';
    ar7[5] = 'italy';
    ar7[6] = 'turkey';
    ar7[7] = 'vietman';
    for (let i = 0; i < ar7.length; i++) {
        o7.innerHTML += ar7[i] + s;
        console.log(ar7[i]);
    }
}

document.querySelector('.b-7').onclick = f7;

// Task 8
// Добавьте в массив ar8 третий элемент равный 3.14, 4 элемент равный 17, 6 элемент равный 5. Выведите массив в .out-8. Разделитель - дефис. В .out-8-1 выведите длину массива ar8.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-8
// Вывод в out-8

let ar8 = [];
const o8 = document.querySelector('.out-8');
const o8Two = document.querySelector('.out-8-1');

function f8() {
    let s = '-';
    ar8[3] = 3.14;
    ar8[4] = 17;
    ar8[6] = 5;
    for (let i = 0; i < ar8.length; i++) {
        o8.innerHTML += ar8[i] + s;
    }
    o8Two.innerHTML = ar8.length;
    console.log(ar8);

}

document.querySelector('.b-8').onclick = f8;

// Task 9
// Выведите последний элемент массива ar9. Вывод последнего элемента  - реализуйте по индексу. Чтобы узнать индекс последнего элемента - посмотрите на длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-9
// Вывод в out-9

let ar9 = [100, 200, 300, 400, 700, 121];
const o9 = document.querySelector('.out-9');

function f9() {
    o9.innerHTML += ar9.length - 1 + '<br>' + ar9[5];
    console.log(ar9);
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Выведите сумму первого и последнего массива ar10 в блок out-10. Индекс последнего элемента массива не указывайте напрямую, а вычисляйте через длину массива .
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-10
// Вывод в out-10

let ar10 = [100, 200, 300, 400, 700, 121];
const o10 = document.querySelector('.out-10');

function f10() {
    o10.innerHTML += ar10[0] + ar10[ar10.length - 1];
    console.log(ar10);
}

document.querySelector('.b-10').onclick = f10;


// Task 11
// Напишите функцию, которая меняет местами второй и четвертый элемент массива ar11 и выводит его в out-11. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-11
// Вывод в out-11

let ar11 = [2, 3, 4, 5, 6, 7];
const o11 = document.querySelector('.out-11');

function f11() {
    let s = ' ';
    let c = ar11[2];
    ar11[2] = ar11[4];
    ar11[4] = c;
    for (let i = 0; i < ar11.length; i++) {
        o11.innerHTML += ar11[i] + s;
    }
    console.log(ar11);
}

document.querySelector('.b-11').onclick = f11;


// Task 12
// Напишите функцию f12, которая меняет местами нулевой и последний элемент массива ar12 и выводит его в out-12. Разделитель - пробел. Последний элемент вычислять через длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-12
// Вывод в out-12

let ar12 = ['test', 'west', 'list', 'class', 'best'];
const o12 = document.querySelector('.out-12');

function f12() {
    let s = ' ';
    let c = ar12[0];
    ar12[0] = ar12[ar12.length - 1];
    ar12[ar12.length - 1] = c;
    for (let i = 0; i < ar12.length; i++) {
        o12.innerHTML += ar12[i] + s;
    }
}

document.querySelector('.b-12').onclick = f12;

// Task 13
// Выведите массив ar13 в out-13 в формате индекс-значение перенос строки. Между индекс и значение - дефис без пробелов.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-13
// Вывод в out-13
// Тест допустим массив [1,2,3] вывод:
//  0-1
//  1-2
//  2-3


let ar13 = ['test', 'west', 'list', 'class', 'best'];
const o13 = document.querySelector('.out-13');

function f13() {
    let s = '-';
    for (let i = 0; i < ar13.length; i++) {
        o13.innerHTML += i + s + ar13[i] + '<br>';
    }
}

document.querySelector('.b-13').onclick = f13;


// Task 14
// Используя цикл выведите на страницу массив ar14 в обратном порядке. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-14
// Вывод в out-14

let ar14 = [1, 2, 3, 'hello', 66];
const o14 = document.querySelector('.out-14');

function f14() {
    let s = ' ';
    for (let i = ar14.length - 1; i > 0; i--) {
        o14.innerHTML += ar14[i] + s;
    }
}

document.querySelector('.b-14').onclick = f14;

// Task 15
// Используя цикл выведите на страницу элементы массива ar15, которые больше нуля. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-15
// Вывод в out-15

let ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
const o15 = document.querySelector('.out-15');

function f15() {
    let s = ' ';
    for (let i = 0; i < ar15.length; i++) {
        if (ar15[i] >= 0) {
            o15.innerHTML += ar15[i] + s;
        }
    }

}

document.querySelector('.b-15').onclick = f15;

// Task 16
// Выполните перебор массива arr16. Четные элементы добавьте в массив ar16_even, нечетные в ar16_odd. Полученные массивы выведите в .out-16
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-16
// Вывод в out-16

let ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let ar16_odd = [];
let ar16_even = [];
const o16 = document.querySelector('.out-16');

function f16() {
    for (let i = 0; i < ar16.length; i++) {
        if (ar16[i] % 2 == 0) {
            ar16_even[i] = ar16[i];
        } else {
            ar16_odd[i] = ar16[i];
        }
    }
    o16.innerHTML += `Главный массив: ${ar16}<br>` +
        `Массив с четными элементами: ${ar16_even}<br>` +
        `Массив с  нечетными элементами: ${ar16_odd}`;
}

document.querySelector('.b-16').onclick = f16;

// Task 17
// Используя цикл выведите в .out-17 количество элементов ar17, значение которых больше 3. Для расчета используйте цикл и переменную счетчик.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-17
// Вывод в out-17

let ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
const o17 = document.querySelector('.out-17');

function f17() {
    let s = ' ';
    for (let i = 0; i < ar17.length; i++) {
        if (ar17[i] > 3) {
            o17.innerHTML += ar17[i] + s + '<br>';
        }
    }
}

document.querySelector('.b-17').onclick = f17;


// Task 18
// Используя цикл выведите в .out-18 максимальный элемент массива ar18.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-18
// Вывод в out-18

let ar18 = [15, 24, 13, 78, 21, 4, 45, 67];

function f18() {

}

document.querySelector('.b-18').onclick = f18;


// Task 19
// Выведите в .out-19 индекс минимального элемента в массиве ar19
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-19
// Вывод в out-19

let ar19 = [15, 424, 313, 78, 241, 4, 45, 67];

function f19() {

}

document.querySelector('.b-19').onclick = f19;

// Task 20
// Выведите в .out-20 сумму элементов в массиве ar20
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-20
// Вывод в out-20

let ar20 = [4, 5, 6, 7, 8, 9, 10];

function f20() {

}

document.querySelector('.b-20').onclick = f20;