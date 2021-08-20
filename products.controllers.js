const { postProductToDb, editProductInDb, deleteProductInDb, getProductsFromFile } = require('./InMemoryDb');
const { Response, Request, NextFunction } = require('express');
const fs = require('fs');
// Express is needed to use req, res, and next

/**
 * Responds with all products from Db
 * @param {Response} res 
 * @param {Request} req
 * @param {NextFunction} next 
 */
async function getProducts(req, res, next) {    
    fs.readFile('products.json', 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }
        // parse JSON object
        const products = JSON.parse(data.toString());
        console.log(products);
        res.status(200).json(products);
    });
};

/**
 * Responds with product with correct Id or none
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
function getProduct(req, res, next) {
    const { id } = req.params;

    const products = fs.readFileSync('products.json', 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }
        // parse JSON object
        const products = JSON.parse(data.toString());
        console.log(products);
        res.status(200).json(products);
    });

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
    const productEdited = editProductInDb(id, req.body);
    
    if (productEdited) {
        res.status(200).json('Resource changed successfully');
    } else {
        res.status(404).json('Resource not found');
    }
}

/**
 * For deleting existing product
 * @param {Request} req 
 * @param {Response} res 
 */
function deleteProduct(req, res) {
    const { id } = req.params; 
    const index = products.findIndex((product) => product.id == id);
    const productDeleted = deleteProductInDb(index);

    if (productDeleted) {
        res.status(200).json('Product deleted');
    } else{
        res.status(404).json('Product not found');
    }
}

module.exports = {
    getProducts,
    getProduct,
    postProduct,
    editProduct,
    deleteProduct
}