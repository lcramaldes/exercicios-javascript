/*
    slice = pega os dados dentro de um range sem quebrar o Array
    splice = remove os dados do Array dentro de um range
*/
let arr = [
    {nome: "larissa", tel: "(99)99999-9999"},
    {nome: "bruno", tel: "(99)99999-9999"},
    {nome: "mari", tel: "(99)99999-9999"},
    {nome: "ieda", tel: "(99)99999-9999"},
    {nome: "rafa", tel: "(99)99999-9999"},
];

console.table(arr);

arr.splice(0,3)
// const newArray = arr.slice(2, 4)
// console.table(newArray);

console.table(arr);
 