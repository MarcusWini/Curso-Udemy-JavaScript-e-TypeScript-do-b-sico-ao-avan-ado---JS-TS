//IEEE 754-2008

let num1 = 1; //number
let num2 = 2.5; // number
let num3 = 35.4531351;

console.log(num1.toString() + num2); //tranforma temporariamente em string. mas o valor de num1 continua NUMBER

num1 = num1.toString(); // transforma permanentemente em string

console.log(num3.toString(2)); // transforma em binario

console.log(num3.toFixed(2)); // coloca 2 casas decimais

console.log(Number.isInteger(num1)); // diz se eh inteiro: verdeiro ou falso 

let temp = num1 * 'Ola'; //retorna not a number (NaN)
console.log(Number.isNaN(temp)); // diz se eh um NaN: verdadeiro ou falso


let num4 = 0.7; // number
let num5 = 0.1; // number

num4 += num5; // 0.8                Sabemos que é igual a num4 = num4 + num5;
num4 += num5; // 0.9
num4 += num5; // 1.0

//a conta acima dara 0.999999999...
//por isso pra poder transformar o numero em numero inteiro segue a seguinte funcao abaixo:
num4 = parseFloat(num4.toFixed(2));

console.log(num4);
console.log(Number.isInteger(num4)); //verificando se eh verdadeiro para numero inteiro