"use strict";
//criando um função tipada do tipo number
function calculateArea(base, height) {
    return base * height;
}
//criando uma arrow function tipada do tipo number
const calculateArea2 = (base, height) => base * height;
//criando uma arrow function tipada do tipo number com rest
function sum(...numbers) {
    console.log(numbers);
}
//tipando o retorno de uma função
function test() {
    if (10 > 5) {
        return 'dez maior que cinco';
    }
    else {
        return 5;
    }
}
