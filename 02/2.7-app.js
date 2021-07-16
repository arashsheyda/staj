// File System Module

const fs = require('fs');


// Read Directory
// const files = fs.readdir('./', (err, res) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(res);
//     }
// });

// Read File
// const file = fs.readFile('./index.html', 'utf8', (err, res) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(res);
//         // <Buffer 3c 21 44 4f 43 54 59 50 45 20 68 74 6d 6c 3e 0d 0a 3c 68 74 6d 6c 20 6c 61 6e 67 3d 22 65 6e 22 3e 0d 0a 3c 68 65 61 64 3e 0d 0a 20 20 20 20 3c 6d 65 ... 299 more bytes>
//     }
// });

// Read File with Utf8 Format
// const file = fs.readFile('./index.html', 'utf8', (err, res) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(res);
//         // <!DOCTYPE html>
//         // <html lang="en">
//         // <head>
//         //     <meta charset="UTF-8">
//         //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         //     <script src="app.js"></script>
//         //     <script src="server.js"></script>
//         //     <title>Document</title>
//         // </head>
//         // <body>
            
//         // </body>
//         // </html>
//     }
// });

// Write File | Create New File if not exsist and if it does, it will delete and create new one!
// fs.writeFile('ex.txt', 'Hi there...', (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('file has been created!');
//     }
// });

// Append File | Create New File if not exsist and if it does, it will append the text to old one!
// fs.appendFile('append.txt', 'Hi there...', (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('file has been created!');
//     }
// });

// Delete File
// fs.unlink('ex.txt', (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('File has been deleted!');
//     }
// });

// Rename File
// fs.rename('ex.txt', 'ex-1.txt', (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('File Name has been changed!');
//     }
// });