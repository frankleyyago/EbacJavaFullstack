//criando uma constante e atribuindo vários valores ao array
const socialMedia = ['Facebook', 'Twitter', 'Instagram']

for (let i = 0; i < socialMedia.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${socialMedia[i]}`)
}

//maneira equivalente de fazer um laço de repetição for
socialMedia.forEach(function(socialMediaName, index) {
    console.log(`#${index} Eu tenho perfil na rede social: ${socialMediaName}`)
})

const students = ['Gustavo', 'Julia', 'Paula', 'Wagner']

const students2 = students.map(function(currentItem) {
    return {
        name: currentItem,
        course: "Frontend"
    }
})

console.log(students2)

//trás as informaçoes de paula
const paula = students2.find(function(item) {
    return item.name == 'Paula'
})

console.log(paula)

//indica em qual indice do array paula esta
const paulaIndex = students2.findIndex(function(item) {
    return item.name == 'Paula'
})

console.log(paulaIndex)

//adicionando mais um aluno ao array
students2.push({
    name: 'Lucio',
    course: 'Backend',
})

//verificando se todos os alunos fazem parte do 'course Frontend'
const frontendStudents = students2.every(function(item) {
    return item.course === 'Frontend'
})

console.log(frontendStudents)

//verificando se algum aluno faz parte do 'course Backend'
const backendStudents = students2.some(function(item) {
    return item.course === 'Backend'
})

console.log(backendStudents)

//verificando se algum aluno faz parte do 'course Backend' e 'course Frontend'
const fullstackStudents = students2.some(function(item) {
    return item.course === 'Backend' && item.course === 'Frontend'
})

console.log(fullstackStudents)

//filtra e exibe apenas os alunos do 'course Backend'
const backendStudents2 = students2.filter(function(item) {
    return item.course === 'Backend'
})

console.log(backendStudents2)

//fazendo a mesma coisa que o codigo acima, mas desta vez criando uma função e passando ela como parametro
function filterBackendStudents(student) {
    return student.course === 'Backend'
}

//--------aula de arrow function----------//
//fazendo a mesma coisa que o codigo acima, mas desta vez usando 'arrow function'
// const filterBackendStudents = student => student.course === 'Backend'
//----------------------------------------//

const backendStudents3 = students2.filter(filterBackendStudents)

console.log(backendStudents3)

//reduce é utilizado para fazer a agregação de valores
const nums = [10, 20, 30, 40]

const sum = nums.reduce(function(accumulator, currentItem) {
    accumulator += currentItem
    return accumulator
}, 0)

console.log(sum)

//utilizando o reduce com strings
const studentsName = students2.reduce(function(accumulator, currentItem) {
    accumulator += `${currentItem.name} `
    return accumulator
}, '')

console.log(studentsName)