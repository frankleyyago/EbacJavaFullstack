"use strict";
//criando uma classe
class Person {
    //criando um construtor
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    sayHello() {
        return `${this.name} disse oi`;
    }
}
