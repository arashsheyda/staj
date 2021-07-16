const fs = require('fs');
const qs = require('querystring');

const router = (req, res) => {
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
};

module.exports = router;