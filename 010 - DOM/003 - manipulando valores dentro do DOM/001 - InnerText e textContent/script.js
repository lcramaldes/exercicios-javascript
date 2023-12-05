"use strict";
/**
 * textContent = Retorna o texto com formatações, igual no html.
 * innrText = retorna somente o texto, sem formatação etc
 */
const p = document.querySelector("p");

console.log(p.textContent);
console.log(p.innerText);

p.textContent = "Larissa Costa";
p.innerText = "Larissa Costa";