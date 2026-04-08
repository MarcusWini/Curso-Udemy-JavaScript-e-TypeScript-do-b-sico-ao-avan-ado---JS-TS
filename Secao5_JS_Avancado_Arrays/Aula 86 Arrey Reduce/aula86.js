//Some todos os numeros (reduce);
//Retorne um array com o os pares (filter)
//Retorne um array com o dobro dos valores (map)
//               0  1   2   3  4  5  6  7  8  10  11  12  13
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    console.log(`Soma: ${acumulador} do Valor original: ${valor}`);
    return acumulador;
}, 0);
 console.log(`Total: ${total}`);

 const total2 = numeros.reduce(function(acumulador, valor, indice, array){ 
 if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);

console.log(`Somente os Pares:${total2}}`)

const total3 = numeros.reduce(function(acumulador, valor, indice, array) { 
 acumulador.push(valor * 2);
    return acumulador;
}, []);
console.log(`Dobro dos valores: ${total3}`);

//Retorne a pessoa mais velha 
const pessoas = [
{    nome: 'Luiz', idade: 62},
{    nome: 'Maria', idade: 23},
{    nome: 'Eduardo', idade: 105},
{    nome: 'Letícia', idade: 10},
{    nome: 'Rosana', idade: 64},
{    nome: 'Wallace', idade:63},
];

const maisVelha = pessoas.reduce(function(acumulador, valor, indice, array){
    if (acumulador.idade > valor.idade) return acumulador;
        return valor;
});
console.log(maisVelha);