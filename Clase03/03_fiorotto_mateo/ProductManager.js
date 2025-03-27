const fs = require('fs');

class ProductManager {
    products = [];

    constructor(products) {
        this.products = products;
    }
    
    addProduct(product) {
        if (this.products.find(prod => prod.id == product.id)) {
            console.log('El producto ya existe. No pudo ser creado el producto: ' + product.title);
            return;
        }

        this.products.push(product);

    }

    //guardar JSON
    saveProducts() {
        fs.writeFileSync('clase03/products.json', JSON.stringify(this.products));
        console.log('Productos guardados en el archivo');
    }

    //leer prods de un json local
    readProducts() {
        //fs.readFile() --> Sync soluciona el callback de manera sincrona pero solo en estos casos, luego al usar bds y eso es mejor usar promesas
        //async, await
        this.products = JSON.parse(fs.readFileSync('clase03/products.json', 'utf-8'));
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        if (!this.products.find(product => product.id == id)) {
            console.log('No se encontro el producto con el id: ' + id);
            return;
        }
        
        return this.products.find(product => product.id == id);
    }
}

module.exports = ProductManager;
