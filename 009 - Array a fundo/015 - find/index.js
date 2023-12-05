/**
 * Nome bem subjetivo também, mas ele procura e te retorna o primeiro valor encontrado
 * do array. apenas 1
 * é uma busca acertiva só retorna um dado do array o primeiro em especifico
 */
const Logger = require("nodemon/lib/utils/log");

 

const pedido = [
    {
        id: 240,
        nome: "Larissa",
        Alimento: "Japinha",
        bebida: "suco de uva",
    },
    {
        id: 122,
        nome: "bruno",
        Alimento: "churraco",
        bebida: "refrigerante",
    },
    {
        id: 55,
        nome: "maria",
        Alimento: "legumes",
        bebida: "suco de morango"
    },
    {
        id: 10,
        nome: "mia",
        Alimento: "pizza",
        bebida: "refrigerante",
    },
    {
        id: 55,
        nome: "Ana",
        Alimento: "hamburger",
        bebida: "suco de laranja"
    },
];
const findId = pedido.find((Element) =>{
    return Element.bebida === "refrigerante";
})
// console.log(findId);

const cardapio = [
    {
        id: 1,
        Alimento: "Coxinha",
        Preco: 10,
    },
    {
        id: 2,
        Alimento: "esfirra",
        Preco: 8,

    },
    {
        id: 3,
        Alimento: "bolinha de queijo",
        Preco: 8,

    },
    {
        id: 4,
        Alimento: "pizza",
        Preco: 15,

    },
];
const valor = cardapio.find((item) => {
    return item.Preco === 8;
})
console.log(valor);