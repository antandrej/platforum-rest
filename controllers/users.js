const client = require('../connection')

const getUsers = async (req, res, next) => {
    try {
        const query = 'SELECT * FROM usersp ORDER BY id'

        const users = await client.query(query);

        res.send(users.rows);

        client.end;
    }
    catch (err) {
        console.log(err.message);
    }
};

module.exports = { getUsers };