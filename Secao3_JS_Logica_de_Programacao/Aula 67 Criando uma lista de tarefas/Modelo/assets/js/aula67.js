const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value); 
    }
})
function limpaInput(){ //Volta o valor do input para "Em branco"
    inputTarefa.value = '';
    inputTarefa.focus(); // cursor fica piscando quando vc clica no input
}
function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput){
    const li = criaLi(); //este li é desta funcao,
    
    // entao nao tem valor em outra funcao ou fora, no escopo global
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
   
});

document.addEventListener('click', function(e) {  
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); //funcao trim remove os espacos sobrando nas beiradas
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas); //transformando o Arrey em uma string
    localStorage.setItem('tarefas', tarefasJSON); //so salva em strings
}

//funcao que le as tarefas e joga devolta na UL
function adicionaTarefasSalvas(){
const tarefas = localStorage.getItem('tarefas');
const listaDeTarefas = JSON.parse(tarefas); //convertendo as tarefas devolta para um arrey

for (let tarefa of listaDeTarefas){
    criaTarefa(tarefa);
}
}
adicionaTarefasSalvas();