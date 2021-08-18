// InMemory DB
let productIdIndex = 1; // Used for knowing where to set the id on post
const products =
    [
        {
            "id": 0,
            "name": "towel",
            "color": "red",
            "price": 100
        }
    ]

function postProductToDb(product) {
    product.id = productIdIndex;
    productIdIndex++;

    products.push(product);
}

function editProductInDb(index, product){
    // Need to add null checks

    products[index].color = product.color;
    products[index].name = product.name;
    products[index].price = product.price;

    // return true if successful false if not
    return true;
}

module.exports = {
    products, 
    postProductToDb,
    editProductInDb
};