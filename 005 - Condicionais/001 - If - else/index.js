const prompt = require('prompt-sync')();

// let media, n1, n2, n3;

// n1 = prompt("insira a primeira nota:");
// n1 = parseFloat(n1);

// n2 = prompt("insira a segunda nota:");
// n2 = parseFloat(n2);

// n3 = prompt("insira a terceira nota:");
// n3 = parseFloat(n3);

// media = (n1 + n2 + n3)/3;

// if(media > 6){
//     console.log('Você foi aprovado!');
// }else{
//     console.log('Você está reprovado! ');
// }

// let saldo;

// saldo = prompt('insira seu saldo:');
// saldo = parseFloat(saldo);

// if(saldo >= 0){
//     console.log('Você está com saldo na conta');
// }else{
//     console.log('Você está no negativo!');
// }

let n1;

n1 = prompt("Insira um número: ");
n1 = parseFloat(n1);

if(n1 % 2 === 0){
    console.log('esse número é par');
}else{
    console.log('esse número é ímpar');
}