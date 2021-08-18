const { Response, Request, NextFunction } = require('express');
// Express is needed to use req, res, and next

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

/**
 * Responds with all products from Db
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
function getProducts(req, res, next) {
    res.json(products);
};

/**
 * Responds with product with correct Id or none
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
function getProduct(req, res, next) {
    const { id } = req.params;

    const product = products.find((product) => product.id == id)

    if (!product) {
        res.status(404).json('Product not found');
    } else {
        res.status(200).json(product);
    }
};

function postProduct(req, res, next){
    // Check Id and change it to productIdIndex

    // Increment productIdIndex
}

module.exports = {
    getProducts,
    getProduct,
}