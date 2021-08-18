// InMemory DB
const productIdIndex = 1; // Used for knowing where to set the id on post
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
}

module.exports = {
    products, postProductToDb
};