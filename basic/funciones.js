// declaracion de funciones

function sumar(a, b) {
  return a + b;
}

console.log(sumar(5, 6));

// puedo asignar a variables una función

const multiplicar = function (a, b) {
  return a * b;
};

console.log(multiplicar(5, 6));

const ejecutarOperacion = function (a, b, operacion) {
  return operacion(a, b);
};

console.log(ejecutarOperacion(5, 3, multiplicar));

// arrow function o funciones flecha

const sumar2 = (x, y) => x + y;
