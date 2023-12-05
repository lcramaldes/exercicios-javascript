"use strict";

const container = document.querySelector(".container");

container.append("<p>Olá Dener</p>");//add o codigo inteiro, pra ele é tudo texto

const newDiv = document.createElement("div");
newDiv.innerText = "Olá Dener";

container.appendChild(newDiv);