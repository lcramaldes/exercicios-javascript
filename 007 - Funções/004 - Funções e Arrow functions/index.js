/*
1 - Nome da função
2 - retorno
3 - Não tem Hoisting
4 - Arguments
*/
function nomeFunc(){
    return 'larissa';
}

console.log(nomeFunc());

const nomefuncArrow= () =>{
    return "larissa costa"
}

console.log(nomefuncArrow());

const nomefuncArrowReturn = ()=> "lala";

console.log(nomefuncArrowReturn());


const nomefuncArrowHosting = ()=> {
    return "larissa linda"
}

console.log(nomefuncArrowHosting());


// const nomefuncArrowArguments = () =>{   em arrow fuctions arguments não funciona
//     return arguments;
// }

// console.log(nomefuncArrowArguments);
/*
5 - não pode ser invocda com new
*/

/*
6 - Contexto

Arrow fuctions possuem this léxico enquanto o modelo normal possui this dinâmico.

Isso significa que arrow functions herdam o contexto local de onde foi declarado,
enquanto o modelo normal possui o contexto associado ao objeto que ele esta vinculado
no momento da chamada

se ele não estiver associado a ninguém na chamada, ele assumirá this automaticamente
como o contexto global, que no caso dos navegadores é o window
*/

/*
7 - constructor

Arrow functions não podem ser constructors, então não é possível usar o operador
new com a mesma.
*/