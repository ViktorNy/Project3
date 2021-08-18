const express = require('express');
const productsRouter = require('./products.router');

// Create server application
const app = express();

// Parse incoming JSON
app.use(express.json());

// Add resources
app.use(productsRouter);

// InMemory DB
const products = 
[
    {
        "id": 1,
        "name": "towel",
        "color": "red",
        "price": 100
    }
]

// Start server
app.listen(3000, () => {
    console.log('Server is running. . .'); // Logging tests
    console.log(products); // Testing
});