const { products, postProductToDb, editProductInDb, deleteProductInDb } = require('./InMemoryDb');
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

    const product = products.find((product) => product.id == id)

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
    postProductToDb(req.body);
    res.status(202).json('Product added succesfully');
}

/**
 * For editing existing product
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
function editProduct(req, res) {
    const { id } = req.params;

    // Find index for product to edit
    const index = products.findIndex((product) => product.id == id);

    if (index < 0) {
        res.status(404).json('Resource not found');
    } else {
        // edit product
        const productEdited = editProductInDb(index, req.body);
        if (productEdited) {
            res.status(200).json('Resource changed successfully');
        }
    }
}

/**
 * For deleting existing product
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
function deleteProduct(req, res, next) {
    const { id } = req.params; 

    const index = products.findIndex((product) => product.id == id);

    deleteProductInDb(index);

    res.status(200).json('Product deleted');
}

module.exports = {
    getProducts,
    getProduct,
    postProduct,
    editProduct,
    deleteProduct
}