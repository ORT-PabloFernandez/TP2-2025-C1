// var vs let
// let es la mejor opción para declarar variables

let x = 1;

if (x == 1) {
  let x = 10;
  console.log("dentro del bloque", x);
}
//let x = 20;

console.log("fuera del bloque", x);

// constantes
const key = "abc123";

const persona = {
  nombre: "Pedro",
  edad: 34,
};

persona.nombre = "Pepe";

console.log(`Nombre de persona: ${persona.nombre}`);
