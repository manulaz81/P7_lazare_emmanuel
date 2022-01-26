const express = require('express');

const commControllers =  require ( '../controllers/commentairesController');

const router =  express.Router();


// route pour poster un commentaire

router.post('/', commControllers.postCommentaires);

router.get('/', commControllers.getAllCommentaires);
module.exports = router;