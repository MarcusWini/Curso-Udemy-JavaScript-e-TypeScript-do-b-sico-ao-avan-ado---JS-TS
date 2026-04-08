//Exemplo de criacao de classe (molde)
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    //Quando é Funcao Construtora tem que colocar o metodo falar dentro do prototype
    //Ja na classe, nao precisa.
    falar() {
        console.log(`${this.nome} está falando.`);
    }

}
const p1 = new Pessoa('Luiz', 'Otávio');

p1.falar();

//Comparacao com uma constructor function
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}   
//Quando é Funcao Construtora tem que colocar o metodo falar dentro do prototype
Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`);
}


const p2 = new Pessoa2('Marcus', 'Reinisch');
p2.falar();