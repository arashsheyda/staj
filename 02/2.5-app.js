// Path Module

const path = require('path');

let result = path.resolve('2.5-app.js');
result = path.extname('2.5-app.js');
result = path.parse(__filename);

console.log(result);
// {
//     root: 'C:\\',
//     dir: 'C:\\Users\\user\\dir...',
//     base: '2.5-app.js',
//     ext: '.js',
//     name: '2.5-app'
//   }