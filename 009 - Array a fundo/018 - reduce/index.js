/*
A ideia dele é pegar todos os valores de um array e condensá-ls em um só
*/
const pedido = [
    {
        id: 240,
        nome: "Larissa",
        Alimento: "Japinha",
        bebida: "suco de uva",
        preco: 200,
    },
    {
        id: 122,
        nome: "bruno",
        Alimento: "churraco",
        bebida: "refrigerante",
        preco: 180,

    },
    {
        id: 55,
        nome: "maria",
        Alimento: "legumes",
        bebida: "suco de morango",
        preco: 40,

    },
    {
        id: 10,
        nome: "mia",
        Alimento: "pizza",
        bebida: "refrigerante",
        preco: 60,

    },
    {
        id: 55,
        nome: "Ana",
        Alimento: "hamburger",
        bebida: "suco de laranja",
        preco: 70,

    },
];
const balancete = pedido.reduce((total, element) =>{
    return total + element.preco;
}, 0)
console.log(balancete);


const numeros = [2,4,6,7,8];

const soma = numeros.reduce((total, item) =>{
    return total + item;
})
console.log(soma);
//o reduce é utiliza como se fosse para fazer o valor total pensa em um caixa de uma loja
//ele vai retonar por ex o valor faturado no dia/mes etc.