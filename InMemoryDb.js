// InMemory DB
const { v4: uuidv4 } = require('uuid');

const products =
    [
        {
            "id": '64111a08-0136-47b5-830d-bf9de2e02bfd',
            "name": "towel",
            "color": "red",
            "price": 100
        }
    ]

function postProductToDb(product) {
    product.id = uuidv4();
    products.push(product);
}

// -- method needs fixing, return false if unsuccesful
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
    products,
    postProductToDb,
    editProductInDb,
    deleteProductInDb
};