const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(fileUpload({ createParentPath: true }));

module.exports = app