const http = require('http');

http.createServer((request, response) => {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write('Hello world');
        response.end();
    })
    .listen(5000);
