"use strict";

const p = document.querySelectorAll("p");//selecina todos os "p" s iguais.

p.forEach((element, index)=>{
    element.style.color = "#fff"
    element.style.padding = "20px"
    if(index === 0){
        element.style.background ="blue";
    }
    if(index === 1){
        element.style.background ="red";
    }
    console.log(index, element);

})
