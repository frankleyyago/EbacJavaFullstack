//criando um função tipada do tipo number
function calculateArea(base: number, height: number): number {
    return base * height
}

//criando uma arrow function tipada do tipo number
const calculateArea2 = (base: number, height: number,): number => base * height

//criando uma arrow function tipada do tipo number com rest
function sum(...numbers: number[]): void {
    console.log(numbers)
}

//tipando o retorno de uma função
function test(): string | number {
    if (10 > 5) {
        return 'dez maior que cinco'
    } else {
        return 5
    }
}