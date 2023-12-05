
/**
 * O some pergunta se apenas 1 dos valores do array equivale a sua condição
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
const existeAlimento = pedido.some((Element, index) =>{
    return Element.Alimento ==="pizza"
})
// console.log(existeAlimento);

const numeros = [2, 4, 5, 6, 8]

const impar = numeros.some((Item)=>{
    return Item % 2 !==0;
})
console.log(impar);