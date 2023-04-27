"use strict";
//criando uma classe
class Account {
    //criando um construtor
    constructor(accountNumber) {
        this.balance = 0;
        this.accountNumber = accountNumber;
    }
}
//criando uma instância
class salaryAccount extends Account {
    deposit(amount) {
        this.balance += amount;
    }
}
//utilizando a interface criada anteriormente para criar outra conta
class CurrentAccount extends Account {
    constructor() {
        super(...arguments);
        this.transferTax = 0;
    }
    transfer(amount, recipient) {
        recipient.balance += (amount - this.transferTax);
        return true;
    }
}
