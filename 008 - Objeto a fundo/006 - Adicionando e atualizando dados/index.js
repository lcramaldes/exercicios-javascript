let Tenis ={
    tamanho:35,
    estoque: true,
}
Tenis.tamanho = 42;
Tenis.tamanho = false;
// Tenis.preco = "R$20";
Tenis["preco"] = "R$200";

console.log(Tenis);
console.log(Tenis["preco"]);