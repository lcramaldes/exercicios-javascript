//function declararion

function isValidDeclaration(){
    const soma = 1 + 2;
    if(soma === 3){
    return true;
}
    return false;
}
console.log(isValidDeclaration());

//function expression

const isValidExpression = function(){
    return false;
};
console.log(isValidExpression());

//arrow fuctions
const isValidArrow = () => 2*2; //sempre como uma const jamais com function
console.log(isValidArrow());
