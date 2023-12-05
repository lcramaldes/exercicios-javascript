"use strict";

const h1 = document.querySelector("h1");
h1.classList.toggle("teste2")//se não tem ele add se tem ele remove

if(h1.classList.contains('active')){
    // alert('existe a classe active')
}
h1.classList.add('active');