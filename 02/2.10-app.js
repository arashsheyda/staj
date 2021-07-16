// Request & Response

const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
//    res.setHeader('Content-Type', 'text/plain');
//    res.statusCode = 200;
//    res.statusMessage = 'OK';
//    res.end('OK');
    fs.readFile('index.html', (err, file) => {
        if(err) {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.statusMessage = 'Not Found';
            res.end('file not found!');
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.statusCode = 200;
            res.statusMessage = 'OK';
            res.end(file);
        }
    });
});

const port = 9000;


server.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});