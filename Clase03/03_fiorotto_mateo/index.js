//ACTIVIDAD 03 - ProductManager y Filesystem
// A partir de la clase una clase ProductManager creada en la actividad 02
// Agregar la funcionalidad de poder guardar los productos en un JSON local y de
// leer los productos de un JSON local

const ProductManager = require('./ProductManager.js');

const products = new ProductManager([]);
// { title: 'TV 32', description: 'TV LG 32', image: 'foto.jpg', price: 54000 }
products.addProduct({ id: 1, title: 'Teclado', description: 'Teclado Mecánico', price: 25000, stock: 10});
products.addProduct({ id: 2, title: 'Mouse', description: 'Mouse RGB', price: 30000, stock: 20});
products.addProduct({ id: 3, title: 'PC', description: 'PC Escritorio', price: 100000, stock: 5});

console.log("PRODUCTOS: ");
console.log(products.getProducts());

console.log("----------------")
let id = 2;
console.log("PRODUCTO POR ID " + id + ": ")
console.log(products.getProductById(id));

//guardar JSON
products.saveProducts();

//leer prods de un json local
console.log("----------------")
products.readProducts();
console.log("PRODUCTOS LEIDOS: ");
console.log(products.getProducts());