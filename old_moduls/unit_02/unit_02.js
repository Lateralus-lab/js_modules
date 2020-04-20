// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.

let a = 7;
let b = 9;
console.log(a * b);

// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.

let c = 7;
let d = 9;
document.querySelector('.out-2').textContent = c / d;

// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.

let e = 3;
let f = 5;
document.querySelector('.out-3').textContent = e + f;

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.

let e1 = '3';
let f1 = 5;
document.querySelector('.out-4').textContent = e1 + f1; // Тут мы склеили строку и цифру 5

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.

let e2 = 3;
let f2 = 0;
document.querySelector('.out-5').textContent = e2 / f2;

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.

let e3 = 3;
let f3 = 'Hello';
document.querySelector('.out-6').textContent = e3 + f3;

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.

let e4 = 3;
let f4 = 'Hello';
document.querySelector('.out-7').textContent = e4 * f4;

// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.

let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');

button.onclick = function () {
    console.log(inputIn.value);
}

// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу,  что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.

let inputNine = document.querySelector('.i-9');
let buttonNine = document.querySelector('.b-9');

buttonNine.onclick = function () {
    console.log(inputNine.value);
    inputNine.value = '';
}

// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.

let inputTen = document.querySelector('.i-10');
let buttonTen = document.querySelector('.b-10');

buttonTen.onclick = function () {
    let timesTen = inputTen.value;
    console.log(timesTen * 10);
    inputTen.value = '';
}

// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу в .out-11 число, которое ввел пользователь и к нему добавленное число 10.

let inputEleven = document.querySelector('.i-11');
let buttonEleven = document.querySelector('.b-11');
let div11 = document.querySelector('.out-11')

buttonEleven.onclick = function () {
    let movingNumber = inputEleven.value;
    div11.innerHTML = movingNumber;
    inputEleven.value = '';
}

// Task 12.
// Создайте два input (i-12_1 и i-12-2) и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в .out-12 строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.

let inputTwelveName = document.querySelector('.i-12_1');
let inputTwelveSurname = document.querySelector('.i-12_2');
let buttonTwelve = document.querySelector('.b-12');
let div12 = document.querySelector('.out-12');

buttonTwelve.onclick = function () {
    let twelveNameSurname = 'Hello ' + inputTwelveName.value + inputTwelveSurname.value;
    div12.innerHTML = twelveNameSurname;
}

// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу в .out-13.

let inputThiteenOne = document.querySelector('.i-13_1');
let inputThirteenTwo = document.querySelector('.i-13_2');
let buttonThirteen = document.querySelector('.b-13');
let div13 = document.querySelector('.out-13');

buttonThirteen.onclick = function () {
    let thirteenNumber = +inputThiteenOne.value + +inputThirteenTwo.value;
    div13.innerHTML = thirteenNumber;
}

// Task 14.
// Создайте input .i-14 и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.

let inputFourteen = document.querySelector('.i-14');
let buttonaFourteen = document.querySelector('.b-14');
let div14 = document.querySelector('.out-14');

buttonaFourteen.onclick = function () {
    let answerFourteen = inputFourteen.value;
    inputFourteen.value = 'Hello';
    div14.innerHTML = answerFourteen;
}

// Task 15.
// Создайте input i-15 и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.

let y = document.querySelector('.i-15');
y.style.border = '2px solid red';

// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел по нажатию кнопки b-16

let inputSixteenOne = document.querySelector('.i-16_1');
let inputSixteenTwo = document.querySelector('.i-16_2');
let buttonSixteen = document.querySelector('.b-16');
let div16 = document.querySelector('.out-16');

buttonSixteen.onclick = function () {
    let sixteenNumber = +inputSixteenOne.value + +inputSixteenTwo.value;
    div16.innerHTML = sixteenNumber;
}

// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в out-17. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

let inputSeventeen = document.querySelector('.i-17');
let buttonSeventeen = document.querySelector('.b-17');
let div17 = document.querySelector('.out-17');

buttonSeventeen.onclick = function () {
    let t = inputSeventeen.value;
    t = parseInt(t);
    div17.innerHTML = t;
}

// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

let inputEighteen = document.querySelector('.i-18');
let buttonEighteen = document.querySelector('.b-18');
let div18 = document.querySelector('.out-18');

buttonEighteen.onclick = function () {
    let t = inputEighteen.value;
    t = parseFloat(t);
    div18.innerHTML = t;
    console.log(t)
}

// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!

let inputNineteenOne = document.querySelector('.i-19_1');
let inputNineteenTwo = document.querySelector('.i-19_2');
let buttonNineteen = document.querySelector('.b-19');
let div19 = document.querySelector('.out-19');

buttonNineteen.onclick = function () {
    let t = +inputNineteenOne.value + +inputNineteenTwo.value;
    nineteenNumber = parseInt(t)
    div19.innerHTML = t;
}

// Task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.

let inputTwentyOne = document.querySelector('.i-20-1');
let inputTwentyTwo = document.querySelector('.i-20-2');
let inputTwentyThree = document.querySelector('.i-20-3');
let inputTwentyFour = document.querySelector('.i-20-4');
let buttonTwenty = document.querySelector('.b-20');
let div20 = document.querySelector('.out-20');

buttonTwenty.onclick = function () {
    answerTwenty = 'Уважаемый ' + inputTwentyOne.value + inputTwentyTwo.value + 'ваш возраст ' + inputTwentyThree.value + 'по професии вы ' + inputTwentyFour.value;
    div20.innerHTML = answerTwenty;
}