// Basic Express Rotuer

const express = require('express');
const app = express();

const routes = require('./4.6-router');

app.use(routes);



app.listen('9000', () => {
    console.log('server is running');
});