// Task 1
// При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в out-1.

let inputOne = document.querySelector('.i-1');
let buttonOne = document.querySelector('.b-1');
let div1 = document.querySelector('.out-1');

buttonOne.onclick = () => {
    let numOne = +inputOne.value;
    if (numOne == 4) {
        div1.innerHTML = 'True';
    }
    else {
        div1.innerHTML = 'False';
    }
}

// Task 2
// Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в out-2 число, которое больше. Вариант равенства переменных не рассматриваем.

let a21 = 45;
let a22 = 32;
let buttonTwo = document.querySelector('.b-2');
let div2 = document.querySelector('.out-2');

buttonTwo.onclick = function f2() {
    if (a21 > a22) {
        div2.innerHTML = a21;
    }
    else {
        div2.innerHTML = a22;
    }
}

// Task 3
// Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3. Функция должна вычитать содержимое i-31 и i-31 в переменные и сравнить их, вывести в  out-3 большее число.
//     Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.

let inputThreeOne = document.querySelector('.i-31');
let inputThreeTwo = document.querySelector('.i-32');
let buttonThree = document.querySelector('.b-3');
let div3 = document.querySelector('.out-3')

buttonThree.onclick = function f3() {
    let numThreeOne = +inputThreeOne.value;
    let numThreeTwo = +inputThreeTwo.value;
    if (numThreeOne > numThreeTwo) {
        div3.innerHTML = numThreeOne;
    }
    else {
        numThreeTwo > numThreeOne;
        div3.innerHTML = numThreeTwo;
    }
}


// Task 4. Создайте на странице input[type=number] с классом i-4, куда пользователь может ввести год своего рождения. Есть кнопка b-4 которая запускает функцию f4. Функция должна вывести в  .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.

let inputFour = document.querySelector('.i-4');
let buttonFour = document.querySelector('.b-4');
let div4 = document.querySelector('.out-4');

buttonFour.onclick = function f4() {
    let numFour = inputFour.value;
    if (numFour >= 18) {
        div4.innerHTML = 1;
    }
    else {
        div4.innerHTML = 0;
    }
}

// Task 5. Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в  .out-5 символ m если число меньше нуля, 0 если число равно нулю и 1 если больше.

let inputFive = document.querySelector('.i-5');
let buttonFive = document.querySelector('.b-5');
let div5 = document.querySelector('.out-5');

buttonFive.onclick = function f5() {
    let numFive = inputFive.value;
    if (numFive < 0) {
        div5.innerHTML = 'm';
    }
    else if (numFive == 0) {
        div5.innerHTML = 0;
    }
    else {
        div5.innerHTML = 1;
    }
}

// Task 6. Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число. Есть кнопка b-6 которая запускает функцию f6. Функция должна вывести в  .out-6  слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю  - четное, нет - нечетное.

let inputSix = document.querySelector('.i-6');
let buttonSix = document.querySelector('.b-6');
let div6 = document.querySelector('.out-6');

buttonSix.onclick = function f6() {
    let sumSix = inputSix.value;
    if (sumSix % 2 == 0) {
        div6.innerHTML = 'even';
    }
    else {
        div6.innerHTML = 'odd';
    }
}

// Task 7.
// Даны 2 input - i-71 и i-72, оба - input[type=number]. При нажатии кнопки b-7 срабатывает функция f7. Функция должна число из i-71 возвести в степень i-72, вывести результат в  out-7. Для возведения в степень можно использовать **, или Math.pow.

let inputSevenOne = document.querySelector('.i-71');
let inputSevenTwo = document.querySelector('.i-72');
let buttonSeven = document.querySelector('.b-7');
let div7 = document.querySelector('.out-7');

buttonSeven.onclick = function f7() {
    let sumOne = inputSevenOne.value;
    let sumTwo = inputSevenTwo.value;
    let power = Math.pow(sumOne, sumTwo);
    div7.innerHTML = power;
}

// Task 8.
// Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее  нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’. И если число выбрано - 1, то вывести в out-8 строку one, если 2 - two, если 3 - three.

let inputEight = document.querySelector('.s-8');
let buttonEight = document.querySelector('.b-8');
let div8 = document.querySelector('.out-8');

buttonEight.onclick = function f8() {
    let sumEight = inputEight.value;
    switch (sumEight) {
        case '1':
            div8.innerHTML = 'One';
            break;
        case '2':
            div8.innerHTML = 'Two';
            break;
        case '3':
            div8.innerHTML = 'Three';
            break;
    }
}

// Task 9
//     Создайте на странице input[type=number] с классом i-9, куда пользователь может ввести номер квартиры. Есть кнопка b-9 которая запускает функцию f9. Функция должна вывести в  .out-9 номер подъезда, в котором находится квартира.
//      если от 1 до 32 - то вывести цифру 1
//     если от 33 до 43 - то вывести 2
//     если от 44 до 64 - то 3.
//     В противном случае, вывести 0.

let inputNine = document.querySelector('.i-9');
let buttonNine = document.querySelector('.b-9');
let div9 = document.querySelector('.out-9');

buttonNine.onclick = function f9() {
    let sumNine = inputNine.value;
    if (sumNine < 32) {
        div9.innerHTML = 1;
    }
    else if (sumNine < 43) {
        div9.innerHTML = 2;
    }
    else if (sumNine < 64) {
        div9.innerHTML = 3;
    }
    else {
        div9.innerHTML = 0;
    }
}

// Task 10
//     Дан input i-101 и input-102, type=number.  Дан select s-103, который содержит две операции - +, -, *, / . Дана кнопка b-10, при нажатии на которую срабатывает функция f10. Функция выводит в out-10 результат операций выбранной в 3-м select к числам введенным в первом и втором input. Например выбрано 1 13 +, нужно вывести результат 1+13 т.е. 14.

let inputTenOne = document.querySelector('.i-101');
let inputTenTwo = document.querySelector('.i-102');
let buttonTen = document.querySelector('.b-10');
let div10 = document.querySelector('.out-10');

buttonTen.onclick = function f10() {
    sumOne = +inputTenOne.value;
    sumTwo = +inputTenTwo.value;
    sign = document.querySelector('.s-103').value;
    if (sign == '+') {
        div10.innerHTML = sumOne + sumTwo;
    }
    else if (sign == '-') {
        div10.innerHTML = sumOne - sumTwo;
    }
    else if (sign == '*') {
        div10.innerHTML = sumOne * sumTwo;
    }
    else if (sign == '/') {
        div10.innerHTML = sumOne / sumTwo;
    }
}


// Task     11
//     Дан select s-111 и s-112, каждый из которых содержит 1 и 0.  Дан select s-113, который содержит две операции - && и || . Дана кнопка b-11, при нажатии на которую срабатывает функция f11. Функция выводит в out-11 результат логических операций выбранных в 3 select к числам выбранным в первом и втором select. Например выбрано 1 1 &&,  нужно вывести результат операции 1&&1 т.е. 1 или 0.

let buttonEleven = document.querySelector('.b-11');
let div11 = document.querySelector('.out-11');

buttonEleven.onclick = function f11() {
    optionOne = +document.querySelector('.s-111').value;
    optionTwo = +document.querySelector('.s-112').value;
    optionThree = document.querySelector('.s-113').value;
    if (optionThree == '&&') {
        div11.innerHTML = optionOne && optionTwo;
    }
    else if (optionThree == '||') {
        div11.innerHTML = optionOne || optionTwo;
    }
}




