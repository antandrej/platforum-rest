const client = require('../connection')

const getUsers = (req, res, next) => {
    client.query('SELECT * FROM usersp ORDER BY id', (err, result) =>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
};

module.exports = {getUsers};