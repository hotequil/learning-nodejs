const http = require('http');
const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('say-hi', () => console.log('Hi!'));

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.write('<h1>NodeJS</h1>');

    eventEmitter.emit('say-hi');

    response.end();
});

server.listen(4000, () => console.log('Server running'));
