"use strict";

// Tipos de datos en javascript
// Number, String, Boolean, Symbol, Null, Undefined, Object
// Java script es un lenguaje dinamico

// NUMBER
let var1 = 10;
let var2 = 0;
let var3 = -0;

console.log("División por cero: 10 / 0  = ", var1 / var3);
console.log("Division por cero / cero = ", var2 / var3);
//console.log(typeof (var1 / var3));
console.log("Raiz de (-1) : ", Math.sqrt(-1));

// STRING
let saludo = "Hola mundo";
// backtic `
let saludo2 = `hola mundo esto es un numero ${var1} 
                y esto es otro ${var2} 
                y ademas esto es una división ${var1 / var2} 😎`;

console.log(saludo2);

// NULL : Representa la ausencia de valor
let nulo = 45;
nulo = null;
console.log(nulo);

// Undefined
let nodefinida;
console.log(nodefinida);
console.log(saludo2.pepito);

// usar variables sin declarar, mala practica
let casa = "mi casa";
console.log(casa);

// Conversiones implicitas y explicitas ....

console.log("Que pasa si sumo un numero a un string: ", var1 + true);
console.log("Quiero convertir una cadena en numero: 23443", parseInt("23443"));

// declaracion de objetos
let actor = {
  nombre: "Juan ",
  edad: 34,
};

console.log(`El nombre del actor es: ${actor.nombre} y su edad: ${actor.edad}`);
let propNombre = "nombre";
let propEdad = "edad";
console.log(
  `El nombre del actor es: ${actor[propNombre]} y su edad: ${actor[propEdad]}`
);
