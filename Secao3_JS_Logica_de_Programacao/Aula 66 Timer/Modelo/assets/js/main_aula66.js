function escopoTimer(){

function criaHoraDosSegundos(segundos){
    let data = new Date(segundos * 1000); // transformando milezimos de segundos em segundos    
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,   // Tira o formato AM PM 
        timeZone:'UTC'  // zera a hora para o formato UTC e nao da regiao corrente
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos=0; //cria a variavel que vai armazenar os segundos para uma eventual pausa.
let timer;      //variavel que vai guardadar o timer em si.

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;//contador de segundos a variavel
        relogio.innerHTML = criaHoraDosSegundos(segundos); 
    }, 1000); // 1000 milezimos de segundo ou seja 1 segundo
}


iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');// remove a classe pausado que da a cor vermelha.
    clearInterval(timer); //pausa o cronometro
    iniciaRelogio();//inicia a funcao iniciaRelogio
})

pausar.addEventListener('click', function(event){
    relogio.classList.add('pausado');// adiciona a classe pausado que da a cor vermelha.
    clearInterval(timer);//pausa o cronometro
})
zerar.addEventListener('click', function(event){
    relogio.classList.remove('pausado'); // remove a classe pausado que da a cor vermelha.
    clearInterval(timer);//pausa o cronometro
    relogio.innerHTML = '00:00:00';//zera o cronometro no HTML
    segundos =0;//zera a variavel ou contador de segundos
})

}
escopoTimer(); 