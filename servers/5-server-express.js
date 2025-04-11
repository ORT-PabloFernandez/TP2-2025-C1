import express from "express";
import chalk from "chalk";

const PORT = 3000;

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879 },
  { first: "Isaac", last: "Newton", year: 1643 },
  { first: "Galileo", last: "Galilei", year: 1564 },
  { first: "Marie", last: "Curie", year: 1867 },
  { first: "Johannes", last: "Kepler", year: 1571 },
  { first: "Nicolaus", last: "Copernicus", year: 1473 },
  { first: "Max", last: "Planck", year: 1858 },
];

const html = `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body>
                <h3>Esto es la pagina de documentación de la API Inventores</h3>
            </body>
            </html>
        `;

const app = express();

app.get("/", (req, res) => {
  res.send(html);
});

app.get("/api/inventors/:id", (req, res) => {
  console.log("parametro por querystring", req.query.order);
  console.log("parametro por queryparams", req.params.id);
  res.json(inventors);
});

app.listen(PORT, () => {
  console.log(chalk.bgGreen("Servidor levantado en puerto ", PORT));
});
