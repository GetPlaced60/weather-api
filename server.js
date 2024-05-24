const express = require('express');
const request = require('request');

const app = express();

app.get('/' , (req, res) => {
    res.send('Hello, The sky is not clear today');
});

app.listen(3000, () => console.log('Server started on port 3000'));