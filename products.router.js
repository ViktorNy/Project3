// Import modules
const express = require('express');
const {getProducts, getProduct, postProduct, editProduct, deleteProduct} = require('./products.controllers');

// Create router object
const router = express.Router();

// Define endpoints: 
// GET
router.get('/api/products', getProducts);

// GET with Id
router.get('/api/products/:id', getProduct);

// POST
router.post('/api/products', postProduct);

// PUT 
router.put('/api/products/:id', editProduct);

// DELETE
router.delete('/api/products/:id', deleteProduct);

// Export router object
module.exports = router;