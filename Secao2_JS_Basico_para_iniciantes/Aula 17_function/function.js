//BASICAMENTE A FUNCAO RECEBE UM VALOR, PODE EXECUTAR UMA ACAO, PODE OU NAO RETORNAR UM VALOR.

//----------------------------------------Funcao classica------------------------------------------------------------------------

function saudacao(nome){
    console.log(`Bom dia  ${nome}!`);
    return
}

saudacao(); // executa a funcao, como nao tem nada de valor, sera undefined"
saudacao('Maria');//executa a funcao com o parametro "nome"

function saudacao2(nome2){
    return `Boa tarde ${nome2}!`
}

const variavel = saudacao2(['Luiz', ' Maria', ' Jose']); //executa a variavel de arrey
console.log(variavel);


function soma(x, y){
    const resultado = x + y;
    return resultado; //tudo que esta abaixo de return nao sera executado
}

console.log(soma(2,5));

 //---------------------------------------Outra forma, Um funcao dentro de uma funcao (funcao anonima)------------------------
 
 console.log('-------------------------------------------Funcao anonima-----------------------------------------------------------------------');

 const raiz = function(n){
    return n**0.5;
 };

 console.log(raiz(9));
 console.log(raiz(16)); 
 console.log(raiz(25));

 
 console.log('--------------------------------------------Arrow function-----------------------------------------------------------------------');
 /*
 const raiz = function(n){
    return n**0.5;
 };
 ------
 'function' substituo por '=>' no fim da funcao
 */
 const raiz2 = (n) =>{
    return n**0.5;
 };
 console.log(raiz(9));
 console.log(raiz(16)); 
 console.log(raiz(25));

 console.log('--------------------------------------------Arrow function simplificada-----------------------------------------------------');

 const raiz3 = (n) => n **0.5; //retiramos a palavra function(por se tratar de uma function arrow), o return e as chaves!
 
 console.log(raiz(9));
 console.log(raiz(16)); 
 console.log(raiz(25));
  


