const express = require('express');
const app = express();

const products = 
[
    {
        "id": 1,
        "name": "towel",
        "color": "red",
        "price": 100,
    },
    {
        "id": 2,
        "name": "toy car",
        "color": "blue",
        "price": 50,
    }
]

app.listen(3000, () => {
    console.log('Server is running. . .');
    console.log(products);
});