// cons fs = require("fs"); // por defecto sino pongo el type. Es el type: commonjs
import fs from "fs"; // siempre y cuando este el type: module en el package.json

let datos = fs.readFileSync("texto.txt", "utf-8");

console.log(datos);

datos += "\n esto es otra linea";

fs.writeFileSync("texto.txt", datos);

console.log(fs.readFileSync("texto.txt", "utf-8"));
