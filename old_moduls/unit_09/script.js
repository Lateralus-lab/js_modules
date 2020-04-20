// TASK 1.  Напишите функцию func_1, которая присваивает p.u-1 ширину 200px.Проверьте ее работу.Допишите возможность присваивать высоту равную 100px;

const u1 = document.querySelector('.u-1');

function func_1() {
    u1.style.width = '200px';
    u1.style.height = '100px';
}

document.querySelector('.b-1').onclick = func_1;

// TASK 2. Напишите функцию func_2, которая будучи запущенной присваивает блоку p.u-2 класс css-1. Задайте данному классу через CSS зеленый цвет фона.

const u2 = document.querySelector('.u-2');

function func_2() {
    u2.classList.add('css-1');
}

document.querySelector('.b-2').onclick = func_2;

// TASK 3. Используя цикл, добавьте на все блоки p.u - 3 событие onclick.По клику запускайте функцию func_3, которая окрашивает элемент, на котором произошло событие в красный цвет фона.Для обращения внутри функции к такому элементу используйте this.

const u3 = document.querySelectorAll('.u-3');

function func_3() {
    for (i = 0; i < u3.length; i++) {
        u3[i].onclick = function () {
            this.style.background = 'red';
        }
    }
}

func_3();

// TASK 4. Используя цикл, добавьте на все блоки p.u - 4 событие onclick.По клику запускайте функцию func_4, которая присваивает элементу, на котором произошло событие, класс css - 2. Для обращения внутри функции к такому элементу используйте this.

const u4 = document.querySelectorAll('.u-4');

function func_4() {
    for (i = 0; i < u4.length; i++) {
        u4[i].onclick = function () {
            this.classList.add('css-2');
        }
    }
}

func_4();

// TASK 5. C помощью цикла, повесьте на блоки p.u - 5 функцию func_5, которая при клике будет удалять класс css - 3 с элемента, на котором произошло событие.

const u5 = document.querySelectorAll('.u-5');

function func_5() {
    for (i = 0; i < u5.length; i++) {
        u5[i].onclick = function () {
            this.classList.remove('css-3');
        }
    }
}

func_5();

// TASK 6. Есть кнопка.u - 6. Напишите функцию, которая при клике делает toggle классу.active для данной кнопки.

const u6 = document.querySelector('.u-6');

function func_6() {
    u6.onclick = function () {
        this.classList.toggle('active');
    }
}

func_6();

// TASK 7. Напишите функцию func - 7, которая будучи запущенной возвращает количество элементов с классом css-3.

document.querySelector('.b-7').onclick = function func_7() {
    let u5 = document.querySelectorAll('.u-5');
    let d7 = document.querySelector('.d-7');
    for (let i = 0; i < u5.length; i++) {
        d7.innerHTML = u5.length;
    }
}

// TASK 8. Напишите функцию func - 8, которая будучи запущенной, присваивает всем элементам p.u - 1 атрибут title со значением test - data.

document.querySelector('.b-8').onclick = function func_8() {
    console.log(u1.getAttribute('data'));
}


// TASK 9. С помощью цикла получите кнопки.u - 9. Добавьте на них событие onclick которое запускает функцию func - 9. Функция возращает data атрибут элемента, по которому кликнули.

const u9 = document.querySelectorAll('.u-9');

function func_9() {
    for (let i = 0; i < u9.length; i++) {
        u9[i].onclick = () => {
            console.log(u9[i].getAttribute('data'));
        }
    }
}

func_9();

// TASK 10. Напишите функцию func - 10, которая при клике на кнопке.u -10__button читает атрибут валюты data - currency и на основании этого выводит в p.u -10__out коэффициент данной валюты по отношению к доллару.Коэффициент возьмите приблизительно из интернета.Считается, что пользователь всегда вводит валюту в долларах.

const u10 = document.querySelector('.u-10__out');
const b10 = document.querySelectorAll('.u-10__button');

function func_10() {
    for (let i = 0; i < b10.length; i++) {
        b10[i].onclick = function () {
            u10.innerHTML = b10[i].getAttribute('data');
        }
    }
}

func_10();

// TASK 11.Напишите функцию func - 11, которая при клике на кнопке.u -11__button читает атрибут валюты data - currency и на основании этого выводит в p.u -11__out перевод валюты введенной пользователем в input.u -11__input в указанную валюту.Считается, что пользователь всегда вводит валюту в долларах. 

const u11 = document.querySelector('.u-11__out');
const b11 = document.querySelectorAll('.u-11__button');

