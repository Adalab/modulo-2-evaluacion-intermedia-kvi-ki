'use strict';

const numberUpdate = document.querySelector('.js-update');
const buttonElement = document.querySelector('.button');
const autoReply = document.querySelector('.js-reply');
const attemptNumber = document.querySelector('.js-attempt');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
const thisNumber = getRandomNumber(100)
console.log(thisNumber);

function putNumber() {
    console.log(numberUpdate.value);

    if (numberUpdate.value > thisNumber) {
        autoReply.innerHTML = `Demasiado alto`;
    }
    if (numberUpdate.value < thisNumber) {
        autoReply.innerHTML = `Demasiado bajo`;
    }
    if (numberUpdate.value == thisNumber) {
        autoReply.innerHTML = `Has ganado campeona!!!`;
    }
    if (numberUpdate.value == "") {
        autoReply.innerHTML = `El número debe estar
        entre 1 y 100`;
    }
    if (numberUpdate.value <= 0 || numberUpdate.value >= 100) {
        autoReply.innerHTML = `El número debe estar
        entre 1 y 100`;
    }
}

buttonElement.addEventListener('click', putNumber);

let calculator = 0;
function calculate() {
    attemptNumber.innerHTML = `Número de intentos: ` + (calculator += 1);
}

buttonElement.addEventListener('click', calculate);


