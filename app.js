const express = require('express');
const morgan = require('morgan');

let info = require('./db/info');

const app = express();

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.json({
        message: "Hello World! 😎"
    })
});

app.get('/getall', (req, res) => {
    info.getAll().then((info) => {
        res.json(info);
    });
    console.log('Test');
});

app.get('/create', (req, res) => {
    info.create().then((info) => {
        res.json(info);
    });

});

const server = app.listen(3000, () =>{
    console.log(`Server started listening on ${server.address().port}`)
});