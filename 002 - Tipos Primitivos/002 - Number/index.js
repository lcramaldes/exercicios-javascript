console.log(123);
console.log('123' + 1); //concatenou
console.log('123' - 1); //subtrai erro do js ainda
console.log(Number("123") + 1); //converte a string para number
console.log('*************');
console.log(typeof Number("123")); 
console.log(typeof "123");

//typeof serve para mostrar o tipo primitivos etc

/*
Forma correta de se usar:
Number 123
Number 123 + 123 = 246
Number ("123") - 1 = 122

Cuidado que assim pode gerar bugs
Number "123" - 1 = 122
Number "123" * 2 = 246
*/