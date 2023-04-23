//crie uma classe de uma abstração
function ClasseAbstracao(nome) {
    this.nome = nome
}

//crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente
function ClasseHerdeira1(nome, cargo, salario) {
    this.cargo = cargo
    this.salario = salario

    ClasseAbstracao.call(this, nome)
}

function ClasseHerdeira2(nome, telefone, email) {
    this.telefone = telefone
    this.email = email

    ClasseAbstracao.call(this, nome)
}

//crie pelo meno três instâncias de objeto
const instancia1 = new ClasseHerdeira1('Marcos', 'Padeiro', 'R$4000')
const instancia2 = new ClasseHerdeira2('Marcela', '(31) 1234-4567', 'marcela2023@gmail.com')

const instancia3 = new ClasseHerdeira1('Renato', 'Pintor', 'R$4500')
const instancia4 = new ClasseHerdeira2('Guilherme', '(21) 1234-4567', 'guilherme2023@gmail.com')

const instancia5 = new ClasseHerdeira1('Maria', 'Professora', 'R$5500')
const instancia6 = new ClasseHerdeira2('Joao', '(31) 1234-4567', 'joaozinho@outlook.com')

// logando
console.log(instancia1)
console.log(instancia2)
console.log(instancia3)
console.log(instancia4)
console.log(instancia5)
console.log(instancia6)