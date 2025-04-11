import http from "http";

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

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        res.writeHead(200, { "content-type": "text/html" });
        res.write(html);
        break;
      case "/api/inventors":
        res.writeHead(200, { "content-type": "application/json" });
        res.write(JSON.stringify(inventors));
        break;
      default:
        res.writeHead(404, { "content-type": "text/html" });
        res.write("<h3>404 Recurso no encontrado</h3>");
        break;
    }

    res.end();
  })
  .listen(3000, "127.0.0.1", () => {
    console.log("Servidor Web en el puerto 3000 levandado y listo");
  });
