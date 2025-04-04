import fs from 'fs/promises';
const path = './products.json';

export class ProductManager {
    products = [];
    constructor( products=[]){
        this.products = products;
    }

    randomID(){
        return crypto.randomUUID();
    }
    async setProduct(product){
        try {
            await this.getProducts();
            product.id = this.randomID();
            this.products.push( product);
            const data = JSON.stringify(this.products, null, 2);
            
            await fs.writeFile(path, data);
            return product.id
        } catch (error) {
            console.error('No pudimos guardar el archivo');
            console.log(error)
        }
    }
    async getProducts(){
        try {
            const data = await fs.readFile(path, 'utf-8');
            this.products = JSON.parse(data);
            return this.products;
        } catch (error) {
            console.error('No pudimos leer el archivo')
        }
    }
    async getProductById(id){
        const list = await this.getProducts();
        const product = list.find( item => item.id == id);
        return product ? product : undefined;
    }
    async deleteProductById(id){
        await this.getProducts();
        const index = this.products.findIndex( item => item.id == id);

        if(index != -1){
            this.products.splice(index, 1);
            const data = JSON.stringify(this.products, null, 2);

            await fs.writeFile(path, data);
            return true
        } else {
            return false;
        }
    }
    async updateProductById(id, product){
        await this.getProducts();
        const index = this.products.findIndex( item => item.id == id);

        if(index !== -1){
            this.products[index].name = product.name;
            this.products[index].price = product.price;

            const data = JSON.stringify(this.products, null, 2);

            await fs.writeFile(path, data);
            return true;
        } else {
            return false;
        }

    }
}
// las lista es solo a modo ejemplo
export const lista = [1,2,3];
//module.exports =  { ProductManager, lista };
/* Versión larga
module.exports =  { 
    ProductManager: ProductManager, 
    lista: lista 
};
*/