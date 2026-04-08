//defineProperty  e defineProperties (confirgura uma chave ou varias chaves)

function Produto(id, nome, preco, estoque) {
    this.id = id;

    //configurando o estoque com Property
    Object.defineProperty(this, 'estoque', {
        enumerable: true,   // visivel (mostra a chave)
        value: estoque,     // valor
        writable: true,     // alteravel
        configurable: true, // configuravel
    });
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true,
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true,
        },
    });
}

const p1 = new Produto(1, 'Camiseta', 20, 3);
console.log(p1);
//console.log(p1.estoque);