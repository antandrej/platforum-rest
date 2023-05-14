const express = require('express');
const router  = express.Router(); 
const sessionController = require('../controllers/session'); 


router.post('/api/sessions', sessionController.newSession);

router.get('/api/sessions', sessionController.getSessions);

router.get('/api/sessions/:id', sessionController.getSession);

router.put('/api/sessions/:id', sessionController.updateSession);

module.exports = router;