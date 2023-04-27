type student = {
    name: string;
    courses?: string[];
    age: number;
}

const students: student[] = [
    {
        name: 'Carlos',
        courses: ['Front-end', 'UX/UI'],
        age: 27
    },
    {
        name: 'Renato',
        courses: ['Arquitetura'],
        age: 23
    },
]

students.push({
    name: 'Julia',
    courses: ['Desig'],
    age: 29,
})

const newStudent: student = {
    name: 'Lucas',
    age: 32,
}