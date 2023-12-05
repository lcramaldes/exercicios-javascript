"use strict";
/**
 * InnerHTML = Retorna o texto com formatações, igual no html.
 * createElemnt = Cria um elemento Html.
 */

const div = document.querySelector("div");
console.log(1, div);
div.innerHTML = "<strong>Esse é meu texto alterado</strong>";

console.log(2, div);

const elementUl = document.createElement('ul');
[1, 2, 3].forEach((element) =>{
    const elementLi = document.createElement("li");
    elementUl.appendChild(elementLi);
})
div.appendChild(elementUl);
console.log(elementUl);