
const nome = 'Luiz Otavio';
const sobrenome = 'Reinisch';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc , anoNascimento;


anoNascimento = (2025 - idade);
imc = peso / (altura * altura);

console.log(nome + '' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg'); //impressao com o + concatenando as variaveis.
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`); // template Strings, é a forma mais moderna de imprimir as strings.
console.log(nome, 'nasceu em', anoNascimento); // outra forma, porem menos usada.

