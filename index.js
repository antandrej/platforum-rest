const client = require('./connection.js')

const express = require('express');

const bodyParser = require("body-parser");

const routes = require('./routes/session');

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use('/', routes);

/*
app.get('/api/users', (req, res) => {
    client.query('SELECT * FROM usersp ORDER BY id', (err, result) =>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
});
*/
/*
app.get('/api/sessions', (req, res) => {
    client.query('SELECT * FROM sessions ORDER BY id DESC', (err, result) =>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
});
*/
const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port} . . .`));

client.connect();