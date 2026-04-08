let varA ='A'; //B
let varB ='B'; //C
let varC ='C'; //A
let Temporario;

/*
---------------------------
Primeira forma de fazer:

Temporario=varA;
varA=varB;
varB=varC;
varC=Temporario;
---------------------------
*/

// OU

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);