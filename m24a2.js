//criando um objeto com funções construtoras
function Car(model, maker, modelYear, color) {
    this.model = model
    this.maker = maker
    this.modelYear = modelYear
    this.color = color
    this.speed = function() {
        console.log('100rpm')
    }
}

//criando novos objetos "car" a partir da função construtora
const johnCar = new Car('Fiesta', 'Ford', '2011', 'red')
const mariaCar = new Car('Ka', 'Ford', '2015', 'blue')

//logando as funções no terminal
console.log(johnCar)
console.log(mariaCar)

