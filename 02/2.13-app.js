// Parsing Request Body

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
   const url = req.url;
   const method = req.method;

   if(url == '/') {
        res.write(`
            <html>
                <body>
                    <form action="/logger" method="POST" >
                        <input type="text" name="message" >
                        <input type="submit" value="send" >
                    </form>
                </body>
            </html>
        `);
        return res.end();
   }

   if(url === '/logger' && method === 'POST') {
        
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const bodyParsed = Buffer.concat(body).toString();
            const message = bodyParsed.split('=')[1];
            fs.writeFileSync('input.txt', message);
        });

        res.statusCode = 302;
        res.setHeader('Lcoation', '/');
   }
});

const port = 9000;


server.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});