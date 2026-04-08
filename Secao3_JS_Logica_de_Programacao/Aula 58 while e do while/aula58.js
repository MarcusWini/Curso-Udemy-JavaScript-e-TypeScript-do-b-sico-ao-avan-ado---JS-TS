// CRIANDO UMA FUNCAO RANDOMICA

function random (min, max) {
    const r = Math.random( ) * ( max - min) +min; // funcao randomica

    return Math.floor(r); //transforma o numero aleatorio em inteiro
}


const min = 1;
const max = 50;
let rand = random(min,max);


//DIFERENCA DE "WHILE" PARA "DO WHILE", WHILE CHECKA A CONDICAO E DEPOIS EXECUTA O CODIGO
//OU SEJA, ENQUANTO VC NAO ATINGIR ESSA CONDICAO FACA ALGUMA COISA
while (rand !== 10) {
    rand = random(min,max);
    console.log(rand);  
}
console.log('##############')
//DO WHILE VAI EXECUTAR O CODIGO PRIMEIRO E DEPOIS CHECKAR A CONDICAO
//OU SEJA, FAÇA ALGUMA COISA ATÉ ALCANCAR A CONDICAO
do{
    rand = random(min, max);
    console.log(rand);
} while (rand !==10);