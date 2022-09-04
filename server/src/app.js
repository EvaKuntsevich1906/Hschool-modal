
const bodyParser = require("body-parser");
const express = require("express");
const api = require("./api/api.controller")
const app = express();

app.use((request, response, next) => {
    response.header(`Access-Control-Allow-Origin`, `*`);
    next()
})
app.use(bodyParser.json());

app.use ("/api", api)

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});

module.exports = app;