// const stringArray =["A", "C", "D", "W", "L", "B"];

// console.log(stringArray.sort()); //coloca em ordem,
// console.log(stringArray.reverse());

// const numberArray = [10, 20 , 30, 40, 50, 200, 1, 55, 15];

// console.log(numberArray.sort((a,b) => a-b));   //expressão para numeros
// console.log(numberArray.sort((a,b) => b-a));
// console.log(numberArray.sort((a,b) => a-b).reverse); 

const objArray= [
    {
        nome: 'bia',
    },
    {
        nome: 'ana',
    },
    {
        nome: 'mia',
    },
    {
        nome: 'caio',
    },
    {
        nome: 'rafa',
    },
    {
        nome: 'julia',
    },
];

console.log(objArray.sort((a,b)=> a.nome.localeCompare(b.nome)));