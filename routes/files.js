const express = require('express');
const router  = express.Router(); 
const filesController = require('../controllers/files'); 

router.post('/api/uploads/:id', filesController.uploadFile);

module.exports = router;