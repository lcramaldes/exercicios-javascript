//for ([inicialização]; [condição]; [expressão final])

const myArray = [1, 2, 3, 4, 5, 6];
const myArrayObj = [
    {
        nome: "ana",
        sobrenome: "silva",
    },
    {
        nome: "caio",
        sobrenome: "silva",
    },
    {
        nome: "lari",
        sobrenome: "silva",
    },
]
// for (let i = 0; i < myArrayObj.length; i++) {
//     console.log(myArrayObj[i].nome, myArrayObj[i].sobrenome);
// }

// for of
// for(let item of myArrayObj){
//     console.log(item.nome, item.sobrenome);
// }
// for(let item of myArray){
//     console.log(item);
// }

// for in
const obj = { nome: "LARISSA", sobrenome: "COSTA"}

for(let item in obj){
    console.log(item);
}