const client = require('../connection')

const newSession = (req, res, next) => {
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
};

const getSessions = (req, res, next) => {
    client.query('SELECT * FROM sessions ORDER BY id DESC', (err, result) =>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
};


module.exports = {newSession, getSessions};