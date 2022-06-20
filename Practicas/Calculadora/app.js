//Darle funcionalidad a los botones 


let result_screen=document.getElementById('result');
let botonNumero=document.getElementById('btn_numero');
let botonOperador=document.getElementById('btn_operador');

/*let result=document.getElementById('result');;

let botonBorrarTodo=document.getElementbyId('borrar-todo');
*/

let result=0;
let numero1 = "";
let operador="";
let numero2 = "";
let pantalla= "";
let eval_first_place=true;

function add_character(num_to_add,num1,oper,num2,pant,eval_first_place){
    if(eval_first_place===true){
        num1= num1+ num_to_add;   
    }else{
        num2= num2+ num_to_add;
    }
    
    pant = num1 + oper + num2;
    return [num1,oper,num2,pant]
}

function numero_0(){
    [numero1, operador, numero2, pantalla]=add_character("0",numero1,operador,numero2,pantalla,eval_first_place)
    result_screen.value=pantalla;
}

function numero_1(){
    [numero1, operador, numero2, pantalla]=add_character("1",numero1,operador,numero2,pantalla,eval_first_place)
    result_screen.value=pantalla;
}

function numero_2(){
    [numero1, operador, numero2, pantalla]=add_character("2",numero1,operador,numero2,pantalla,eval_first_place)
    result_screen.value=pantalla;
}

function numero_3(){
    [numero1, operador, numero2, pantalla]=add_character("3",numero1,operador,numero2,pantalla,eval_first_place)
    result_screen.value=pantalla;
}

function numero_4(){
    [numero1, operador, numero2, pantalla]=add_character("4",numero1,operador,numero2,pantalla,eval_first_place)
    result_screen.value=pantalla;
}

function numero_5(){
    [numero1, operador, numero2, pantalla]=add_character("5",numero1,operador,numero2,pantalla,eval_first_place)
    result_screen.value=pantalla;
}

function numero_6(){
    [numero1, operador, numero2, pantalla]=add_character("6",numero1,operador,numero2,pantalla,eval_first_place)
    result_screen.value=pantalla;
}
function numero_7(){
    [numero1, operador, numero2, pantalla]=add_character("7",numero1,operador,numero2,pantalla,eval_first_place)
    result_screen.value=pantalla;
}

function numero_8(){
    [numero1, operador, numero2, pantalla]=add_character("8",numero1,operador,numero2,pantalla,eval_first_place)
    result_screen.value=pantalla;
}

function numero_9(){
    [numero1, operador, numero2, pantalla]=add_character("9",numero1,operador,numero2,pantalla,eval_first_place)
    result_screen.value=pantalla;
}

function operador_sum(){
    eval_first_place=false
    operador=operador+"+";
    pantalla = numero1 + operador + numero2;
    result_screen.value=pantalla;
}

function operador_div(){
    eval_first_place=false
    operador=operador+"/";
    pantalla = numero1 + operador + numero2;
    result_screen.value=pantalla;
}

function operador_mult(){
    eval_first_place=false
    operador=operador+"*";
    pantalla = numero1 + operador + numero2;
    result_screen.value=pantalla;
}

function operador_resta(){
    eval_first_place=false
    operador=operador+"-";
    pantalla = numero1 + operador + numero2;
    result_screen.value=pantalla;
}

/*
const botonBorrar=document.getElementbyId('borrar');
function borrar(num1,oper,num2,pant){
    pantalla.slice(0,-1);
    result_screen.value=pantalla;
}
*/

let botonBorrarTodo=document.getElementbyId('borrar_todo');
function AC(){
    pantalla="";
    result=pantalla;
    result_screen.value=pantalla;
}


let botonIgual=document.getElementbyId('btn_igual');

function igual(){
    if(operador=="+"){
        result=parseInt(numero1)+parseInt(numero2);
    }else if (operador=="-"){
        result=parseInt(numero1)-parseInt(numero2);
    }else if (operador=="*"){
        result=parseInt(numero1)*parseInt(numero2);
    }else if (operador=="/"){
        result=parseInt(numero1)/parseInt(numero2);
    }
    result_screen.value=result;
}



    

