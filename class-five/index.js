const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (request, response) => {
    response.send('Hello world');
});

app.get('/list', (request, response) => {
    response.json({
        data: [1,2,3,4,5]
    });
});

app.listen(port);
