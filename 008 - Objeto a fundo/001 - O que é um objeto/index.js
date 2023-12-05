let Tenis = {
    tipo: "Tenis de corrida",
    cardaco: "G",
    estoque: false,
    tamanho: {
        palmilha: 34,
        tenis: 35,
        caixa: {
            largura: 35,
            profundidade: 10,
            largura: 40,
        },
    },
    MarcaArrayValores: ["adidas", "fila"],
    MarcaArrayObj: [
        {
            nome: "adidas"
        },
        {
            nome: "fila"
        },

    ],
    getMarcaArrayValores: function(param){
        return this.marcaArrayObj[param];
    },
    getMarcaArrayObj: function(param){
        return this.MarcaArrayObj[param].nome
    },
};

console.log(Tenis);
console.log(Tenis.tipo);
console.log(Tenis.tamanho);