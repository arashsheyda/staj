// Url Module

const url = require('url');

const urlStr = 'https://rubistu.com';

const result = url.parse(urlStr, true);
// true Objecte çeviriyor.



console.log(result);
// Url {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'rubistu.com',
//     port: null,
//     hostname: 'rubistu.com',
//     hash: null,
//     search: null,
//     query: [Object: null prototype] {},
//     pathname: '/',
//     path: '/',
//     href: 'https://rubistu.com/'
//   }