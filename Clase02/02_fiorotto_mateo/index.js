// Actividad 02 - Clases y objetos
// Crear una clase ProductManager que gestione una lista de productos.
// Debe crearse desde su constructor con el elemento products, el cual será un
// array vacío.
// PROPIEDADES
// ● products = [] (array vacío )
// MÉTODOS:
// ● addProduct el cual agregará un producto al arreglo de productos. Validar
// que no se repita el campo “id” y que todos los campos sean obligatorios
// ● getProducts el cual debe devolver el arreglo con todos los productos
// creados hasta ese momento
// ● getProductById el cual debe buscar en el arreglo el producto que coincida
// con el id. En caso de no coincidir ningún id, mostrar en consola un error
// “Not found”
// ● Exportar la Clases con CommonJS
// ● Crear un Archivos index.js el cual importará la Clase ProductManager
// ● En main.js crear una instancia de la clase y probar los métodos
// Cada Producto que se agregara al array tendrán el siguiente formato
// {
// id:1,
// title: 'Teclado',
// description: 'Teclado Mecánico',
// price: 25000,
// stock: 25
// }

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