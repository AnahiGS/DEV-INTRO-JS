//Ejercicio 2

let num=prompt('Introduce un número');
let i=0;

while (i<=num){
    if(i%5==0){
    console.log(i);
}
    i++;
}
//Ejercicio 3
let num=prompt('Introduce un número');
let i=0;

do{
    if(i%5==0){
        console.log(i);     
    }
i++;
}while (i<=num);

//Ejercicio 4

var contador=0
for (var index=1; index<=50; index++){
    if(index%2 !==0){
        contador=contador+1;
        console.log(index);
    }
}