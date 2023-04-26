//criando um função muito pesada
function heavyFunction() {
    let run = 0
    for (let i = 0; i < 1000000000; i++) {
        run++
    }
    return run
}

//com o 'promise' é possível alterar a sequencia em que o codigo é executado, o codigo mais pesado não impede a execução dos outros
const heavyFunctionPromise = new Promise((resolve, reject) => {
    try {
        let run = 0
        for (let i = 0; i < 1000000000; i++) {
        run++
    }
    resolve (run)
    } catch(e) {
        reject('Deu ruim')
    }
})

console.log('beggin')
// console.log(heavyFunction)
heavyFunctionPromise.then(result => console.log(result)).catch(erro => console.log(erro))
console.log('end')