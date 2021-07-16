// Events Module

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// // Save Listener
// emitter.on('connection', () => {
//     console.log('server is running...');
// });

// emitter.on('sayMyName', (args) => {
//     console.log('Im the cook! now SAY MY NAME');
//     setTimeout(() => {
//         console.log(args);
//     }, 1500);
//     setTimeout(() => {
//         console.log('you god damn right!!!');
//     }, 3000);
// });

// // Trigger Event
// // emitter.emit('connection');
// emitter.emit('sayMyName', 'heisenberg');


const Logger = require('./2.8-logger');
const logger = new Logger();

logger.on('sayMyName', (args) => {
    console.log('Im the cook! now SAY MY NAME');
    setTimeout(() => {
        console.log(args);
    }, 1500);
    setTimeout(() => {
        console.log('you god damn right!!!');
    }, 3000);
});

logger.log('heisenberg');