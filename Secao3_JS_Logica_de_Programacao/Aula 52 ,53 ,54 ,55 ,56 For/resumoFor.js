
const pessoa = {
    nome: 'Luiz',
    sobrenome:'Otávio'
};

const nomes =  ['Luiz', 'Otavio','Henrique'];
    
//For Classico
//Funciona em Strings ou Array
//Funciona em Arrays
//nao funciona em Objetos
for (let i =0; i< nomes.length; i++)
{
    console.log('For classico , i:-------'+i);
    console.log('For classico , nome: ---'+nomes);
    console.log('For classico , nome[i]: '+nomes[i]);

}
console.log("========================================")
//for In (Forma simplificada de pegar o indice em nomes)
//Funciona em Arrays
//Funciona em Objeto
for (let indice in nomes, pessoa)
{
    console.log('For In , i:-------------'+indice);
    console.log('For In , nome: ---------'+nomes);
    console.log('For In , nome[i]: ------'+nomes[indice]);
    console.log(pessoa,"/ Nome: "+ pessoa.nome,"/ Sobrenome: "+ pessoa.sobrenome)
}

console.log("========================================")
//for Of (Fomar simplificada de pegar o valor em nomes)
//Funciona em Strings
//Funciona em Arrays
//Nao funciona em Objeto, porque nao é iteravel
for (let valor of nomes)
{
    console.log('For of , i:-------------'+valor);
    console.log('For of , nome: ---------'+nomes);
    console.log('For of , nome[i]: ------'+nomes[valor]);
}