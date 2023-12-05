const myArrayObj = [
    {
        nome: "ana",
        sobrenome: "silva",
    },
    {
        nome: "caio",
        sobrenome: "silva",
    },
    {
        nome: "lari",
        sobrenome: "silva",
    },
];
myArrayObj.forEach((Element, index) => {  //a posição de cada objeto e serve para interar os valores de um array
    if(Element.nome === "caio"){
       return  console.log("oi mo");
       
    }
    console.log(index, Element.nome);   
});