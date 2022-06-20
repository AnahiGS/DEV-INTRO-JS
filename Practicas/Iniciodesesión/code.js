
let user=document.querySelector('#usuario');
let  contra=document.querySelector('#contraseña');
const inicio=document.querySelector('#inicio').addEventListener('click',entrar);


let usuario = {
    nombre:"isaias",
    contraseña:"chillywilly",  
}

//function guardar_ls(){
  // localStorage.setItem('usuario', JSON.stringify(usuario));
//}

let acceso=false;

function validarUser(){
    usuario=JSON.parse(localStorage.getItem('usuario', JSON.stringify(usuario)));      
    if(usuario.nombre===user.value && usuario.contraseña==contra.value){   
        acceso=true;             
    }
    return acceso;
}

function entrar(){
        if(acceso=true){
            window.location="about.html";                 
        }else{
            alert('usuario o contraseña incorrecta');
        }
}


        
       






