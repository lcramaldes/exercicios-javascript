/**
 * O método map além de iterar todo array ele é
 * muito bom para editar o interadi (resumindo o array)
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
        bebida: "cerveja",
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

// pedido.map((Element, index) => {
//     if(Element.id === 55 && Element.Alimento ==="hamburger"){
//         return (Element.Alimento = "coxinha");
//     }
// });
// console.log(pedido);

/**
 * o map é bom para percorrer os elementos do array e alterar ou fazer uma validação etc.
 */
const cardapio = [
    {
        id: 1,
        Alimento: "Coxinha",
        Preco: 10,
    },
    {
        id: 2,
        Alimento: "esfirra",
        Preco: 6,

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

cardapio.map((Item, index) =>{
    if(Item.id === 4 && Item.Alimento === "pizza"){
        return (Item.Preco = 20);
    }
});
console.log(cardapio);
