function Person(name) {
    this.name = name
    this.sayHi = function() {
        console.log(this.name + 'diz oi')
    }
}

function Worker(name, role, salary) {
    this.name = name
    this.role = role
    this.salary = salary
}

const person1 = new Person('Maria')
const worker1 = new Worker('Maria', 'dev front-end', 5000)
person1.sayHi()

console.log(person1)
console.log(worker1)