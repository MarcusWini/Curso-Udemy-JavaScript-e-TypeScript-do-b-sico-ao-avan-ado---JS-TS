



// Abaixo esta uma forma de conversao da para number

//let numero = prompt(`Digite um numero:`); // Da entrada em um numero
//numero=Number(numero); //Como o prompt sempre retorna uma String, essa eh a conversao para numero dessa variavel que era String.


const numero = Number(prompt(`Digite um numero:`)); // Prompt retorna sempre uma Srting, nesse caso, estamos ja fazendo a alteracao pra Number
const numeroTitulo = document.getElementById('numero-titulo'); //Resumo: SELECIONA o documento de id='numero-titulo' e salva ele na variavel numeroTitulo
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += ` <p> Seu numero + 2 é ${numero + 2}.</p>`;


texto.innerHTML += `<p> Raiz quadrada: ${numero ** 0.5}. </p>`;
texto.innerHTML += `<p> ${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p> É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p> Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p> Arredondando para cima: ${Math.ceil(numero)}`;
texto.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)}`;

