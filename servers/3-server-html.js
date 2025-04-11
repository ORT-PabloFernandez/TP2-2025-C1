import http from "http";

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    //TODO: En lugar de tener el html harcodeado, utilizar file-system para leer el archivo y a continuación enviarlo
    res.write(`
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body>
                <h3>Esto es un html</h3>
            </body>
            </html>
        `);

    res.end();
  })
  .listen(3000, "127.0.0.1", () => {
    console.log("Servidor Web en el puerto 3000 levandado y listo");
  });
