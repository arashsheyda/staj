// Htpp Module

const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.write('Hello World!');
        res.end();
    }
});

const port = 9000;


server.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});