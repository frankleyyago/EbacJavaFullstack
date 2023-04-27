//criando uma classe
class Account {
    accountNumber: number
    balance: number = 0

//criando um construtor
    constructor(accountNumber: number) {
        this.accountNumber = accountNumber
    }
}

//criando uma instância
class salaryAccount extends Account {
    deposit(amount: number) {
        this.balance += amount
    }
}

//criando uma interface
interface Itransation {
    transfer: (amount: number, recipient: Account) => boolean
    transferTax: number
}

//utilizando a interface criada anteriormente para criar outra conta
class CurrentAccount extends Account implements Itransation {
    transfer(amount: number, recipient: Account) {
        recipient.balance += (amount - this.transferTax)
        return true
    }
    transferTax: number = 0
    
}