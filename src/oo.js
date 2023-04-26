//criando uma classe sem a necessidade de criar atributos
class Pokemon {

//criando um construtor que permite criar novos pokemons
    constructor(PokemonName, PokemonType, PokemonPower) {
        this.name = PokemonName
        this.type = PokemonType
        this.power = PokemonPower
    }

//criando um método
    atack(atackName) {
        console.log(`${this.name} atacou com ${atackName}`)
    }
}

//criando um Pikachu a partir de Pokemon
const pikachu = new Pokemon('Pikachu', 'elétrico', '120')
pikachu.atack('choque do trovão')

console.log(pikachu)

//criando uma herança
class Pikachu extends Pokemon {

}

const ashPikachu = new Pikachu('Pikachu', 'elétrico', '135')

console.log(ashPikachu)

//conferindo (true or false) se o ashPikachu é uma instancia de Pikachu / Pokemon
console.log(ashPikachu instanceof Pikachu)
console.log(ashPikachu instanceof Pokemon)