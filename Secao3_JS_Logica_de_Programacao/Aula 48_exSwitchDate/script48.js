// Primeira Resposta
//---------------------------------------Variaveis-------------------------------------------
const data = new Date();
const diaSemana = data.getDay();
const diaMes = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hours = data.getHours();
const minutes = data.getMinutes();

let diaSemanaTexto;


//----------------------------funcao para pegar o dia da semana------------------------------
function getDiaSemana(diaSemana) {

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            break;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            break;
        case 2:
            diaSemanaTexto = 'Terca-feira';
            break;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            break;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            break;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            break;
        case 6:
            diaSemanaTexto = 'Sabado';
            break;
        default:
            diaSemanaTexto = 'Dia da semana invalido';
    }
    return diaSemanaTexto;
}
getDiaSemana(diaSemana);
console.log(diaSemana, diaSemanaTexto);
//----------------------funcao para pegar o numero do mes e colocar o nome------------------


function getNomeMes(numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
   return meses[numeroMes];
}

console.log(getNomeMes(mes));
//------------------------------Funcao para mostrar na tela----------------------------------
function mostrarNaTela() {

        const primeraResposta = document.querySelector('.container p');
        const datasf = document.querySelector('#data p');

       primeraResposta.innerHTML = `${diaSemanaTexto}, ${diaMes} de ${getNomeMes(mes)} de ${ano} ${hours}:${minutes}`;
       datasf.innerHTML = `${data}`; 

}
mostrarNaTela();


        
