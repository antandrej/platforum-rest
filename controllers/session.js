const client = require('../connection')

const newSession = async (req, res, next) => {
    try {
        const params = [req.body.title, req.body.name, req.body.time];
        //let insertQuery = `INSERT INTO sessions(title, name, modname, picture) VALUES('${session.title}', '${session.name}', '${session.modname}', '${session.picture}')`;
        const query = `INSERT INTO sessions(title, name, modname, picture, time) VALUES($1, $2, 'Dorothy Peterson', 'assets/images/person1.png', $3)`;

        const sessions = await client.query(query, params);

        res.send('Session added! \n');

        client.end;
    }
    catch (err) {
        console.log(err.message);
    }
};

const getSessions = async (req, res, next) => {
    try {
        const query = 'SELECT * FROM sessions ORDER BY id DESC';

        const sessions = await client.query(query);

        res.send(sessions.rows);

        client.end;
    }
    catch (err) {
        console.log(err.message);
    }
};

const getSession = async (req, res, next) => {
    try {
        const params = [req.params.id];
        const query = `SELECT * FROM sessions WHERE id = $1`;

        const session = await client.query(query, params);

        res.send(session.rows);

        client.end;
    }
    catch (err) {
        console.log(err.message);
    }
};

const updateSession = async (req, res, next) => {
    try {
        const params = [req.body.title, req.body.name, req.body.time, req.params.id];
        const query = `UPDATE sessions SET 
                        title = $1, 
                        name = $2, 
                        time = $3
                        WHERE id = $4`;

        const usession = await client.query(query, params);

        res.send('session updated !\n');

        client.end;
    }
    catch (err) {
        console.log(err.message);
    }
};


module.exports = { newSession, getSessions, getSession, updateSession };