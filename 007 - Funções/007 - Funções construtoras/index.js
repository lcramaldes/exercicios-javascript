// function Name(name){
//     this.name = 'lari';
// }
// const larissa = new Name();

// console.log(larissa.name);

function Calculadora(){
    this.soma = (num1, num2) =>{
        return `${num1 + num2}`;
    };
    this.subtracao = (num1, num2) =>{
        return `${num1 - num2}`;
    };
}
const calcular = new Calculadora();

console.log(calcular.soma(1, 6));
console.log(calcular.subtracao(6, 6));