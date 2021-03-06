// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.

const a = 7;
const b = 9;
console.log(a * b);

// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.

const c = 7;
const d = 9;

document.querySelector('.out-2').textContent = c / d;

// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.

const e = 3;
const f = 5;

document.querySelector('.out-3').textContent = e + f;

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.

const e1 = '3'; // e1 строка
const f1 = 5; // а1 число

document.querySelector('.out-4').textContent = e1 + f1;

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.

const e2 = 3;
const f2 = 0;

document.querySelector('.out-5').textContent = e2 / f2;

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.

const e3 = 3;
const f3 = 'Hello';

document.querySelector('.out-6').textContent = e3 + f3;

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.

const e4 = 3;
const f4 = 'Hello';

document.querySelector('.out-7').textContent = e4 * f4;

// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.

const i8 = document.querySelector('.i8');

function t8() {
    console.log(i8.value);
}

document.querySelector('.b-8').onclick = t8;

// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу,  что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.

const i9 = document.querySelector('.i-9');
const o9 = document.querySelector('.out-9');

function t9() {
    o9.innerHTML = i9.value;
    i9.value = '';
}

document.querySelector('.b-9').onclick = t9;

// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.

const i10 = document.querySelector('.i-10');
const o10 = document.querySelector('.out-10');

function t10() {
    o10.innerHTML = +i10.value * 10;
}

document.querySelector('.b-10').onclick = t10;

// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу в .out-11 число, которое ввел пользователь и к нему добавленное число 10.

const i11 = document.querySelector('.i-11');
const o11 = document.querySelector('.out-11');

function t11() {
    o11.innerHTML = +i11.value + 10;
}

document.querySelector('.b-11').onclick = t11;

// Task 12.
// Создайте два input (i-12_1 и i-12-2) и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в .out-12 строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.

const inputTwelveOne = document.querySelector('.i-12_1');
const inputTwelveTwo = document.querySelector('.i-12_2');
const o12 = document.querySelector('.out-12');

function t12() {
    o12.innerHTML = 'Hello ' + inputTwelveOne.value + ' ' + inputTwelveTwo.value;
}

document.querySelector('.b-12').onclick = t12;

// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу в .out-13.

const inputThirteenOne = document.querySelector('.i-13_1');
const inputThirteenTwo = document.querySelector('.i-13_2');
const o13 = document.querySelector('.out-13');

function t13() {
    o13.innerHTML = +inputThirteenOne.value + +inputThirteenTwo.value;
}

document.querySelector('.b-13').onclick = t13;

// Task 14.
// Создайте input .i-14 и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.

document.querySelector('.i-14').value = 'Hello';

// Task 15.
// Создайте input i-15 и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.


let y = document.querySelector('.i-15');;
y.style.border = '2px solid red';

// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел по нажатию кнопки b-16

const inputSixteenOne = document.querySelector('.i-16_1');
const inputSixteenTwo = document.querySelector('.i-16_2');
const o16 = document.querySelector('.out-16');

function t16() {
    o16.innerHTML += inputSixteenOne.value + inputSixteenTwo.value;
}

document.querySelector('.b-16').onclick = t16;

// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в out-17. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

const inputSeventeen = document.querySelector('.i-17');
const o17 = document.querySelector('.out-17');

function t17() {
    let t = inputSeventeen.value;
    t = parseInt(t);
    o17.innerHTML = t;
}

document.querySelector('.b-17').onclick = t17;

// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

const inputEighteen = document.querySelector('.i-18');
const o18 = document.querySelector('.out-18');

function t18() {
    let t = inputEighteen.value;
    t = parseFloat(t);
    o18.innerHTML = t;
    console.log(t);
}

document.querySelector('.b-18').onclick = t18;

// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!

const inputNineteenOne = document.querySelector('.i-19_1');
const inputNineteenTwo = document.querySelector('.i-19_2');
const o19 = document.querySelector('.out-19');

function t19() {
    let t = +inputNineteenOne.value + +inputNineteenTwo.value;
    totalNumber = parseInt(t);
    o19.innerHTML = t;
}

document.querySelector('.b-19').onclick = t19;

// Task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.

const inpuntTwentyOne = document.querySelector('.i-20_1');
const inpuntTwentyTwo = document.querySelector('.i-20_2');
const inpuntTwentyThree = document.querySelector('.i-20_3');
const inpuntTwentyFour = document.querySelector('.i-20_4');
const o20 = document.querySelector('.out-20');

function t20() {
    o20.innerHTML = 'Уважаемый ' + inpuntTwentyOne.value + ' ' + inpuntTwentyTwo.value + ' ваш возраст ' + inpuntTwentyThree.value + ' по професси вы ' + inpuntTwentyFour.value;
}

document.querySelector('.b-20').onclick = t20;