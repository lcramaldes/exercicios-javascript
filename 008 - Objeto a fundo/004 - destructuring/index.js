const Tenis={
    tamanho: 47,
    estoque:true,
    marcas: [{nome: 'adidas'}, {nome: 'puma'}],
    secret: 124,
    n: 5,
    caminho: {a:'a', b:{c: 'C'}},
};
const {tamanho, estoque, marcas= "não possui marca"} = Tenis

console.log(tamanho, estoque, marcas);

// const{secret: randomNumber, n: avaliacoes} = Tenis
// console.log(randomNumber);
// console.log(secret);

const { caminho} = Tenis;
console.log(caminho);
