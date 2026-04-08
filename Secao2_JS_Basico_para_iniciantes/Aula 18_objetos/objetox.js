

const nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade01 = 25;

const nome02 = 'Maria';
const sobrenome02 = 'Oliveira';
const idade02 = 55;

/*caso necessite criar 1000 pessoas com essas variaveis, compensa mais criar um objeto para criar elas sozinhas*/

console.log('-----------------Quando criamos um array usamos [], quando criamos um objeto usamos {}-------------------------');

const pessoa1 = {
    nome: 'nome',
    sobrenome: "sobrenome",
    idade: "idade"
};

console.log(pessoa1)
console.log(pessoa1.nome, pessoa1.sobrenome)

//----------------------------------------------------Funcao que cria esse objeto-------------------------------------------------
function criaPessoa (nome, sobrenome, idade){ ///nome, sobrenome e idade sao parametros
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa3 = criaPessoa ('Eloa', 'Sauro', 5); // Eloa, sauro e 5 sao argumentos ou seja parametros recebem argumentos
const pessoa4 = criaPessoa ('Eloisa', 'Da silva', 2);
const pessoa5 = criaPessoa ('Evelin', 'Reinisch', 30);
const pessoa6 = criaPessoa ('Dener', 'Melloto', 32);

console.log(pessoa3);
console.log(pessoa4.nome, pessoa4.sobrenome);

console.log(pessoa1, /*pessoa2,*/ pessoa3, pessoa4, pessoa5);

/*---------------Simplificando a funcao acima o javascript ja entende que nome:nome é nome entao nao precisamos escrever novamente
como no codigo acima--------------------------------------------------------------------------------------------------------------*/

function createPerson (personName, lastname, yearsold /* Tem que ser o mesmo nome abaixo senao nao funciona! */){
    return {
        personName,
        lastname,
        yearsold
    };
}
const person1 = createPerson('Evelise', 'Reinisch', 59);
const person2 = createPerson('Antonio', 'Reinisch', 65);
const person3 = createPerson('Marcus', 'Reinisch', 36);

console.log(person1, person2, person3);


//abaixo temos o objeto pessoa1 com um metodo dentro
const pessoa11 = {

nome: 'Luiz',
sobrenome: 'Miranda',
idade:25,

fala() {                                //METODO 'FALA'         //QUANDO UMA FUNCAO ESTA DENTRO DE UM OBJETO. É CHAMADA DE METODO
    console.log(`${this.nome} ${this.sobrenome} esta falando oi...`);    //nesse contexto this referencia este objeto neste contexto!

    
}
};
pessoa11.fala(); 