/*
const usuarios=[ {
    nombre:'pedro',
    clave:'2645',
    saldo: 800,
},
{
    nombre:'sandra',
    clave:'8974',
    saldo: 550,
},
{
    nombre:"juan",
    clave:'6739',
    saldo: 378,
}
];
*/
//1. Validar el acceso a la cuenta bancaria

let btn_user=document.querySelector('#users');

let btn_numero=document.getElementById('btn_numero');



//1.1 asociar el input de cada persona con su respectiva clave guardada en el array

 //va a guardar el 'name' guardado en el local.storage cuando se le dio click al input

if(btn_user){
    btn_user.addEventListener('click', (e)=>{
        //console.log(e.target.name);
        localStorage.setItem('nombre',e.target.name); //agregue el name de cada usuario
        window.location="password.html"; 
    })
    
}

/*
//1.2 darle funcionalidad al teclado.

function numero_1(){
    pin_pantalla.value=pin_pantalla.value+'1';  
}

function numero_2(){
    pin_pantalla.value=pin_pantalla.value+'2';
}

function numero_3(){
    pin_pantalla.value=pin_pantalla.value+'3';
}

function numero_4(){
    pin_pantalla.value=pin_pantalla.value+'4';
}

function numero_5(){
    pin_pantalla.value=pin_pantalla.value+'5';
}

function numero_6(){
    pin_pantalla.value=pin_pantalla.value+'6';
}

function numero_7(){
    pin_pantalla.value=pin_pantalla.value+'7';
}

function numero_8(){
    pin_pantalla.value=pin_pantalla.value+'8';
}

function numero_9(){
    pin_pantalla.value=pin_pantalla.value+'9';
}

function numero_0(){
    pin_pantalla.value=pin_pantalla.value+'0';
}


let btn_borrar=document.querySelector('#btn_borrar').addEventListener('click',borrar)

function borrar(){
    let pantalla = pin_pantalla.value;
    let newValue = pantalla.substring(0,pantalla.length - 1);
    pin_pantalla.value = newValue;
}

//1.3 Hacer que cuando digite la clave y sea igual a la clave guardada en array "usuario", entre y nos presente las opciones de operación bancaria
let access=false;
let nom='';



nom=localStorage.getItem('nombre');


console.log(usuarios[0]["nombre"]);

//let nomArray=usuarios.find(persona=>persona.nombre===nom);
//console.log(nomArray);
/*
function acceso(){
        obtenerdatos(){
            let nomArray=usuario.find(persona=>persona.nombre===nom);
            //console.log(nomArray.clave);
            if(pin_pantalla.value===nomArray.clave){
                access===true;
            }else{
            }
    }    
}

btn_entrar.addEventListener('click',entrar)

function entrar(){
    if(access===true){
        window.location='opciones.html';
    }else{
        alert('Clave incorrecta, vuelva a intentarlo');
    }
}
*/