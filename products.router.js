const express = require('express');
const {getAllProducts, getProduct, addProduct, editProduct, deleteProduct} = require('./products.controllers');

const router = express.Router();

router.get('/api/products', getAllProducts);

router.get('/api/products/:id', getProduct);

router.post('/api/products', addProduct);
 
router.put('/api/products/:id', editProduct);

router.delete('/api/products/:id', deleteProduct);

module.exports = router;