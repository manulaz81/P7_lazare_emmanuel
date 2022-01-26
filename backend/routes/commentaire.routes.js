const express = require('express');

const commControllers =  require ( '../controllers/commentairesController');

const multer = require('../middleware/multer-config');
const router =  express.Router();


//  pour poster un commentaire

router.post('/',multer, commControllers.postCommentaires);


// voir tout les commentaires
router.get('/', commControllers.allcommentaires);

//voir un commentaire
router.get('/:id', commControllers.oneCommentaire);

//modifier son commentaire
router.put('/:id', commControllers.modifyCommentaires);


// pour supprimer son commentaire
router.delete('/:id', commControllers.deleteCommentaires);

//pour liker ou enlever un like d'un commentaire
router.post('/:id/likes', commControllers.likeCommentaires);





module.exports = router;