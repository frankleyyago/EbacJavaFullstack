//utilizando o namespacing para permitir usar o mesmo nome de variavel em diferentes arquivos
namespace casting {
    //declara a variavel
}

//criando uma variavel sem tipagem especifica e na sequencia considerando ela como um numero para acessar determinadas propriedades do tipo de dado
let age2: any = 25;
(age2 as number).toFixed();

let name2: any = 25;
(name2 as string).length;