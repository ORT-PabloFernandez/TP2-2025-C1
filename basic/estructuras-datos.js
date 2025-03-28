// arrays, arrays de objetos

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879 },
  { first: "Isaac", last: "Newton", year: 1643 },
  { first: "Galileo", last: "Galilei", year: 1564 },
  { first: "Marie", last: "Curie", year: 1867 },
  { first: "Johannes", last: "Kepler", year: 1571 },
  { first: "Nicolaus", last: "Copernicus", year: 1473 },
  { first: "Max", last: "Planck", year: 1858 },
];

//imprima en formato tabular
function printInventores(inventores) {
  console.log("Nombre      Apellido       Año");
  console.log("---------------------------------");
  //   for (const inventor of inventores) {
  //     console.log(
  //       `${inventor.first.padEnd(12, " ")}${inventor.last.padEnd(12, " ")}${
  //         inventor.year
  //       }`
  //     );
  //   }
  inventores.forEach((inventor) =>
    console.log(
      `${inventor.first.padEnd(12, " ")}${inventor.last.padEnd(12, " ")}${
        inventor.year
      }`
    )
  );
}

// TODO:Filtrar los inventores nacidos antes del 1800
// function filtrarNacidos1800(inventores) {
//   return inventores.filter((inventor) => inventor.year <= 1800);
// }
//printInventores(inventors.filter((inventor) => inventor.year <= 1800));

console.table(
  inventors
    .map((inventor) => ({
      NombreCompleto: `${inventor.first} ${inventor.last}`,
      year: inventor.year,
    }))
    .filter((inventor) => inventor.year <= 1800)
);
