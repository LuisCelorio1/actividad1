var numero = NaN;
var numPositivo = false;
var numEntero = false;

function numeroPositivo(num){
    if(num>=0){
        numPositivo = true;
        console.log("El número es positivo");
    }
    return numPositivo;
}

function numeroEntero(num){
    if(num==parseInt(num)){
        numEntero = true;
        console.log("El numero es entero")
    }else{
        console.log("El número no es entero")
    }
    return numEntero;
}

function sumatorio(num){
    var resultado=0;
    for (var i=0;i<=num;i++){
        resultado +=i;
    }
    console.log(resultado);
}

while(!numEntero | !numPositivo){
    numero = parseInt(prompt("Escribir un número"));
    numeroEntero(numero);
    numeroPositivo(numero);
}
sumatorio(numero);


