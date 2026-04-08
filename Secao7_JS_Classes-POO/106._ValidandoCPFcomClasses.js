class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }
    éSequência() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
    gerarNovocpf(){
    const cpfSemDigitos = this.cpfLimpo.slice(0,-2);
    const digito1 = ValidaCPF.geraDigito(cpfSemDigitos); //por ser statico nos mudamos o this para o nome da classe
    const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
    this.novoCPF = cpfSemDigitos +digito1 +digito2;
    
    }
    static geraDigito(cpfSemDigitos){ // como essa funcao nao utiliza em nenhum 
    // momento a palavra this,podemos transforma-la em static
        let total = 0;
        let reverso = cpfSemDigitos.length +1;
        
        for (let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }
        const digito = 11 - (total%11);
        return digito <= 9 ? String(digito): '0';
      
    }
    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.éSequência()) return false;
        this.gerarNovocpf();
        //console.log(this.novoCPF);

        return this.novoCPF === this.cpfLimpo;
    }
}

let validacpf = new ValidaCPF('070.987.720-03'); //070.987.720-03
//validaCpf = new ValidaCPF('999.999.999-99');
//console.log(validacpf.valida());

if (validacpf.valida()) console.log('CPF valido');
else console.log('CPF invalido');