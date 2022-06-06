//Ejercicio 1
var animals=['eagle','parrot','monkey','boar','lion'];
var comingSoonAnimals=['panter','dragon','turtle'];
var concatenado=animals.concat(comingSoonAnimals);

console.log(concatenado);

//Ejercicio 2
var arr=[4,6,1,0,8,2];
var newArray=arr.sort(function(a,b){return a-b});
console.log(newArray);

//Ejercicio 3
var animals=['eagle','parrot','monkey','boar','lion'];
animals.push('cow');

//Ejercicio 4
var animals=['eagle','parrot','monkey','boar','lion'];
animals.pop('eagle');