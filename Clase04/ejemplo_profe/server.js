//NORMALMENTE NO SE DEJAN ESTOS DATOS HARDCODEADOS, SI NO, EN EL .ENV
const http = require('http');
const port = 3000;
let clientes = 0;

//crear servidor
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    let body = '';
    let statusCode = 200;
    let content = 'text/html';

    //console.log(url, method);

    if(url === '/'){
        body = '<h1>Home</h1>';
    } else if (url === '/products'){
        content = 'application/json';
        const data = {name: 'TV', price: 340}
        body += JSON.stringify(data);
    } else {
        body = '<h1>ERROR 404</h1>';
        statusCode = 404;
    }

    //responde a la peticion del cliente con un 200 y el contenido. Puede ser HTML, JSON, texto plano...
    res.writeHead(statusCode, { 'Content-Type': content });
    res.end(body);

    console.log("Clientes conectados: " + clientes);
    clientes++;
});

server.listen(port, () => {
    //el servidor escucha en el puerto:
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

console.log("Fin del script");
