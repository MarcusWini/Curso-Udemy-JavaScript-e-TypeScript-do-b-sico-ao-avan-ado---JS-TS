class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;

    }
    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' ja estava ligado');
            return;
        }
        this.ligado = true;
        console.log(this.nome + ' ligado');
    }
    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' ja estava desligado');
            return;
        }
        this.ligado = false;
        console.log(this.nome + ' desligado');
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor) {
        super(nome);
        this.cor = cor;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;

    }
    ligar() {
        console.log('Tablet ligado... (este ligar é somente da classe Tablet e nao se extende a classe pai ou irmã)');
    }
}
const t1 = new Tablet('iPad', true);
const s1 = new Smartphone('Samsung', 'Preto');
const c1 = new DispositivoEletronico('Computador')
s1.ligar();
s1.desligar();
c1.ligar();
t1.ligar();