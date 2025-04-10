import http from "http";

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("Hola mundo de servidores web");
    console.log("Se ejecuto la petición y se envio una respuesta");

    res.end();
  })
  .listen(3000, "127.0.0.1", () => {
    console.log("Servidor Web en el puerto 3000 levandado y listo");
  });
