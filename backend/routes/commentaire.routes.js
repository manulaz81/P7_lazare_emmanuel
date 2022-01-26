const express = require('express');

const commControllers =  require ( '../controllers/commentairesController');

const router =  express.Router();


// route pour poster un commentaire

router.post('/', commControllers.postCommentaires);


module.exports = router;