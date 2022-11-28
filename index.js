function apply (num, f) {
    return f(num);
}

function double (num){
    return num*2;
}

function potencia (num){
    return num*num;
}

console.log(apply(45, double)); 
console.log(apply(45, (num) => num * 2))