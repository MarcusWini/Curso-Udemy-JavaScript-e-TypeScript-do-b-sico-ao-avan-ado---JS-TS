function Calculadora(){
    //Seleciona o input
    this.display = document.querySelector('.display');
    
    //funcao que captura os incia a calculadora
    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    }
    this.capturaEnter = () => {
        //captura o elemento de soltar a tecla
        document.addEventListener('keyup', event => {
            //se o evento nao receber a tecla 'Enter' retorne
            if (event.key !== 'Enter') return; //Se a tecla que foi solta não for 'Enter', 
            // entao saia imediatamente deste funcao de callback. (é o que significa esse return)
            
            this.realizaConta(); // Como a tecla 'Enter' foi digitada entao (isto) realiza a conta.
        
        }) 
    };
    //funcao que captura os cliques nos botoes
    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            // adiciona a variavel 'el', o valor do alvo (target) do evento (event) click
            const el = event.target; 
            //se o el(elemento) clicado conter a classe selecionada, esta(this) realiza o funcao adiante
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);   //classe num
            if (el.classList.contains('btn-clear')) this.clear();           //classe clear
            if (el.classList.contains('btn-del')) this.del(el);             //classe del
            if (el.classList.contains('btn-eq')) this.realizaConta(el);     //classe eq
            
        });
    };
    //funcao que realiza conta--------------------------------------------------
    this.realizaConta = () => {
        // try/catch com mensagens de erro para 
        // caso o usuario digite algo que nao seja compativel com contas
        try{
            //realiza conta
            const conta = eval(this.display.value); //cuidado! eval traz um risco muito grande ao codigo, pois 
            // eval da a oportunidade do usuario digitar em javascript no seu input (neste caso)
            //se for NaN
            if(!conta && conta!=0){
                alert('Conta invalida');
                return;
            }
            this.display.value = conta;
        }
        catch(e){ // 'e' por convencao é o erro a ser capturado, tambem usa-se 'err'
            alert('Conta invalida');
            return;
        }
    } // -----------------------------------------------------------------------
    //funcao que adiciona os numeros no display (input)
    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus(); // Sem esta linha se vc apertar enter com o mouse em cima de um botao, 
        // o botao é pressionado pela tecla enter. Esta funcao volta o foco para o display
    };
    //funcao que limpa o display (input)
    this.clear = () => this.display.value = '';
    //funcao que deleta o ultimo 1 numero
    this.del = el => this.display.value = this.display.value.slice(0,-1)
}

const calculadora = new Calculadora();
calculadora.inicia();