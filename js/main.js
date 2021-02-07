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

let calculator = 0;
function calculate() {
    return `Número de intentos: ` + (calculator += 1);
}

function putNumber(event) {
    console.log(numberUpdate.value);
    event.preventDefault();
    attemptNumber.innerHTML = calculate()
    autoReply.innerHTML = textReply(numberUpdate.value)
}

function textReply(number) {
    if (number <= 0 || number >= 100 || number == "") {
        return `El número debe estar entre 1 y 100`;
    } else if (number > thisNumber) {
        return `Demasiado alto`;
    } else if (number < thisNumber) {
        return `Demasiado bajo`;
    } else {
        return `Has ganado campeona!!!`;
    }
}

buttonElement.addEventListener('click', putNumber);