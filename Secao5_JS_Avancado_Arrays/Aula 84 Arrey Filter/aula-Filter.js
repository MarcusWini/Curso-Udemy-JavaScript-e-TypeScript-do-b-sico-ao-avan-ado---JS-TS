//Filter: Filtra o arrey

//retorne os numeros maiores que 10

//indices         0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [ 5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//funcoes de Callback sao funcoes que sao passadas como argumento para outra fguncao
//e que é executada apos a funcao receptora completar sua tarefa.
//Em outras palavras é uma funcao que pe chamada de volta (ai o nome de callback) em um momento posterior.
//----Funcao reduzida e plantada em arrow function dentro o filter----------------------------------------
//  function callbackFilter(valor){ //esta funcao vai iterar(passar por cada numero do arrey)
//    if (valor > 10){
//        return true;
//    }
//    else {
//        return false;
//    }   
//   }
//---------------------------------------------------------------------------------------------------------

// a funcao filter requer que retorne um boolean
//true para os valores que queremos que sejam imbutidos no arrey
//false para os que nao queremos
const numerosFiltrados = numeros.filter(valor => valor > 10); 
//nao usamos callbackFilter(), porque nao queremos executar a funcao, 
// mas sim que o filter passepor toda ela.
console.log(numerosFiltrados);


//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------


const pessoas = [
{    nome: 'Luiz', idade: 62},
{    nome: 'Maria', idade: 23},
{    nome: 'Eduardo', idade: 55},
{    nome: 'Letícia', idade: 19},
{    nome: 'Rosana', idade: 32},
{    nome: 'Wallace', idade: 47},
];
console.log(`Pessoas: `);
console.log(pessoas);


//Retorne as pessoas que tem o nome com 7 letras ou mais
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 7);
console.log(`Pessoas com nome grande: (7 letras ou mais)`);
console.log(pessoasComNomeGrande);

//Retorne as pessoas com mais de 50 anos 
const pessoaComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
console.log(`Pessoas com mais de 50 anos: `);
console.log(pessoaComMaisDeCinquentaAnos);
//Retorne as pessoas cujo nome termina com a 
const pessoasComNomeQueTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log('Pessoas com nome que termina com a: ');
console.log(pessoasComNomeQueTerminaComA);


