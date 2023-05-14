const client = require('../connection')

const newSession = (req, res, next) => {
    const session = req.body;
    //let insertQuery = `INSERT INTO sessions(title, name, modname, picture) VALUES('${session.title}', '${session.name}', '${session.modname}', '${session.picture}')`;
    let insertQuery = `INSERT INTO sessions(title, name, modname, picture, time) VALUES('${session.title}', '${session.name}', 'Dorothy Peterson', 'assets/images/person1.png', '${session.time}')`;

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

const getSession = (req, res, next) => {
    client.query(`SELECT * FROM sessions WHERE id = ${req.params.id}`, (err, result) =>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
};

const updateSession = (req, res, next) => {
    let session = req.body;
    let updateQuery =   `UPDATE sessions SET 
                        title = '${session.title}', 
                        name = '${session.name}', 
                        time = '${session.time}'
                        WHERE id = ${session.id}`;
    
    client.query(updateQuery, (err, result) =>{
        if(!err){
            res.send('session updated !');
        }
        else{
            res.send(err.message);
        }
    });
    client.end;
};


module.exports = {newSession, getSessions, getSession, updateSession};