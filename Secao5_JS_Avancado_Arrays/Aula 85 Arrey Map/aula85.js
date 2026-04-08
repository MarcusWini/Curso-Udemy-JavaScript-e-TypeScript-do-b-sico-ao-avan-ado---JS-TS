//MAP 
//*   RECEBE UMA FUNCAO DE CALLBACK
//*   RECEBE OS PARAMETROS DE VALOR, INDICE E ARREY COMPLETO
//*   NAO MUDA O ARREY ORIGINAL, MAS CRIA UM ARREY NOVO
//**  DIFERENTE DO 'FILTER', NO 'MAP', O RETORNO FINAL MUDA OS VALORES DO ARREY
//indice          0  1   2   3  4  5  6  7  8  9   10  11  12 
const numeros = [ 5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
console.log(`Numeros: `);
console.log(numeros);

//Dobre os numeros:
    const numerosEmDobro = numeros.map(valor => valor * 2);
    console.log(`Numeros em dobro: `);
    console.log(numerosEmDobro);


//Objeto
    const pessoas = [
{    nome: 'Luiz', idade: 62},
{    nome: 'Maria', idade: 23},
{    nome: 'Eduardo', idade: 55},
{    nome: 'Letícia', idade: 19},
{    nome: 'Rosana', idade: 32},
{    nome: 'Wallace', idade: 47},
];
console.log(`Objeto Pessoas: `);
console.log(pessoas);
//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa:
const nomes = pessoas.map(obj => obj.nome);
console.log(`Nomes: `);
console.log(nomes);

//Remova apenas a chave 'nome' do Objeto:
// --- Esta é uma forma de fazer, alterando o Arrey Original:
// const semChaveNome = pessoas.map(obj => {
//     delete obj.nome;
//     return obj;
// });

// ---Dessa forma nao altera o arrey e cria um arrey novo somente com idade. 
// ---Assim no proximo exeplo são mantidos no objeto os nomes
const semChaveNome = pessoas.map(obj => ({idade: obj.idade})); 


console.log(`Objeto criado sem chave nome: `);
console.log(semChaveNome);
    
// Adicione uma chave id em cada objeto:
// ------Dessa forma o objeto original é alterado:
// const comChaveId = pessoas.map(function(obj, indice){
//     obj.id = indice;
//     return obj;
// });

const comChaveId = pessoas.map(function(obj, indice){
   const newObj = {...obj};
   newObj.id = indice;
   return newObj;
});
console.log(`Objeto criado com chave id: `);
console.log(comChaveId);

console.log(`Objeto original (pessoas): `);
console.log(pessoas);

