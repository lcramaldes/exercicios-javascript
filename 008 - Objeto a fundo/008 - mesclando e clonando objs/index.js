let Tenis ={
    tamanho:35,
    estoque: true,
}

let caminho = { camino :{a:"a", b:{c:"c"}}};

let clone1 = Tenis;
console.log(clone1);

let mesclar1 = Object.assign(Tenis, caminho);
console.log(mesclar1);

let mesclar2 = {...Tenis, ...caminho}
console.log(mesclar2);

