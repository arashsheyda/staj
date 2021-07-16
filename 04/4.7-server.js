// 404 page Not Found Middleware

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json('Hello World!');
});

app.use((req, res) => {
    res.status(404);
    res.json('404 not found!');
});


app.listen('9000', () => {
    console.log('server is running');
});