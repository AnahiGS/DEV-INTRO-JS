

rest =JSON.parse(localStorage.getItem('restante'));

let etiqueta_saldo=document.getElementById('etiqueta_saldo2')
etiqueta_saldo.innerHTML='$'+rest;
