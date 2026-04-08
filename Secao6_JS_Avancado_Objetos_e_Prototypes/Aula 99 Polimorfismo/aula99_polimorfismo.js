//Superclass, ou classe mae
//Funcao Construtora => molde (classe)
/*OBS O POLIMORFISMO OCORRE QUANDO NOS FAZEMOS UM METODO SE COMPORTAR DE MANEIRA DIFERENTE EM
CLASSES FILHAS, COMO POR EXEMPLO
*/
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor) { //se o saldo for menor que o valor Retorna o Saldo e para(por ter return)
        console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
        return;
    }
    this.saldo -= valor; // como o saldo foi maior ou igual ao valor, subtraimos o valor e salvamos o resultado em valor
    this.verSaldo();
};

Conta.prototype.depositar = function(valor){
   
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function(){
    console.log(`Agencia/Conta: ${this.agencia}/${this.conta} Saldo: R$${this.saldo.toFixed(2)}`);
};

//--------SOBRESCREVENDO O METODO SACAR NA CONTA FILHA (CONTA CORRENTE)------------------
function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype); //linkando os prototypes
ContaCorrente.prototype.constructor = ContaCorrente;



ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)) { //se o saldo for menor que o valor Retorna o Saldo e para(por ter return)
        console.log(`*****Saldo insuficiente*****: R$ ${this.saldo}`);
        return;
    }
    this.saldo -= valor; // como o saldo foi maior ou igual ao valor, subtraimos o valor e salvamos o resultado em valor
    this.verSaldo();
};

//-----------------------------------------------------------------------------
function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype); //linkando os prototypes
ContaPoupanca.prototype.constructor = ContaPoupanca;

ContaPoupanca.prototype.sacar = function(valor){
    if(valor > (this.saldo)) { //se o saldo for menor que o valor Retorna o Saldo e para(por ter return)
        console.log(`*****Saldo insuficiente*****: R$ ${this.saldo}`);
        return;
    }
    this.saldo -= valor; // como o saldo foi maior ou igual ao valor, subtraimos o valor e salvamos o resultado em valor
    this.verSaldo();
}


const cp = new ContaPoupanca(2201, 100194, 0);
let dep=20, saqp1=16, saqp2=5;
console.log('Valor do limite: R$' + cp.limite);
console.log('Valor do saldo: R$' + cp.saldo);
console.log("Deposito: R$"+dep);
cp.depositar(dep);
console.log("Saque: R$"+saqp1);
cp.sacar(saqp1);
console.log('Valor do saldo: R$' + cp.saldo);
console.log("Saque: R$"+saqp2);
cp.sacar(saqp2);

console.log('----------------------------------------------------------');

const cc = new ContaCorrente(2201, 100194, 0, 150);

console.log('Valor do limite: R$' + cc.limite);
console.log('Valor do saldo: R$' + cc.saldo);
console.log("Deposito:");
cc.depositar(10);
console.log("Saque:");
cc.sacar(160);
console.log('Valor do saldo: R$' + cc.saldo);
cc.sacar(1);
console.log('Valor do saldo: R$' + cc.saldo);