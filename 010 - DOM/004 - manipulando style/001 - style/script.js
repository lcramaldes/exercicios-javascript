"use strict";

const h1 = document.querySelector("h1");

h1.style.fontFamily = "Arial";
h1.style.color = 'red';

const p = document.querySelectorAll('p');
console.log(p);
p.forEach((Element) =>{
    Element.style.fontFamily = "Arial";
    Element.style.fontSize = '12px';
});