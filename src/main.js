const students = [
    {name: 'João', grade: '7.5'},
    {name: 'Maria', grade: '5.5'},
    {name: 'Pedro', grade: '7.0'},
    {name: 'Ana', grade: '9.5'},
]

function filterStudents(minGrade, studentsList) {
    const approvedStudents = []

    for (let i = 0; i < studentsList.length; i++) {
        const student = studentsList[i]

        if (student.grade >= minGrade) {
            approvedStudents.push(student)
        }
    }

    return approvedStudents
}

const approvedStudents = filterStudents(6, students)
console.log(approvedStudents)