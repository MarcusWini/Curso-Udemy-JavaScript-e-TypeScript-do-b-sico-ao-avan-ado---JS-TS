
//      String

// Aspas invertidas

let barraInvetida = "A barra invertida (\) pode fazer escapar um caracter, tecnica usada para colocar as \"aspas\" na string "

console.log(barraInvetida);

//Como selecionar uma letra dentro da String

//                01234567
let umaString = "Um texto"

console.log('Separando uma letras especifica da 5 posicao: ' + umaString[4]); //Resposta: e
console.log('Separando uma letras especifica da 2 posicao: ' +umaString.charAt(1)); // Resposta:m, diferere da primeira que nao da erro se for uma posicao fora da String ex.:9


//Concatenando
console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');   
console.log(`${umaString} em um lindo dia.`);          //template Strings, mais usual e atual

//Buscando informações no seu texto
console.log('indexof: ' +umaString.indexOf('texto')); // aqui buscamos a palavra texto dentro da frase    /...resposta: 3
console.log('lastindexof: ' + umaString.lastIndexOf('o')); // do fim pro inicio.                               /...Resposta: 7

//EXPRESSOES REGULARES --------------EXEMPLO (------CONTEUDO EXTENSO------)
console.log('Expressoes regulares: ' + umaString.match(/[a-z]/g));


//substituindo palavras
let rep = 'O rato roeu a roupa do rei de roma.';
console.log('Susbstituindo um por outra: ' + umaString.replace('Um', 'outra'));
console.log('Substituindo todos os r por #: '+rep.replace(/r/g, '#'));


//diz o tamanho da String
console.log('Qual a quantidade de carascteres da string? '+rep.length);

//fatiando o texto, neste exemplo retiramos o 'rato'
console.log(rep.slice(2, 6)); 
console.log(rep.slice(-5, -1));//se colocar negativo ele pega de traz pra frente, nesse exemplo pegamos somente o roma

//divindo uma string com um determinado caracter, ex.: escolheremos o espaço.
console.log(rep.split(' ', 3)); //apos a virgula, limitamos a quantidade de vezes que queremos realizar a operacao.
console.log(rep.split('r'));

// tudo em maiusculo
console.log(rep.toUpperCase());
// tudo minusculo
console.log(rep.toLowerCase());



