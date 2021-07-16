// Creating basic Express Server 

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json('Hello World');
});

app.listen('9000', () => {
    console.log('server is running');
});