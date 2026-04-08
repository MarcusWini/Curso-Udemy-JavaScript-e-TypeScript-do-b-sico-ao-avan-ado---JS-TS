

//Seleciona os elementos
const mainContainer = document.querySelector('.container');
const h1ForClassico = document.querySelector('.forClassico');
const h1ForIn = document.querySelector('.forIn');
const h1ForOf = document.querySelector('.forOf');

//Cria as divs
const divForClassico = document.createElement('div');
const divForIn = document.createElement('div');
const divForOf = document.createElement('div');

//alocando as div no body
document.body.appendChild(divForClassico);

divForClassico.innerHTML = `<h2>Estrutura:</h2> <br>for (let i=-90; i<= 200; i += 35)<br> {<br>
console.log(variavel)<br>}<br> <h3>Resultado:</h3>`;
divForClassico.classList.add('container', 'divForClassico');

//-------------------For In-------------------------------
document.body.appendChild(divForIn);
divForIn.innerHTML = `<h2>Estrutura:</h2> <h3>Ex.: Arrey</h3>
const frutas = ['Pera', 'Maçã', 'Uva'];

<br><br><b><i style='font-size:1.5em;'>for</i></b> (let <b>indice</b> <b><i style='font-size:1.5em;'>in</i></b> <b>frutas</b>)<br> {<br>
    console.log(frutas[indice]);
<br>} `;

divForIn.classList.add('container', 'divForIn');

//-------------------For Of-------------------------------
document.body.appendChild(divForOf);
divForOf.textContent = 'Div aqui';
divForOf.classList.add('container','divForOf');

divForClassico.prepend(h1ForClassico);
//mainContainer.appendChild(divForClassico); // se Quizer colocar na section container

divForIn.prepend(h1ForIn);
//mainContainer.appendChild(divForIn); // se Quizer colocar na section container

divForOf.prepend(h1ForOf);
//mainContainer.appendChild(divForOf); // se Quizer colocar na section container

//----------------------------------------FOR Classico
for (let i = -90; i <= 200; i += 35) {
    console.log(`${i}`);
    divForClassico.innerHTML += ` ${i} `;

}

//----------------------------------------FOR IN
// For in -> le os indices ou chaves do objeto
// indice         0       1       2
//Ex.: Arrey
const frutas = ['Pera', 'Maçã', 'Uva'];

for (let indice in frutas) {
    console.log(frutas[indice]);
}

//Ex.: Objeto
const pessoa = [
    { nome: 'Layza', sobrenome: 'Reinisch', idade: 30 },
    { nome: 'Marcus', sobrenome: 'Reinisch', idade: 36 },
    { nome: 'Muller', sobrenome: 'Souza', idade: 37 }
];
for (let chave in pessoa) {

    //Imprimindo o indice inteiro em cada volta do loop
    console.log('Objeto:')
    console.log(pessoa[chave]);
    //Imprimindo separadamente todos os objetos
    console.log('Valores do Objeto, separadamente: ' + chave, pessoa[chave].nome, pessoa[chave].sobrenome, pessoa[chave].idade)
    //Imprimindo somente o indice e o nome
    console.log(`Indice: ${chave} Nome: ${pessoa[chave].nome}`);
    //Imprimindo somente a idade
    console.log(`Idade: ${pessoa[chave].idade} anos`);
}