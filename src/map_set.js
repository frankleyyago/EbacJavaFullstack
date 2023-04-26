//criando um map
let myMap = new Map()

//adicionando um item no map
myMap.set('name', 'Yago')

console.log(myMap)

//recuperando o valor de uma determinada chave (item)
const name = myMap.get('name')

console.log(name)

//recuperando a quantidade de chaves (itens) dentro do map
console.log(myMap.size)

//verificando se existe determinada chave no map
console.log(myMap.has('name'))

//removendo todas as chaves de um map
myMap.clear()
console.log(myMap.size)

//adicionando itens no map
myMap.set('name', 'Yago')
myMap.set('stack', 'html, css, js')

//recuperando o titulo da chave
for (let myKeys of myMap.keys()) {
    console.log(myKeys)
}

//recuperando o valor da chave
for (let myValues of myMap.values()) {
    console.log(myValues)
}

//recuperando uma entrada
for (let myEntries of myMap.entries()) {
    console.log(myEntries)
}

//recuperando uma entrada com uma formatação melhor
for (let [myKeys, myValues] of myMap.entries()) {
    console.log(`${myKeys}: ${myValues}`)
}

//removendo um item de uma chave
myMap.delete('stack')

console.log(myMap)

// ---------------------------------//

//criando um set... set é diferente de map, pois o map tem uma chave e um valor, o set nao
const cpfs = new Set()

//adicionando valores ao set
cpfs.add('0123456789')
cpfs.add('1123456789')
cpfs.add('2123456789')

console.log(cpfs)

//no set... iterar pelos valores é a mesma coisa que iterar pelas chaves... o retorno é o mesmo
console.log(cpfs.keys())
console.log(cpfs.values())

//usando o foreach no set para extrair os valores
cpfs.forEach((myValues) => {
    console.log(myValues)
})

//criando um array
const myArray = ['Yago', 'Karol', 'Marcos', 'Yago', 'Marcos']

//transformando o array criado acima em um set, pois assim os valores duplicados serão removidos
const myArraySet = new Set([...myArray])

console.log(myArraySet)

//depois de remover os itens duplicados, podemos transformar o set em array novamente
const myNewArray =  [...myArraySet]

console.log(myNewArray)

//arrays usam '[]' enquanto sets usam '{}'