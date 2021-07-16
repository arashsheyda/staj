const express = require('express');
const path = require('path');

const routes = require('./routes/4.8-router');
const m404 = require('./middlewares/404');

const app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
app.use(m404);


app.listen('9000', () => {
    console.log('server is running');
});