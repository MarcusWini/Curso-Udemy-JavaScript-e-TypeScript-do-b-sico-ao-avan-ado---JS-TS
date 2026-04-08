//Obejtivo: Colocar o fundo do paragrafo na cor do backgroudn e mudar a cor do texto para branco

//Seleciona a div Paragrafos
const paragrafos = document.querySelector('.paragrafos');
//Selecona todos os 'p' da div paragrafos
//Lembrando que se usar somente query selector, pegaremos somente o primeiro paragrafo e nao todos.
const ps = paragrafos.querySelectorAll('p');
//Pegando os stilos computados do CSS do Body e salvando na variavel(nao funciona no node, somente no Navegador)
const estilosBody = getComputedStyle(document.body);
//Pegando somente o estilo do background do Body e salvando em uma variavel
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);


 for (let p of ps) { //Seleciona o P do PS
    console.log(p);
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
 }