const client = require('./connection.js')
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.json());

app.get('/api/users', (req, res) => {
    client.query('SELECT * FROM usersp ORDER BY id', (err, result) =>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
});

app.get('/api/sessions', (req, res) => {
    client.query('SELECT * FROM sessions ORDER BY id DESC', (err, result) =>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
});

app.post('/api/sessions', (req, res) => {
    const session = req.body;
    //let insertQuery = `INSERT INTO sessions(title, name, modname, picture) VALUES('${session.title}', '${session.name}', '${session.modname}', '${session.picture}')`;
    let insertQuery = `INSERT INTO sessions(title, name, modname, picture) VALUES('${session.title}', '${session.name}', 'Dorothy Peterson', 'assets/images/person1.png')`;

    client.query(insertQuery, (err, result) =>{
        if(!err){
            res.send('Session added!');
        }
        else{
            res.send(err.message);
        }
    });
    client.end;
});

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port} . . .`));

client.connect();