//Protegemos a velocidade com o Symbol de qualquer outra alteracao feita por qualquer outro dev
const _velocidade = Symbol('velocidade'); //Cria uma chave privada dentro do Objeto, ele gera um ID aleatorio
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0; //por causa do symbol, retira-se o ponto e substitui por chaves
    }
    set velocidade(valor) {//Checar para validar o valor do get
        console.log('Estou usando o SETTER');
        if (typeof valor !== 'number') return; //se nao for um numero, trava no return e nao passa
        if (valor >= 100 || valor <= 0) return;//se nao for um valor entre 0 e 100, trava e retorna
        this[_velocidade] = valor;//no caso de nao retornar em nenhum dos outro casos, vai setar o valor
    }

    get velocidade()   { //Acessando de fora do objeto
        console.log('Estou usando o Getter');
        return this[_velocidade];
    } 
    acelerar() {
        if (this[_velocidade]  >= 100) return;
        this[_velocidade]++;
    }
    freiar() {
        if (this[_velocidade]  <= 0) return;
        this[_velocidade]--;

    }
}

const c1 = new Carro('Fusca');

// for (let i = 0; i <= 200; i++) {
//     c1.acelerar();
// }

c1.velocidade = 55; //Quando atribuimos um valor, usamos o Setter
console.log(c1.velocidade); //Quando consultamos os valores, usamos o Getter