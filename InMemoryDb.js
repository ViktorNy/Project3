// InMemory DB
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

function getProductsFromFile() {
    let products;
    
    fs.readFile('products.json', 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }
        // parse JSON object
        products = JSON.parse(data.toString());
        
        console.log(products);
        return products;
    });
}

function postProductToDb(product) {
    product.id = uuidv4();
    const data = JSON.stringify(product);
    
    fs.writeFile('products.json', data, (err) => {
        if (err) {
            throw err;
        }
        console.log('JSON data is saved');
    });
}

function editProductInDb(id, product) {
    const index = products.findIndex((product) => product.id == id);
    
    if (index > -1) {
        products[index].color = product.color;
        products[index].name = product.name;
        products[index].price = product.price;
        return true;
    } else {
        return false;
    }
}

function deleteProductInDb(index) {
    if (products[index]) {
        products.splice(index, 1);
        return true;
    } else {
        return false;
    }
}

module.exports = {
    getProductsFromFile,
    postProductToDb,
    editProductInDb,
    deleteProductInDb
};