/**
 * Crea una función para encuentrar la diferencia de edad entre el miembro mas viejo y el más jóven de la familia
 * y regresa como resultado, sus respectivas edades y la diferencia de edad. 
 * 
 */

 const Family = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56
    },
    {
      name: 'Rachel',
      age: 45
    },
    {
      name: 'Nate',
      age: 67
    },
    {
      name: 'Jeniffer',
      age: 65
    },
    {
      name: 'Martha',
      age: 25
    }
  ];

function edadDiferencia(){

}

Family.forEach(age)=>{
    console.log(Family, age)
}

/**
 * Del siguiente arreglo de numeros, retorna la suma de todos los que son positivos. 
 */

const numbers = [ 1, -4, 12, 0, -3, 29, -150];
suma=0
function sumatoria(){
for(i=0;i<numbers.length;i++){
numbers=numbers[i];
if(numbers>0){
    suma+=numbers;   
}else
}
console.log(suma);
}

/*
*
* Dadas dos matrices de enteros, encuentra qué elementos faltan en la segunda matriz de la primera matriz.

  Ejemplo

  La matriz es la lista original. Los números que faltan son

  matriz = [7,2,5,3,5,3]

  br = [7,2,5,4,6,3,5,3]

Los números que faltan en arr son [4,6]
*/


/**
 * Del siguiente arreglo, retorna un objeto donde retorne unicamente los elementos sin repetir y el valor sea las ocurrencias
 * que encontró dentro de ese arreglo. 
 * 
 * 
 * Resultado esperado:
 *  {
      one: 4,
      two: 3,
      three: 1,
      ...
    }
 */

 const arr = ['one', 'two', 'one', 'one', 'two', 'three', 'five', 'seven', 'five', 'ten', 'nine', 'one', 'two', 'four'];
let ocurrencias=0
function unicos(){
    console.log(arr.sort);
    for(i=0;i<arr.length;i++){
    arr=arr[i];
    if (arr[i + 1] === arr[i]) {
    ocurrencias+=1
}
console.log()
}


 /**
  * Write a function that combines two lists by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3]
  * Escribe una funcion que combine dos listas de arreglos alternando los elementos de cada una:
  * const a = [1,2,3]
  * const b = [a,b,c]
  * 
  * Resultado esperado:
  * 
  * 
  * [1,a,2,b,3,c]
  */
  const a = [1,2,3]
  const b = [a,b,c]
  function unidos(array1,array2){
     let newArray=(a.slice(0)+ b.slice(0) + a.slice(1)+ b.slice(1)+a.slice(2)+ b.slice(2));

  }
  console.log(newArray)