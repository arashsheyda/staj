// Express BodyParser

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head><title>Asd</title></head>
            <body>
                <form action="save" method="POST" >
                    <input type="text" name="message" >
                    <input type="submit" value="send" >
                </form>
            </body>
        </html>
    `);
});

app.post('/save', (req, res, next) => {
    console.log(req.body.message);
    res.redirect('/');
});


app.listen('9000', () => {
    console.log('server is running');
});