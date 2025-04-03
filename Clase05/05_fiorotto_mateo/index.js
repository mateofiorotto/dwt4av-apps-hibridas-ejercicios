// Actividad 05 - Servidor Web con Express
// Para está actividad vamos a seguir trabajando con la clase ProductManager,.
// A diferencia de la Actividad 04 vamos a programar un servidor Web básico con
// Express para mostrar los productos
// ● Crear un proyecto de npm
// ● Crear un archivos index.js
// ● Instalar express
// ● Importa la clase ProductManager y crea una instancia en index.js
// ● Define las siguientes rutas en el servidor con express:
// ○ GET /api/products: La cual devuelva la lista de productos utilizando
// el método getProducts de ProductManager.
// ○ GET /api/products/:id: La cual devuelva un producto específico por
// id utilizando el método getProductById. Si el producto no existe,
// devuelve un mensaje de error.
// ○ POST /api/products: La cual agrega un nuevo producto. Recibe los
// datos del producto en el cuerpo de la solicitud en formato JSON y los
// agrega a la lista utilizando addProduct y Devuelve el producto
// agregado o un mensaje de error si la validación falla

//importar express y productmanager
import express from 'express';
import { ProductManager } from './ProductManager.js';

const app = express();
app.use(express.json());

const admin = new ProductManager();

app.get('/', (req,res) => {
    res.send("Hola, bienvenido a esta API Basica, proba los endpoints api/products (GET y POST). /api/products/:id (GET)")
})

app.get('/api/products', async (req, res) => {
    const products = await admin.getProducts();
    res.json(products);
});

app.get('/api/products/:id', async (req, res) => {
    const id = req.params.id;
    const product = await admin.getProductById(id);
    res.json(product);
});

app.post('/api/products', async (req, res) => {
    const product = req.body;
    //console.log(product);
    const newProduct = await admin.setProduct(product);
    res.json(newProduct);
});

const port = 8080;
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});