function func_11() {
    for (i = 0; i < b11.length; i++) {
        b11[i].onclick = function () {
            let erozDollars = +document.querySelector('.u-11__input').value;
            let currency = this.getAttribute('data-currency');

            switch (currency) {
                case 'euro':
                    ull.innerHTML = Math.round(1.12 * erozDollars);
                    break;
                case 'usd':
                    u11.innerHTML = Math.round(1 * erozDollars);
                    break;
                case 'rub':
                    u11.innerHTML = Math.round(62.34 * erozDollars);
                    break;
            }
        }
    }
}

func_11();

// TASK  12. Создайте функцию func - 12, которая создает через createElement элемент div, присваивает ему класс css - 4 и возвращает данный элемент

const b12 = document.querySelector('.b-12');
const t12 = document.createElement('div');

function func_12() {
    b12.onclick = () => {
        t12.innerHTML = 'Hello, world!';
        t12.classList.add('css-4');
        console.log(t12);
    }
    document.querySelector('.d-12').appendChild(t12);
}

func_12();

// TASK  13.Создайте функцию func - 13, которая создает элемент span.span - 13 с текстом 13 через createElement и вставляет его в p.u - 13(append).

const b13 = document.querySelector('.b-13');
const u13 = document.createElement('span');

function func_13() {
    b13.onclick = () => {
        u13.innerHTML += '13';
        console.log(u13);
    }
    document.querySelector('.u-13').append(u13);
}

func_13();

// TASK  14. Создайте функцию func - 14, которая создает элемент span.span - 14 с текстом 14 через createElement и вставляет его в p.u - 14(prepend).

const b14 = document.querySelector('.b-14');
const u14 = document.createElement('span');

function func_14() {
    b14.onclick = () => {
        u14.innerHTML += '14';
        console.log(u14);
    }
    document.querySelector('.u-14').prepend(u14);
}

func_14();

// TASK 15. Создайте функцию func - 15, которая создает элемент span.span - 15 с текстом 15 через createElement и вставляет его в p.u - 15(before)

const b15 = document.querySelector('.b-15');
const u15 = document.createElement('span');

function func_15() {
    b15.onclick = () => {
        u15.innerHTML += '15';
    }
    document.querySelector('.u-15').before(u15);
}

func_15();

// TASK    16. Создайте функцию funct - 16, которая создает элемент button.u - 16 c текстом Push.Повесьте на данный элемент событие onclick со стрелочной функцией, которая в консоль выводит текст u - 16. И после добавления события добавьте данный элемент на страницу в div.u -16__out.Проверьте работоспособность события.

const btn16 = document.createElement('button');

function func_16() {
    btn16.innerHTML = 'Push';
    btn16.onclick = () => {
        console.log('u-16');
    }
    document.querySelector('.u-16__out').append(btn16);
}

func_16();

// TASK 17. Создайте функцию, funct - 17, которая при запуске создаст элемент p c текстом 17 и заменит этим элементом div.u - 17

const b17 = document.querySelector('.b-17');
const u17 = document.createElement('p');

function func_17() {
    b17.onclick = () => {
        u17.innerHTML = '17';
        console.log(u17);
    }
    document.querySelector('.u-17').replaceWith(u17);
}

func_17();

// TASK 19. C помощью цикла повесьте на div.out - 18 функцию func - 18. Данная функция дожна удалять элемент, на котором произошел клик из DOM.Функция должна возвращать удаленный элемент

const o18 = document.querySelectorAll('.out-18');

function func_18() {
    for (let i = 0; i < o18.length; i++) {
        o18[i].onclick = function () {
            document.body.removeChild(this);
        }
    }
}

func_18();

// TASK   19. Создайте функцию func - 19, которая принимает параметр текст.Создает элемент li, вставляет в него указанный текст, и добавляет на страницу в ul.u - 19 в конец списка.

const i19 = document.querySelector('.i-19');
const b19 = document.querySelector('.b-19');
const u19 = document.createElement('li');

function func_19() {
    b19.onclick = function () {
        u19.innerHTML = i19.value;
    }
    document.querySelector('.u-19').append(u19);
}

func_19();

// TASK 20. Доработайте предыдущее задание.Допишите функцию func - 20 которая может принимать текст от пользователя и вставлять в список ul.u - 20. Также добавьте checkbox - важное, при этом созданный li получает класс.css - 5.

const i20 = document.querySelector('.i-20');
const c20 = document.querySelector('.c-20');
const b20 = document.querySelector('.b-20');
const u20 = document.createElement('li');

function func_20() {
    b20.onclick = function () {
        u20.innerHTML = i20.value;
        if (c20.checked) {
            u20.classList.add('css-5');
        } else if (c20.checked == false) {
            u20.classList.remove('css-5');
        }
    }

    document.querySelector('.u-20').append(u20);
}

func_20();





