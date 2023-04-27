//criando uma classe
class Person {
    name: string
    salary?: number

    //criando um construtor
    constructor(name: string, salary?: number) {
        this.name = name
        this.salary = salary
    }

    sayHello(): string {
        return `${this.name} disse oi`
    }
}