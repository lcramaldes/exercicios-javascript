/**
 * como o nome já diz, esse método deve ser utilizado quando temos
 * necessidade de filtrar algo em nossa lista. 
 * 
 * filtra TODOS!
 */

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
const filterRefri = pedido.filter((Element, index) =>{
   return Element.bebida ==="refrigerante";
});
// console.log(1, pedido);
// console.log(2 ,filterRefri);

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
const valor = cardapio.filter((Item) => {
   return Item.Preco === 15;
});

console.log(1, cardapio);
console.log(2, valor);
