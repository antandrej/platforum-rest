const client = require('./connection.js')

const express = require('express');

const bodyParser = require("body-parser");

const sessionsRouter = require('./routes/session.js');
const usersRouter = require('./routes/users.js');

const app = express();

app.use(bodyParser.json());
app.use(express.json());

app.use('/', sessionsRouter);
app.use('/', usersRouter);


const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port} . . .`));

client.connect();