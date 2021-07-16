// Send Response

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
    fs.writeFileSync('input.txt', 'logger text');
    res.statusCode = 302;
    res.setHeader('Lcoation', '/');
   }
});

const port = 9000;


server.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});