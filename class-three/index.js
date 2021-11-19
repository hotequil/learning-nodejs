const http = require('http');
const url = require('url');
const port = 4000;
const host = '127.0.0.1';
const SUCCESS_CODE = 200;
const DEFAULT_URL = '/';
const removeQueryParams = url => url.split('?')[0];

const server = http.createServer((request, response) => {
    const { url: requestUrl } = request;
    const queryParams = url.parse(requestUrl, true).query;

    response.writeHead(SUCCESS_CODE, { 'Content-Type': 'text/html' });

    if(DEFAULT_URL === removeQueryParams(requestUrl)) response.write('<h1>Hello world (home)</h1>');
    else response.write('<h1>World hello (other page)</h1>');

    response.write(`<h2>ID: ${queryParams.id}</h2>`);
    response.end();
});

server.listen(port, host, () => console.log('Server started'));
