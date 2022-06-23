userdata = JSON.parse(localStorage.getItem('datausers'));
console.log(userdata);
nom=localStorage.getItem('nombre');
nomArray=userdata.find(persona=>persona.nombre===nom);
let saldoTotal=nomArray.dinero;

let etiqueta_saldo=document.querySelector('#etiqueta_saldo');
etiqueta_saldo.innerHTML=saldoTotal;
