userdata = JSON.parse(localStorage.getItem('datausers'));
console.log(userdata);
nom=localStorage.getItem('nombre');
nomArray=userdata.find(persona=>persona.nombre===nom);
//funciones para entrar a los distintos html en las opciones de 'opciones.html'


let container_saldo=document.querySelector('#saldo').addEventListener('saldo', saldo);

function saldo(){
    window.location='saldo.html';
}

let container_retirar=document.querySelector('#retirar').addEventListener('retirar', retirar);

function retirar(){
    window.location='retiro.html';
}

let container_ingresar=document.querySelector('#ingresar').addEventListener('ingresar', ingresar);

function ingresar(){
    window.location='ingreso.html';
}







