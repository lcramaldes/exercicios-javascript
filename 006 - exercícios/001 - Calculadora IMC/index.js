/*
IMC é a siglas para índice de massa corpórea,
Parametro adotado pela Organização Mundial de
saúde para calcular o peso ideal de casa pessoa.

como calcular o IMC?
é calculado o peso pela altura ao quadrado (em m), de
acoto com a seguinte formula: IMC = peso/ (altura * altura)

e nosso calculo devemos retornar os seguintes valores para o úsuario:

resultado Calc          |  Resultado para o úsuario
Abaixo de 17            |  Muito abaixo do peso
Entre 17 e 18.49        |  Abaixo do peso
Entre 18.5 e 24.99      |  Peso normal
Entre 25 e 29.99        |  Acima do peso
Entre 30 e 34.99        |  Obesidade I
Entre 35 e 39.99        |  Obesidade II

*/
const prompt = require('prompt-sync')();

let peso, altura, resultadoImc;

peso = prompt('Insira seu peso: ');
peso = parseFloat(peso);

altura = prompt("Insira a sua altura: ");
altura = parseFloat(altura);

const imc = Number((peso / (altura * altura)).toFixed(2)); //toFixed serve para trazer apenas as duas casa decimais

switch (true) {
    case imc < 17:
        resultadoIMC = "Muito abaixo do peso.";
        break;
    case imc >= 17 && imc <= 18.49:
        resultadoIMC = "Abaixo do peso.";
        break;
    case imc >= 17.5 && imc <= 24.99:
        resultadoIMC = "Peso normal.";
        break;
    case imc >= 25 && imc <= 29.99:
        resultadoIMC = "Acima do peso.";
        break;
    case imc >= 25 && imc <= 29.99:
        resultadoIMC = "Acima do peso.";
        break;
    case imc >= 30 && imc <= 34.99:
        resultadoIMC = "Obesidade I.";
        break;
    case imc >= 35 && imc <= 39.99:
        resultadoIMC = "Obesidade II."
        break;
    default:
        console.log("Valor não identificado.");
        break;
}
const tabela = {
        'Seu peso é de': peso,
        'Sua altura é de': altura,
        'IMC': imc,
        'Classificação': resultadoIMC
    }
;
console.table([tabela])