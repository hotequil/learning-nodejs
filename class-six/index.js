const { app } = require("./server");
const routes = require("./routes");
const port = process.env.PORT || 4000;

app.use('/', routes);

app.get('*', (request, response) =>
    response.json({ error: 'Invalid path' })
);

app.listen(port, () => console.log('Server started'));
