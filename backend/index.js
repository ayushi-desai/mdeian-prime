const express = require('express');
const eratosthenes = require('./routes/api/eratosthenes');

const app = express();
const port = 3001;

app.get('/', function (req, res) {
    res.send('Hello, Median of Prime Numbers.');
});

app.get('/medianprimes', eratosthenes.getPrimeMedian);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

module.exports = app