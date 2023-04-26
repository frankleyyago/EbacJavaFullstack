//criando uma função para somar valores, o problema é que ela não permite somar n valores, neste caso apenas dois valores 'a' e 'b'
function sum1(a, b) {
    return a + b
}

console.log(sum1(20, 50))

//usando a estrutura 'dicionario' para permitir passar n valores
function sum2() {
    console.log(arguments)
}

console.log(sum2(10, 20, 30))

//usando a estrutura 'dicionario' para permitir somar n valores
function sum3() {
    let sum = 0

    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

console.log(sum3(10, 20, 30))

//usando o rest operators como argumento de um função
function sum4(...numbers) {
    const sum = numbers.reduce((total, currentNumber) => {
        total += currentNumber
        return total
    }, 0)
    return sum
}

console.log(sum4(10, 20, 90))

//usando o spread operators para concatenar dois arrays
const spFootballTeam = ['santos', 'palmeiras', 'bragantino', 'são paulo']
const rjFootballTeam = ['vasco', 'botafogo', 'flamengo', 'fluminense']

const footballTeams = [...spFootballTeam, ...rjFootballTeam]

console.log(footballTeams)

//usando o spread operators para alterar apenas alguns atributos de um objeto
const juliaCar = {
    model: 'gol',
    maker: 'volkswager',
    motor: 1.6
}

const anaCar = {
    ...juliaCar,
    motor: 1.8
}

console.log(juliaCar)
console.log(anaCar)

//usando o spread operators para extrair atributos de um objeto [desestruturação]
const {motor: juliaCarMotor} = juliaCar
const {motor: anaCarMotor} = anaCar

console.log(juliaCarMotor)
console.log(anaCarMotor)

//usando o spread operators para extrair atributos de um array [desestruturação]
const [item1, item2, item3, ...otherTeams] = footballTeams

console.log(item1)
console.log(item2)
console.log(item3)
console.log(otherTeams)