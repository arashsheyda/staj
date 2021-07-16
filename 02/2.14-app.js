// Route Module

const http = require('http');
const routes = require('./2.14-router');

const server = http.createServer(routes);

const port = 9000;


server.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});