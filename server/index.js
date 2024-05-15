const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({message: 'Hello world!'});
})

app.get('/greeting', (req, res) => {
    res.send({message: 'Hi from greeting request!'});
})

const PORT = process.env.PORT || 5000;

app.listen(PORT);