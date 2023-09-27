var numero = prompt("Escribir un número");
var numPositivo = true;
var numEntero = true;

function numeroPositivo(num){
    if(numero<0){
        numPositivo = false;
        console.log=("El número no es positivo");
        prompt =("Escribir otro número");
    }
    return numPositivo;
}

function numeroEntero(num){
    if(numero!=parseInt(numero)){
        numEntero = false;
    }
    return numEntero;
}

function sumatorio(num){
    sumatorio =0;
    for (var i=0;i<=num;i++){
        sumatorio +=1;
    }
}