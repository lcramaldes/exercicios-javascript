/*
Uma closure ocorre normalmente quando uma função é declarada dentro  do corpo de outra
, e a função inteiror referencia variáveis locais da fucnção exterior.
*/


// function QualSeuNome(name){
//     const msg = `O seu nome é: `;
//     function yourName(){
//         return `${msg} ${name}`;
//     }
//     return yourName();
// }

// console.log(QualSeuNome('Larissa'));

//não da pra acessoar uma função dentro da outra nessa forma é como se ficasse private

function calculadora(num1, num2){
 const mensage = "resultado"
 const soma = () =>{
    return `${mensage} ${num1 + num2}`
 }
 const subtracao = () =>{
    return `${mensage} ${num1 - num2}`
 }
 const mult = () =>{
    return `${mensage} ${num1 * num2}`
 }
 const divsao = () =>{
    return `${mensage} ${num1 / num2}`
 }

 return{
    soma: soma(),
    subtracao: subtracao(),
    mult: mult(),
    divsao: divsao()
 }
}
console.log(calculadora(10, 5).mult);