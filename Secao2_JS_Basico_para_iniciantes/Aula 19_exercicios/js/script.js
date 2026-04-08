//Objetivo do exercicio: Criar objetos com os dados apontados. 
// Dentro do Array

//quando apertamos no botao enviar, ele faz o evento de atualizar
//a pagina

//passo 1.0 de 1.1, cria a funcao pra tirar do escopo global
function meuEscopo() {
    //2 passo, selecionar o form pela classe form
    const form = document.querySelector('.form'); //seleciona o form     
    // 5 passo, cria a div do resultado (HTML) e seleciona ela (JS)
    const resultado = document.querySelector('.resultado'); //seleciona a div resultado

    //Passo 6, Criar um array que vai ser preenchido pelo envio do form
    const pessoas = [];
    //3.0 de 3.2 passo, funcao criado para receber evento form
    function recebeEventoForm(evento) {
        //3.1 passo, metodo que previne o evento de atualizar a pagina
        evento.preventDefault();

        //4 passo, abaixo queremos selecionar um input que esta dentro do form
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //passo 7 Adicionando os dados no array
        pessoas.push( // push adiciona um elemento no array
            //neste caso estamos colocando um objeto direto dentro do array
            //sendo 1 objeto por indice
            {
                nome: nome.value,
                sobrenome: sobrenome.value,
                peso: peso.value,
                altura: altura.value
            });

        console.log(pessoas);
        //somente para ver o resultado se esta correto

        //passo 8 Adicionando paragrafo em HTML na div resultado: 
        // (+= é necessario para poder criar novos elementos, 
        // e for só = vai ficar mudando o resultado do mesmo elemento)
        resultado.innerHTML += `<p>Nome: ${nome.value}, Sobrenome: ${sobrenome.value}, Peso: ${peso.value} e Altura: ${altura.value}</p> `

    }
        //3.2 Explicacao abaixo
        form.addEventListener('submit', recebeEventoForm);
        //Adiciona um escutador de eventos no meu form (isto é um metodo)
        //dentro do parenteses o metodo a ser escutado, no caso submit
        //recebe uma funcao podendo ser uma funcao anonima ex.: funcation()
        //ou uma funcao separada que no exemplo é a funcao recebeEventoForm
        //evento esse que sera criado em cima desse metodo


    
}
meuEscopo();
//passo 1.1, executa a funcao meuEscopo
