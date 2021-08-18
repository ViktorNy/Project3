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

module.exports = {
    products, postProductToDb
};