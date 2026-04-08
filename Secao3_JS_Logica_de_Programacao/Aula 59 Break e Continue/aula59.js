const numeros = [1,2,3,4,5,6,7,8,9];

//CONTINUE:
//SEMPRE QUE O LAÇO ENCONTRAR A PALAVRA CONTINUE, ELE VOLTA AO INICIO E PULA PARA O PROXIMO LAÇO.

for (let numero of numeros){
    if (numero === 2 ) {
        console.log('Pulei o numero 2');
        continue;
    }


// BREAK:
// SEMPRE QUE O LAÇO ENCONTRAR A PALABRA BREAK, ELE VAI PARAR ANTES MESMO DE EXECUTAR ESTE LAÇO. NO EXEMPLO O LACO NAO CHEGA A COMPLETAR O NUMERO 7    
    
    
    if(numero === 7){
        console.log(numero+" Valor antes do break!")
        break;
    }

    console.log('Valor Final: '+ numero );
}

    