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

        //filesystem 
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
