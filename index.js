const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'Welcome'});
})

app.listen(5000)