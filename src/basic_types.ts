//declarando uma variavel do tipo boleana
let itsRaining: boolean = false

//declarando uma variavel do tipo number
let idade: number = 25

//declarando uma variavel do tipo string
let nationality: string = 'brasileira'

//criando um array do tipo string
const names: string[] = ['lucas', 'fernanda', 'marcos']

//outra forma de criar array
const numbers: Array<number> = [1, 2, 3, 4, 5]

//criado um array de leitura (nao permite usar o push, ou seja, adicionar novos itens)
const grades: ReadonlyArray<number> = [7, 3, 9, 2]

//criando um array com mais de um tipo de dado
const list: [name: string, studying: boolean, age: number] = ['Yago', true, 25]

//criando um array com dois tipos de dado usando o '|'
let marcosAge: number | string = 25
marcosAge = 'vinte e cinco anos'

//criando uma variavel usando o any, que permite qualquer tipo de dado [nao deve ser usado demais]
let apiData: any
apiData = 10
apiData = true
apiData = [1, 2, 3]
apiData = 'string'

//quando não se explicita o tipo de dado, o typescript reconhece que o valor atual da variavel é o tipo de dado