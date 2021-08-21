const { postProductToDb, editProductInDb, deleteProductInDb, getProductsFromFile } = require('./InMemoryDb');
const { Response, Request, NextFunction, json } = require('express');
// Express is needed to use req, res, and next
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

/**
 * Responds with all products from Db
 * @param {Response} res 
 * @param {Request} req
 * @param {NextFunction} next 
 */
async function getProducts(req, res, next) {
    let products = readFromJson();
    let productString = JSON.parse(products.toString());
    res.status(200).json(productString);
};

/**
 * Responds with product with correct Id or none
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
function getProduct(req, res, next) {
    const { id } = req.params;
    const products = readFromJson();

    // Parse JSON-string into an array
    const productArray = JSON.parse(products);

    // Find the product searched for
    const product = productArray.find((product) => product.id == id)

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
    let product = req.body;
    product.id = uuidv4();
    const products = readFromJson();

    // Parse JSON-string into an array
    let productArray = JSON.parse(products);
    productArray.push(product);
    let addProductArray = JSON.stringify(productArray);

    writeToJson(addProductArray);

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
    const products = readFromJson();
    const productArray = JSON.parse(products);
    const product = req.body;

    // Find index of product to be edited
    const index = productArray.findIndex((product) => product.id == id);

    if (index < 0) {
        res.status(404).json('Product not found');
    } else {
        productArray[index].color = product.color;
        productArray[index].name = product.name;
        productArray[index].price = product.price;
        const productArrayString = JSON.stringify(productArray);
        writeToJson(productArrayString);
        res.status(200).json('Product edited');
    }
}

/**
 * For deleting existing product
 * @param {Request} req 
 * @param {Response} res 
 */
function deleteProduct(req, res) {
    // Fetch ID from params
    const { id } = req.params;
    const products = readFromJson();

    // Parse to array
    const productArray = JSON.parse(products);

    // Delete product from array with correct id
    const index = productArray.findIndex((product) => product.id == id);

    if (index < 0) {
        res.status(404).json('Product not found');
    } else {
        productArray.splice(index, 1);
        let deletedProductString = JSON.stringify(productArray);
        writeToJson(deletedProductString);
        res.status(200).json('Product successfully deleted');
    }
}

function readFromJson() {
    const products = fs.readFileSync('products.json', 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }
    });
    return products;
}

function writeToJson(products) {
    fs.writeFileSync('products.json', products, (err) => {
        if (err) {
            throw err;
        }
    });
}

module.exports = {
    getProducts,
    getProduct,
    postProduct,
    editProduct,
    deleteProduct
}