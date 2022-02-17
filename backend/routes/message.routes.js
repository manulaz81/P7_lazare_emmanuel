const express = require('express');

const messControllers =  require ( '../controllers/messageController');

const router =  express.Router();

// const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


//  post d'un message
router.post('/',multer, messControllers.postMessage);

// voir tout les messages
router.get('/', messControllers.allMessage);

//voir un message
router.get('/:fk_message_users', messControllers.oneMessage);

//modifier son message

router.put('/:fk_message_users',multer, messControllers.modifyMessage);

//  suppression d'un message
router.delete('/:fk_message_users', messControllers.deleteMessage);

module.exports = router;