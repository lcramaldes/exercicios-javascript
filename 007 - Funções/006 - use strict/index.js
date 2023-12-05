/*
O strict elimina alguns erros silenciosos
que passariam batido do js e os faz emitir erros

Além disso, essa forma corrige alguns erros que tornam o js
díficio de ser otimizado, então algumas vezes os códigos no modo
estrito rodam mais otimizados e velozes do que os cód. no 'modo normal'
*/

"use strict"; //serve para dar erros e mostrar eles 

(() =>{
     teste = 'teste'
})();
console.log(teste);
