//Ejercicio1
let edad=prompt("Escriba su edad");
let nombre=prompt("Escriba su nombre");
if (edad>=18){
    alert("Puede ingresar a la discoteca");
}else if (edad<=18){
    alert ("No puede ingresar a la discoteca")
}else if (edad>=18 && nombre=="Carlos"||"Mario"){
    alert ("Puede ingresar a VIP");
}

//Ejercicio 2
let player1= prompt("Player 1 escriba su decisión");
let player2= prompt("Player 2 escriba su decisión");

if (player1=="Piedra" && player2=="Papel"){
    alert("El ganador es player1");
}else if (player1=="Tijera" && player2=="Papel"){
    alert("El ganador es player1");
}else {
    alert("El ganador es player2");
}



