let Tenis ={
    tamanho:35,
    estoque: true,
}
let caminho = { caminho :{a:"a", b:{c:"c"}}};

let clone1 = Tenis;
console.log(1, clone1);
console.log(2, Tenis);

let mesclar1 = Object.assign(Tenis, caminho);
let mesclar2 = {...Tenis, ...caminho}


clone1.caminho = false;
mesclar1.caminho.a = "ABC";


console.log(3, clone1);
console.log(4, Tenis);
console.log(5, mesclar1);
console.log(6, mesclar2);