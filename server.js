const express = require('express');
const productsRouter = require('./products.router');

// Create server application
const app = express();

// Parse incoming JSON
app.use(express.json());

// Add resources
app.use(productsRouter);

// Start server
app.listen(3000, () => {
    console.log('Server is running. . .'); // Logging tests
});