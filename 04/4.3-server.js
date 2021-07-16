// Basic Middleware

const express = require('express');
const app = express();

app.use('/', (req, res) => {
    res.json('Hello World');
});

// Middleware
app.use((req, res, next) => {
    res.send(`<h1>Not Allowed</h1>`);
});

app.use('/api', (req, res) => {
    res.json('Api');
});

app.listen('9000', () => {
    console.log('server is running');
});