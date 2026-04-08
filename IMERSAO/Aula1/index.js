function conversor(){

const real = 0.0039;
const dolar = 0.0006835;
const euro = 0.0006322;


valor = Number(prompt(`Digite o valor para fazer a conversao:`));


alert(` Won:₩ ${valor}\n Real:R$ ${real*valor}\n Dolar:$ ${dolar*valor} \n Euro:U$ ${euro*valor}`);
}