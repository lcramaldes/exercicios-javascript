/**
 * È Bacana entender que, se vc tem uma condição, ela vai tratar
 * toda sua Array assim podemos verificr se eles estão bem.
 */

const pedido = [
    // {
    //     id: 240,
    //     nome: "Larissa",
    //     Alimento: "Japinha",
    //     bebida: "suco de uva",
    // },
    {
        id: 122,
        nome: "bruno",
        Alimento: "churraco",
        bebida: "refrigerante",
    },
    // {
    //     id: 55,
    //     nome: "maria",
    //     Alimento: "legumes",
    //     bebida: "suco de morango"
    // },
    {
        id: 10,
        nome: "mia",
        Alimento: "pizza",
        bebida: "refrigerante",
    },
    // {
    //     id: 55,
    //     nome: "Ana",
    //     Alimento: "hamburger",
    //     bebida: "suco de laranja"
    // },
];
const temRefri = pedido.every((Element) =>{
    return Element.bebida ==="refrigerante";
})
// console.log(temRefri);

//foi mal mas não tem só refri ai ele retorna falso

const numeros = [ 2, 4, 6, 8, 10];

const pares = numeros.every((item)=>{
    return item % 2 === 0;
});
console.log(pares);