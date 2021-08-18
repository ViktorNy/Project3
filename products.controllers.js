const { products } = require('./InMemoryDb');
const { Response, Request, NextFunction } = require('express');

// Express is needed to use req, res, and next

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

    const product = db.find((product) => product.id == id)

    if (!product) {
        res.status(404).json('Product not found');
    } else {
        res.status(200).json(product);
    }
};

/**
 * For posting new product
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
function postProduct(req, res) {
    // Check Id and change it to productIdIndex
    console.log(req.body);

    // testing
    res.status(200).json('Gick bra');

    // Increment productIdIndex
}

module.exports = {
    getProducts,
    getProduct,
    postProduct
}