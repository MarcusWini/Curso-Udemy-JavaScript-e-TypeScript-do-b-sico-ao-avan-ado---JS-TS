//ESCREVA UMA FUNCAO QUE RECEBE 2 NUMEROS E RETORNE O MAIOR DELES

//if else
function opcao1(num1, num2){
    
    if (num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}
console.log(opcao1(10,5));
//operacao ternaria
function max(x, y) {
 return x > y ? x : y; // se x é maior que y(condicao), returne(? true) x senao(: false) y
}
console.log(max(10,20));

//arrow function
const max2 = (x,y) => {
    return x > y ? x : y;
};
console.log(max2(10,30));

//arrow function melhorada, caso ela tenha ------UMA SO LINHA-----, nao precisa de chaves 
// neste caso tb o return fica implicito nao precisando dele.
const max3 = (x,y) => x > y ? x : y;
console.log(max3(100,50));