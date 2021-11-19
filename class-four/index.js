const http = require('http');
const fs = require('fs');
const port = process?.env?.PORT || 4000;

const server = http.createServer((request, response) => {
    // fs.readFile('index.html', (error, file) => {
    //     response.writeHead(200, {'Content-Type': 'text/html'});
    //     response.write(file);
    //
    //     return response.end();
    // });

    fs.appendFile('text.txt', 'Hello world', error => {
        if(error) throw error;

        console.log('Created file');

        response.end();
    })
});

server.listen(port, () => console.log('Server started'));
