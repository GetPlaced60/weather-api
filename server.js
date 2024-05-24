const express = require('express');
const request = require('request');

const app = express();

app.get('/' , (req, res) => {
    res.send('Dont go outside there is a bad weather');
});

app.listen(3000, () => console.log('Server started on port 3000'));