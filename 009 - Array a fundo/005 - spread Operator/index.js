const num = [1, 2, 3, 4, 5];
console.log(...num);//tira o array e altera para numeros

console.log(Math.max(1, 2, 22, 43));//mostra o maior valor dentro de um grupo de números
console.log(Math.max(num[0], num[2])); //ao invés disso faça isso a baixo
console.log(Math.max(...num));
