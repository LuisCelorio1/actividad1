var n1 = parseInt(prompt("Escribe un número"));
var n2 = parseInt(prompt("Escribe un número"));
var n3 = parseInt(prompt("Escribe un número"));
var n4 = parseInt(prompt("Escribe un número"));



function ordenCreciente(num){
    if(n1 > n2 && n2 > n3 && n3 > n4){
        console.log("El orden es creciente");
    }
    else{
        n1 = prompt("Escribe un número");
        n2 = prompt("Escribe un número");
        n3 = prompt("Escribe un número");
        n4 = prompt("Escribe un número");
    }
}