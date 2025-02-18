// callback function 
function calculate(a,b,arithmeticfunction){
    const result=arithmeticfunction(a,b);
    return result;
}
function sum(a,b){
    return a+b;
}
function minus(a,b){
    return a-b;
}
const value=calculate(6,2,minus);
console.log(value);