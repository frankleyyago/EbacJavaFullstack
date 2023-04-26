//criando uma função através de 'arrow function'
const myFunction = () => 'Hello'

const carRetur = () => ({
    model: 'Ka',
    maker: 'Ford'
})

console.log(myFunction())
console.log(carRetur())

const car = {
    currentVelocity: 40,
    accelerate: function() {
        this.currentVelocity += 10
    },
    fry: () => {
        this.currentVelocity -= 10
    }
}