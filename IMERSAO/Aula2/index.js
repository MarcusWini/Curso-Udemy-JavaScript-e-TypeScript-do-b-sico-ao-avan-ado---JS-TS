function jogar() {

    idade = prompt("Digite sua idade!")
    if (idade < 18) {
        alert('Idade menor que a permitida para o jogo!')
    }
    else {
        escolhaComputador = Math.floor(Math.random() * (4 - 1)) + 1;

        escolhaJogador = prompt(`Digite o numero correspondente ao seu jogo sendo:\n 1-Pedra\n 2-Papel\n 3-Tesoura.`);

        //Escolhas onde o Pc e o jogador empatam
        if (escolhaComputador == escolhaJogador) alert('Empate!');

        //Jogador escolhendo Pedra
        if (escolhaJogador == 1) {

            if (escolhaComputador == 2) {
                alert("Jogador perde com Pedra Contra Papel!");
            }

            if (escolhaComputador == 3) {
                alert("Jogador vence com Pedra contra Tesoura!")
            }
        }
        //Jogador escolhendo Papel
        if (escolhaJogador == 2){
           
            if (escolhaComputador == 1) {
                alert("Jogador vence com Papel contra Pedra!");
            }
           
            if (escolhaComputador == 3) {
                alert("Jogador perde com Papel contra Tesoura!")
            }
        }
        //Jogador escolhendo Tesoura
        if (escolhaJogador == 3){
           
            if (escolhaComputador == 1) {
                alert("Jogador perde com Tesoura contra Pedra!");
            }
           
            if (escolhaComputador == 2) {
                alert("Jogador vence com Tesoura contra Papel!")
            }
        }

    }

    alert(`Escolha do Computador: ${escolhaComputador} x Escolha do Jogador: ${escolhaJogador} \n1- Pedra\n 2-Papel\n 3-Tesoura.`);
}
