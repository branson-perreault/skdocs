const express = require('express');
const app = express();
const port = 3020;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api', (req, res) => {
    res.send({data: 'Hello World!'});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});