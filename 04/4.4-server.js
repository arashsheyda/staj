// Basic Routes

const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send(`<a href="/about">About</a>`);
});

app.get('/about', (req, res) => {
    res.send(`<a href="/contact">Contact</a>`);
});

app.get('/contact', (req, res) => {
    res.send(`<a href="/">Home</a>`);
});

app.listen('9000', () => {
    console.log('server is running');
});