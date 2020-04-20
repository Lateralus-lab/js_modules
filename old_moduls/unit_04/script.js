// task 1 --------------------

let buttonOne = document.querySelector('.task-1');

buttonOne.onclick = () => {
    alert('Task 1');
}

// task 2 --------------------

let inputButton = document.querySelector('.task-2');

inputButton.onclick = () => {
    alert('Task 2');
}

// task 3 --------------------

let paragraphThree = document.querySelector('.task-3');

paragraphThree.onclick = () => {
    alert('Task 3');
}

// task 4 --------------------

let inputFour = document.querySelector('.i-4');
let buttonFour = document.querySelector('.b-4');

buttonFour.onclick = () => {
    if (inputFour.checked) {
        console.log('True');
    }
    else {
        console.log('False');
    }
}

// task 5 --------------------

let inputFive = document.querySelector('.i-5');
let buttonFive = document.querySelector('.b-5');

buttonFive.onclick = () => {
    if (inputFive.checked) {
        console.log('True');
        console.log(inputFive.value);
    }
    else {
        console.log('False');
    }
}

// task 6 --------------------

let inputSix = document.querySelector('.i-6');
let buttonSix = document.querySelector('.b-6');

buttonSix.onclick = () => {
    alert(inputSix.value);
}

// task 7 --------------------

let inputSeven = document.querySelector('.i-7');
let buttonSeven = document.querySelector('.b-7');

buttonSeven.onclick = () => {
    let passWord = inputSeven.value;
    alert(passWord);
    if (passWord.length < 6) {
        console.log('Длина пароля меньше 6 символов!')
    }
}

// task 8 --------------------

let div8 = document.querySelector('.d-8');
let buttonEight = document.querySelector('.b-8');

buttonEight.onclick = () => {
    div8.innerHTML += '<input class="i-8" type="text">Input content</input>';
    div8.innerHTML += '<button class="btn-8">Task 8.2</button>';
    let btnEight = document.querySelector('.btn-8');
    let inputEight = document.querySelector('.i-8');

    btnEight.onclick = () => {
        alert(inputEight);
    }
}

// task 9 --------------------

let inputNine = document.querySelector('.i-9');
let buttonNine = document.querySelector('.b-9');

buttonNine.onclick = () => {
    if (inputNine.checked) {
        alert(inputNine.value);
    }
    else {
        alert('False')
    }
}

// task 10 --------------------

let inputTen = document.querySelector('.i-10');
let buttonTen = document.querySelector('.b-10');
let div10 = document.querySelector('.d-10');

buttonTen.onclick = () => {
    div10.style.backgroundColor = inputTen.value;
}

// task 11 --------------------

let inputElevenOne = document.querySelector('.i-11_1');
let inputElevenTwo = document.querySelector('.i-11_2');
let buttonEleven = document.querySelector('.b-11');

buttonEleven.onclick = () => {
    inputElevenTwo.value = inputElevenOne.value;
}

// task 12 --------------------

let inputTwelve = document.querySelector('.i-12');
let buttonTwelve = document.querySelector('.b-12');
let div12 = document.querySelector('.out-12');

buttonTwelve.onclick = () => {
    div12.innerHTML = inputTwelve.value;
}

// task 13 --------------------

let inputThirteen = document.querySelector('.i-13');
let buttonThirteen = document.querySelector('.b-13');
let div13 = document.querySelector('.out-13');

buttonThirteen.onclick = () => {
    div13.innerHTML += inputThirteen.value;
}

inputThirteen.oninput = () => {
    div13.innerHTML += inputThirteen.value;
}

// task 14 --------------------

let textFourteen = document.querySelector('.t-14');
let buttonFourteen = document.querySelector('.b-14');
let div14 = document.querySelector('.out-14');

buttonFourteen.onclick = () => {
    div14.innerHTML = textFourteen.value;
}

// task 15 --------------------

let textFifteen = document.querySelector('.t-15');
let inputFifteen = document.querySelector('.i-15');
let buttonFifteen = document.querySelector('.b-15')
let div15 = document.querySelector('.out-15');

buttonFifteen.onclick = () => {
    div15.innerHTML = inputFifteen.value;
    textFifteen.value = inputFifteen.value;
}

// task 16 --------------------

let selectSixteen = document.querySelector('.s-16');
let buttonSixteen = document.querySelector('.b-16');
let div16 = document.querySelector('.out-16');

buttonSixteen.onclick = () => {
    div16.innerHTML = selectSixteen.value;
}

// task 17 --------------------

// Эту задачу пока не делаем!!!!!

// task 18 --------------------

let selectEighteen = document.querySelector('.s-18');
let div18 = document.querySelector('.out-18');

selectEighteen.onchange = () => {
    div18.innerHTML = selectEighteen.value;
}

// task 19 --------------------

let inputNineteenOne = document.querySelector('.i-19_1');
let inputNineteenTwo = document.querySelector('.i-19_2');
let buttonNineteen = document.querySelector('.b-19');

buttonNineteen.onclick = () => {
    console.log(inputNineteenOne.value);
    console.log(inputNineteenTwo.value);
}

// task 20 --------------------

let inputTwentyOne = document.querySelector('.i-20_1');
let inputTwentyTwo = document.querySelector('.i-20_2');
let buttonTwenty = document.querySelector('.b-20');

buttonTwenty.onclick = () => {
    console.log(inputTwentyOne.value);
    console.log(inputTwentyTwo.value);
}