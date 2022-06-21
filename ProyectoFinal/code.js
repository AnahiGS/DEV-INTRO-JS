//1. Validar el acceso a la cuenta bancaria

let btn_user=document.querySelector('#users');
let pin_pantalla=document.querySelector('#pin');
let btn_entrar=document.querySelector('#entrar');



//1.1 asociar el input de cada persona con su respectiva clave guardada en el array

/*let nom=''; //va a guardar el 'name' guardado en el local.storage cuando se le dio click al input
let pin='';
let access=false;

btn_user.addEventListener('click', (e)=>{
    //console.log(e.target.name);
    localStorage.setItem('nombre',e.target.name); //agregue el name de cada
    window.location="password.html"; 
})

function obtenerElemento(){
    nom=localStorage.getItem('nombre');
}
function contraseña(){
    if(nom==usuario.nombre){
        pin=return(usuario.clave);
    }
}

function acceso(){
    if(nom==usuario.nombre && pin_pantalla==usuario.clave){
        access=true;
    }else{
    }
}

btn_entrar.addEventListener('click',entrar)

function entrar(){
    if(access=true){
        window.location='opciones.html';
    }else{
        alert('Clave incorrecta, vuelva a intentarlo');
    }
}
*/


//darle funcionalidad al teclado.

let btn_numero=document.getElementById('btn_numero');

let numero1 = "";
let numero2="";

let pantalla= "";


//btn_numero.addEventListener('click',numero )

let eval_first_place=true;

function add_character(num_to_add,num1,num2,pant,eval_first_place){
    if(eval_first_place===true){
        num1= num1+ num_to_add;   
    }else{
        num2= num2+ num_to_add;
    }
    
    pant = num1 + num2;
    return [num1,num2,pant]
}


function numero_1(){
    [numero1, numero2, pantalla]=add_character("1",numero1,numero2,pantalla,eval_first_place);
    pin_pantalla.value=pantalla;
}

function numero_2(){
    [numero1, numero2, pantalla]=add_character("2",numero1,numero2,pantalla,eval_first_place);
    pin_pantalla.value=pantalla;
}

function numero_3(){
    
}

function numero_4(){
    
}

function numero_5(){
    
}

function numero_6(){
    
}

function numero_7(){
    
}

function numero_8(){
    
}

function numero_9(){
    
}

function numero_0(){
    
}

let btn_borrar=document.querySelector('#btn_borrar').addEventListener('click',borrar)

function borrar(){
    pin_pantalla.value.slice=(0,-1);
}







