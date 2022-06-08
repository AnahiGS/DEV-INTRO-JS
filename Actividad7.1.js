//Ejercicio 1
funcion suma(oracion,palabra){
    var arr=oracion.split('');
    var salida=true

    for(let i = 0; i < arr.length; i++){
        if(arr[i] == palabra){
            salida = true;
        }else{
            salida = false;
    }
    console.log(salida);
}

//Ejercicio 2
function sumarArray(){
    let numbers = [1,2,3,4,10,11]
    let suma = 0
    for(var i = 0; i < numbers.length; i++){
        suma = suma + numbers[i]
    }
    return suma
}

//Ejercicio 3
function palindromo(){
    let arr = palabra.split(' ');
    let reverse = arr.reverse();
    let join = reverse.join('');

    return palabra == join;
}

//Ejercicio 4

function celcius(grados){
    let resultadoc= grados*(9/5) +32;
    return resultadoc;
}

function farenheight(grados){
    let resultadof=(grados-32)* 5 / 9;
    return resultadof;
}
