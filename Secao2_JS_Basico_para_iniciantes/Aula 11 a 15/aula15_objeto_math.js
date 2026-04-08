let num1 = 9.54578;
let num2 = Math.floor(num1); // arrendonda pra cima
let num3 = Math.ceil(num1);  // arredonda pra baixo
let num4 = Math.round(num1); //arredonda para o mais proximo
console.log(num1,num2,num3,num4);
console.log(Math.max(1,2,3,4,5,-10,-50,1500, 9,8,7,6)); //como encontrat o numero mais alto
console.log(Math.min(1,2,3,4,5,-10,-50,1500, 9,8,7,6)); //como encontrat o numero mais baixo

const aleatorio1 = Math.round(Math.random() * 100); // numero aleatorio ate 100, incluindo a expressao dentro de match.round arredondamos para um numero inteiro!
console.log(aleatorio1);

const aleatorio2 = Math.random() * (10 - 5 ) + 5; // numero aleatorio entre 10 e 5
console.log(aleatorio2);

console.log(Math.pow(2,10)); //potenciacao
console.log(2 ** 10); // outra forma de fazer potenciacao

let raiz = 9;
console.log(raiz ** 0.5); // calculo matematico para pegar raiz quadrada de um numero, no ex.: 9, resposta 3.