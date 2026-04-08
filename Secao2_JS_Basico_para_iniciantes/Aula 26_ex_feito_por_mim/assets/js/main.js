//Referenciar
const pesoDigitado = document.getElementById('peso');
const alturaDigitada = document.getElementById('altura');
const resultadoMostrado = document.getElementById('resultado');
const buttonApertado = document.getElementById('button');
// Chamar o Evento Botao
buttonApertado.addEventListener('click', function () {
//dar valor
    const pesoValor = Number(pesoDigitado.value);
    const alturaValor = Number(alturaDigitada.value);
//Calculo do imc e declaracao da variavel da msg
    const imc = parseFloat((pesoValor / (alturaValor * alturaValor)).toFixed(2));
    let grauDeObesidade = null;
//condicoes
    if (imc < 18.5) {
        grauDeObesidade = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        grauDeObesidade = 'Peso Normal';
    } else if (imc >= 25 && imc <= 29.9) {
        grauDeObesidade = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
        grauDeObesidade = 'Obesidade grau 1';
    } else if (imc >= 35 && imc <= 39.9) {
        grauDeObesidade = 'Obesidade grau 2';
    } else if (imc >= 40) {
        grauDeObesidade = 'Obesidade grau 3';
    } else {
        grauDeObesidade = false;
    }
//mostrar
    if (pesoValor < 1 || pesoValor == null) {
        resultadoMostrado.innerHTML = `<p style="background:rgb(243, 138, 138)";>Resultado: O peso esta errado ou nao digitado</p>`
    } else if (alturaValor < 0.01 || alturaValor == null) {
        resultadoMostrado.innerHTML = `<p style="background:rgb(243, 138, 138)";>Resultado: A altura digitada esta errada ou nao digitada</p>`
    } else if (imc >= 0.1) {
        resultadoMostrado.innerHTML = `<p style="background:rgb(71, 235, 172);">Resultado: O peso digitado é de: ${pesoValor} 
e a altura digitada é de: ${alturaValor}, Resultando em um IMC de ${imc} - ${grauDeObesidade} </p>`;
    } else {
        resultadoMostrado.innerHTML = `<p style="background:rgb(243, 138, 138)";>Resultado: O valor digitado esta errado ou nao digitado</p>`
    }
})