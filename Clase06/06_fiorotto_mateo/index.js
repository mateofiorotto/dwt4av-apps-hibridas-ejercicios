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
    res.json({message: 'Productos obtenidos', data: products});
});

app.get('/api/products/:id', async (req, res) => {
    const id = req.params.id;
    const product = await admin.getProductById(id);
    
    if (product) {
        res.json({message: 'Producto obtenido', data: product});
    } else {
        res.status(404).json({ message: 'Producto no encontrado', data: []});
    }
});

app.post('/api/products', async (req, res) => {
    try {
        //validar datos
        const product = req.body; // recibimos el producto desde el body

        if (!product.name || !product.price) {
            return res.status(400).json({ message: 'Nombre y precio son obligatorios', data: []});
        } 
        const newProduct = await admin.setProduct(product);
        
        res.status(200).json({ message: 'Producto guardado', data: newProduct});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error del servidor: no se pudo guardar el producto', data: []});
    }
});

app.delete('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    const status = await admin.deleteProductById(id);

    if (status) {
        res.status(200).json({ message: 'Producto eliminado', data: []});
    } else {
        res.status(404).json({ message: 'Producto no encontrado', data: []});
    }
})

//update
app.put('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    if (!product.name || !product.price) {
        return res.status(400).json({ message: 'Nombre y precio son obligatorios', data: []});
    } 

    const status = await admin.updateProductById(id, product);
    
    
    if (status) {
        res.status(200).json({ message: 'Producto actualizado', data: product});
    } else {
        res.status(404).json({ message: 'Producto no encontrado', data: []});
    }
})

const port = 8080;
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});