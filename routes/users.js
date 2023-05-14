const express = require('express');
const router  = express.Router(); 
const usersController = require('../controllers/users'); 

router.get('/api/users', usersController.getUsers);

module.exports = router;