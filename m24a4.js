//criando várias constantes
const name = 'John'
const age = 20
const male = true
const skill = ['html', 'css', 'javascript']

//utilizando as funções criadas anteriormente
const person = {
    name: name,
    age: age,
    male: male,
    skill: skill,
}

//acessando o conteudo do atributo 'name' da funcao 'person'
console.log(person.name)
console.log(person['name'])

//outra maneira de fazer isso mas desta vez com o uso de uma função
function showAttribute(attributeName) {
    console.log(person[attributeName])
}

showAttribute('age')

//atribuindo um novo atributo em um objeto
person.username = 'goku'

//outra maneira de atribuir um atribuito a um objeto
person['nationality'] = 'brazil'

//verificando se um atributo tem determinado elemento 
if (person['username']) {
    console.log('theres a username')
}

//congelando um objeto para que os valores não sejam alterados posteriormente
Object.freeze(person)

//colocando todos os atributos de um objeto em um array
console.log(Object.keys(person))

//extraindo a quantidade de atributos desse objeto
console.log(Object.keys(person).length)

//extraindo os valores de um objeto para um array
console.log(Object.values(person))
