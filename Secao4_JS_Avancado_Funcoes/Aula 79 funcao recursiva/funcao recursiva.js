//funcao recursiva, é uma funcao que se chama automaticamente, ou seja, funciona como um loop

//funcao recebe um parametro max, valor que vai iniciar a funcao
function recursiva(max){
    
    console.log(max); //console.log esta no inicio para poder mostrar o primeiro numero passado

    if(max >=10) return; //return para parar o codigo quando passar do 10
    max++; //incremento para que ela nao fique eternamente no mesmo numero
    recursiva(max); //funcao se chama apos incrementar um numero ao seu valor recebido

}
recursiva(0);//valor inicial da funcao