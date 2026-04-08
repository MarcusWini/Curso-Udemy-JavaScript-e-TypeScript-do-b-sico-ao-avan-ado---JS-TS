class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    aumentarVolume(){ // metodo de instancia
        this.volume +=2 ; //igual>>  (this.volume = this.volume +2;)
    }
    diminuirVolume(){ // metodo de instancia
        this.volume -=2;
    }

//Os metodos estaticos sao referentes somente a classe, nao as instancias da classe
//Metodo estatico
static trocaPilha(){
console.log('Trocando pilha...');

}}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume(); //+2 =2
controle1.aumentarVolume(); //+2 =4   
controle1.aumentarVolume(); //+2 =6
controle1.diminuirVolume(); //-2 =4
console.log(controle1.volume);

//tentando acessar pela instancia
// (erro) controle1.trocaPilha();

//So acessa pela classe:
ControleRemoto.trocaPilha();