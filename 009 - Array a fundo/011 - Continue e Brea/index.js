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
]
for(let item of myArrayObj){
    if( item.nome ==-"lari"){
        console.log('o mozao ta te esperando');
        continue
    }
    console.log(item);
}