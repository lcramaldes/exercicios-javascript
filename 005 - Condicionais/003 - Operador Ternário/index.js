// const velocidade = 75;
// const warm = 85;
// // condição ? true: false;

// const condicao = velocidade >= warm 
// ? console.log("Recebeu uma Multa!") 
// : console.log(" continue Andando");

// if(velocidade>=warm){
//     console.log("Recebeu uma multa!");
// }
const prompt = require('prompt-sync')();

// let idade;

// idade = prompt("Digite sua idade: ");
// idade = parseInt(idade);

// let mensagem = (idade >= 18) ? 'Você é maior de idade' : 'Você é menor de idade';
// console.log(mensagem);

let n1, n2, nota;

n1 = prompt('Insira sua primeira nota: ')
n1 = parseInt(n1);

n2 = prompt('Insira sua segunda nota: ')
n2 = parseInt(n2);

nota = (n1 + n2) /2;

let mensagem = (nota >= 7)? "Você Passou!" :(nota>=5)? "Recuperação": ' Você REPROVOU';
console.log(mensagem);