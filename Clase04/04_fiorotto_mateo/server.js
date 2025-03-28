// Para está actividad vamos a trabajar con la clase ProductManager creada
// anteriormente, con la cual vamos a programar un servidor Web básico con
// algunas rutas para mostrar los productos
// ● Crear un archivos server.js
// ● Implementa un servidor web básico utilizando el módulo http de Node.js
// ● Importa la clase ProductManager y crea una instancia en el servidor
// ● Define las siguientes rutas en el servidor:
// ○ GET /: La cual muestra un mensaje de bienvenida.
// ○ GET /products: La cual devuelva la lista de productos utilizando el
// método getProducts de ProductManager.
// ○ GET /products/:id: La cual devuelva un producto específico por id
// utilizando el método getProductById. Si el producto no existe,
// devuelve un mensaje de error.

//importar productmanager
const { ProductManager } = require('./ProductManager');

const http = require('http');
const port = 3000;
let clientes = 0;

//instanciar productmanager
const admin = new ProductManager();

// ESTE BLOQUE DE CODIGO ESTA COMENTADO, PERO SERIA EN CASO DE QUE EL JSON NO ESTE CARGADO, PORQUE SI NO POR CADA PROD AGREGAMOS UNO NUEVO AL JSON
// const prod1 = {name: 'Television', price: 340};
// const prod2 = {name: 'PC de escritorio', price: 500};

// const guardar = async () => { 
//     const productos = await admin.getProducts();

//    // await admin.setProduct(prod1); 
//    // await admin.setProduct(prod2); 

//     console.log(productos);
// };

// guardar();

//crear servidor. En el ejercicio debe llevar async para indicar que es asincrona
const server = http.createServer(async (req, res) => {
    const url = req.url;
    const method = req.method;
    let body = '';
    let statusCode = 200;
    let content = 'text/html';

    //console.log(url, method);

    if(url === '/'){
        body = '<h1>Bienvenido/a</h1>';

        //productos. Ponemos await para esperar a obtener los productos
    } else if (url === '/products'){
        const data = await admin.getProducts();
        body += JSON.stringify(data) + ", ";
        content = 'application/json';

        //productos id - si la url empieza con /products, entonces:
    } else if (url.startsWith('/products/')) {
        //la id va a ser igual a lo que viene despues de /products/
        const id = url.split('/')[2];
        const data = await admin.getProductById(id); //obtenemos el producto
    
        //si la data es !null es porque el producto existe
        if (data != null) {
            body = JSON.stringify(data);
            content = 'application/json';
        } else {
            content = 'text/html';
            body = '<h1>ERROR 404 - Producto inexistente</h1>';
            statusCode = 404;
        }

        //ruta incorrecta, pero no la misma que un producto que no existe
    }else {
        body = '<h1>ERROR 404 - Ruta no existente</h1>';
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
