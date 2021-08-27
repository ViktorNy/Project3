const express = require('express');
const productsRouter = require('./products.router');

const app = express();

app.use(express.json());

app.use(productsRouter);

app.listen(3000);