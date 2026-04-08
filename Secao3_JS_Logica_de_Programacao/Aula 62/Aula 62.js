//Escreva um funcao que recebe um numero e 
// retorne o seguinte: 
// Numero é divisivel por 3 = Fizz ok
// Numero é divisivel por 5 = Buzz ok
// Numero é divisivel por 3 e 5 = FizzBuzz ok 
// Numero Nao é divisivel por 3 e 5 = Retorna o proprio numero 
// Checar se o numero é realmente um numero = Retorna o proprio numero 
// Use a funcao com numeros de 0 a 100


function FizzBuzz(numero){
let msg = Number(numero) ;

if( numero == false || numero === undefined || numero ==='' || numero === 0 || typeof numero !== 'number'
){
    msg = 'Numero impróprio: '+numero;

}else if (numero % 5 === 0 && numero % 3 === 0 ){
    msg = 'FizzBuzz';
}else if (numero % 5 ===0){
    msg = 'Buzz';
}else if ( numero % 3 === 0 ){
    msg = 'Fizz'
}else {
    msg = numero;
}

return msg;
}

for (let i=0; i <=100;i++)
{
    console.log(FizzBuzz(i));
}