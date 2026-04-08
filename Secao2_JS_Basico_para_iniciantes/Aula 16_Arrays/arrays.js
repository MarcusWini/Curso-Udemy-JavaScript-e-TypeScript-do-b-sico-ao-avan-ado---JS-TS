// arrays sao como uma colecao de dados dentro de uma variavel
const array_Errado = ['Luiz' , 'Maria', 'joao', 1 , true, null];
console.log('forma errada: '+array_Errado);
// por convencao nao usamos dados diferentes dentro do array, somente dados do mesmo tipo, ex.: string

//               0        1         2      os indices no array sao por elemento, nao por caracter igual na string
const alunos = ['Luiz' , 'Maria', 'joao'];
alunos[0] = 'Eduardo'; // alterando o luiz para o eduardo
alunos[3] = 'Luiza'; // incluindo mais um elementro "luiza" no array

//abaixo temos uma forma de incluir mais elementos no fim do array
alunos[alunos.length] = 'Fabio';
alunos[alunos.length] = 'Luana';


console.log('Forma correta: '+alunos);

//funcao que adiciona ao final mais um elemento no array de forma mais simples

alunos.push('Eloisa');
alunos.push('Eloa');

console.log(alunos);

alunos.unshift('Evelin'); // adiciona no COMECO do array
alunos.unshift('Dener');

console.log(alunos);

const removido2 = alunos.pop();

const removido = alunos.shift();
delete alunos[3]; // removido o aluno do espaço 4 e fica como 'item vazio'

console.log(alunos);
console.log('Removido do começo: '+removido);
console.log('Removido do Fim: '+removido2);


console.log('Alunos Fatiados do array: '+alunos.slice(0, 2));

//---------------------------------------------------------------------------------------------
//aula de desestruturacao de array - Aula 50

//indice           1     2    3     4      5    6     7     8     9
console.log("-----------------Atribuição por Desestruturacao de arrays- Aula 50------------------------")
const numeros = [1000, 2000, 3000, 4000, 5000, 6000 ,7000 ,8000 ,9000];
const [um, dois, , , cinco, ...resto] = numeros;


console.log('A declaracao pega sempre os primeiros numeros, caso nao colocar mais numero eles somente ficam sobrando.\n Segue numeros: '+um, dois);
console.log(cinco);
console.log('Os "..." servem para voce pegar o resto dos numeros do array, ex.:'+resto);

//Como podemos ver temos 3 arrays com outro array de 3 numeros dentro:
//indice            0           1          2           - Array 1
//                0  1  2    0  1  2    0  1  2        - Posicao nos arrays dentro do array 1
const atrDest = [[1, 2, 3], [4, 5, 6], [7, 8, 9 ]];

console.log('Array: '+ atrDest +'\nSelecionando o array 1: '+ atrDest[1] + "\nSelecionando o numero do array 1, posicao 2: "+atrDest[1][2]);

//---------------------------------------------------------------------
const [,,[,oito]] = atrDest;
console.log('Outra forma de selecionar, pegando a posicao 1 do array 2 : '+oito );
//---------------------------------------------------------------------
//metodo mais usado é criando "listas"
const [lista1, lista2, lista3] = atrDest;
console.log('Selecionando por lista o numero da posicao 2 do array "2" ou lista 3): '+lista3[2]);