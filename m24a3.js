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

//o comando 'typeof' extrai o tipo de dado dos elementos da função
console.log(typeof name)
console.log(typeof age)
console.log(typeof male)
console.log(typeof skill)
console.log(typeof person)
console.log(typeof mariaCar)

//o comando 'instanceof' verifica se um objeto é instância de outro objeto
console.log(mariaCar instanceof Car)
console.log(skill instanceof Array)