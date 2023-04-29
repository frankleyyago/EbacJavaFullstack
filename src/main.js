//criando um array com o nome e nota dos alunos
const students = [
    {name: 'João', grade: 7.5},
    {name: 'Maria', grade: 5.5},
    {name: 'Pedro', grade: 7.0},
    {name: 'Ana', grade: 9.5},
    {name: 'Joana', grade: 1.5},
    {name: 'Guilherme', grade: 0.0},
    {name: 'Victor', grade: 3.5},
]

//criando uma constante com a nota mínima dos alunos aprovados
const minGrade = 6.0

//criando o filtro de alunos com nota igual ou superior a nota mínima
function studentsFilter(item) {
    return item.grade >= minGrade
}

//criando constante para executar a função filtro
const approvedStudents = students.filter(studentsFilter)

//logando
console.log(approvedStudents)