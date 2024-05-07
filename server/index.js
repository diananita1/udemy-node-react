const express = require('express');

const app = express();
const port = 5000;

app.get('/greeting', (req, res) => {
    res.send({message: 'Hi from get request!'});
})

app.listen(port);