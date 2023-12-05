/**
 * Escopo:
 * determina quais são 
 * os dados que podem ser acessados 
 * em uma determinada parte do código.
 */
let idade = 22;
var menina = 'bia'
{
    let nome = 'lala';
    console.log(nome);
    console.log(menina);
}
console.log(idade);