const client = require('./connection.js')

const express = require('express');

const bodyParser = require("body-parser");

const routes = require('./routes/session');

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use('/', routes);

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port} . . .`));

client.connect();