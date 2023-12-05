"use strict";

const div = document.querySelector("div");
div.setAttribute('id', 'teste');
div.setAttribute('class', `${div.getAttribute('class')}active`)
div.setAttribute('class', `${div.getAttribute('class')}background-red`);
console.log(div.getAttribute("id"));
console.log(div);

div.removeAttribute('id')
div.removeAttribute('class')