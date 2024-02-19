// Funciones flecha 
function sumar(a, b) {
    return a + b;
}

let sumar1 = function(a, b) {
    return a + b;
}

let sumar2 = (a, b) => {
    return a + b;
}

let sumar3 = (a, b) =>  a + b; 

console.log( sumar(5,10));
console.log( sumar1(5,10));
console.log( sumar2(5,10));
console.log( sumar3(5,10));
