const express = require('express');

const messControllers =  require ( '../controllers/messageController');

const router =  express.Router();

const auth = require('../middleware/auth');
// const multer = require('../middleware/multer-config');


//  post d'un message
router.post('/',auth, messControllers.postMessage);

// voir tout les messages
router.get('/', messControllers.allMessage);

//voir un message
router.get('/:id', messControllers.oneMessage);

//modifier son message

router.put('/', messControllers.modifyMessage);

//  suppression d'un message
// router.delete('/', messControllers.deleteMessage);

module.exports = router;