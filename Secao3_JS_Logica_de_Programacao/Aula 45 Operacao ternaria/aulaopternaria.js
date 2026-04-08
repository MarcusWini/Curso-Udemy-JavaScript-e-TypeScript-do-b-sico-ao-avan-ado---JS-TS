//(condicao) ? 'Valor pra verdadeiro' : 'Valor para falso';
const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usúario normal';

//outro exemplo
const corUsuario = null; //valor falso!
const corPadrao = corUsuario || 'Preta'; //Preta entra como valor verdadeiro pois esta declarado enquanto nao tiver valor para corPadrao

console.log(nivelUsuario, corPadrao);



//if (pontuacaoUsuario >= 1000){
//   console.log('Usuario VIp');
//} else {
//    console.log('Usuario normal');
//}
