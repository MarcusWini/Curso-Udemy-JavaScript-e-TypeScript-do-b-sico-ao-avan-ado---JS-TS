function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) // variavel que esta sendo checada
    {
        
        case 0:                         //caso o dia da semana for 0 faça a proxima linha
            diaSemanaTexto = 'Domingo'; //No switch case mesmo sendo encontrado o valor true
            return diaSemanaTexto;             
        case 1:                         
            diaSemanaTexto = 'Segunda'; 
            return diaSemanaTexto;       //ele continua rodando o codigo por isso precisa do Break!! ou Return no caso da funcao
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = 'Dia não encontrado.'
            return diaSemanaTexto;
    }
  //  return diaSemanaTexto; ----> esta seria uma opcao caso estivessemos usando break apos os 'cases' porem, usamos 'return'!
  
}
const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay();
console.log('argumento q ira ser passado: '+diaSemana)
const diaSemanaTexto = getDiaSemanaTexto(diaSemana); //o argumento dia


console.log(diaSemana, diaSemanaTexto);

// O MESMO CODIGO COM IF E ELSE
// const data = new Date('1989-04-10 16:00:00');
// const diaSemana = data.getDay();

// let diaSemanaTexto;

// if (diaSemana === 0){
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1){
//     diaSemanaTexto = 'Segunda';
// } else if (diaSemana === 2){
//     diaSemanaTexto = 'Terça';
// } else if (diaSemana === 3){
//     diaSemanaTexto = 'Quarta';
// } else if (diaSemana === 4){
//     diaSemanaTexto = 'Quinta';
// } else if (diaSemana === 5){
//     diaSemanaTexto = 'Sexta';
// } else if (diaSemana === 6){
//     diaSemanaTexto = 'Sabado';
// } else {
//     diaSemanaTexto = 'Erro no dia!'
// }
// console.log(diaSemana,  diaSemanaTexto);