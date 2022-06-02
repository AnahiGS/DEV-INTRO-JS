//Ejercicio 3
let num=prompt("Escriba un número");

if ((2%num)==0){
    alert("El número que escribiste es divisible entre 2");
}else{
    alert("El número que escribiste es divisible entre 2");
}

//Ejercicio 4
let num=prompt("Escriba un número");

if ((2%num)==0){
    alert("El número que escribiste es par");
}else{
    alert("El número que escribiste es impar");
}

//Ejercicio 5
let numero=prompt("Escriba un número");

if (numero==1000){
    alert ("Ganaste un premio");
}else{
    alert("Lo sentimos, sigue participando");
}

//Ejercicio 6
let num1=prompt("Escriba un número");
let num2=prompt("Escriba un número");

if (num1<num2){
    alert(num1);
}else if (num1>num2){
    alert(num2);
}

//Ejercicio 7
let num1=prompt("Escriba un número");
let num2=prompt("Escriba un número");
let num3=prompt("Escriba un número");

if (num1>num2 && num3){
    alert(num1);
}else if (num2>num1 && num3){
    alert (num2);
}else if (num3<num1 && num2){
    alert (num3);
}else if (num1==num2){
    alert ("son iguales");
}else if (num2==num3){
    alert ("son iguales");
}else if (num3==num1){
    alert ("son iguales");
}