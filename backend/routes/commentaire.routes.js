const express = require('express');

const commControllers =  require ( '../controllers/commentairesController');

const multer = require('../middleware/multer-config');
const router =  express.Router();
// const auth = require('../middleware/auth');
// const multer = require('../middleware/multer-config');

//  pour poster un commentaire

router.post('/', commControllers.postCommentaires);


// voir tout les commentaires
router.get('/', commControllers.allcommentaires);

//voir un commentaire
router.get('/:fk_commentaire_messages', commControllers.oneCommentaire);

//modifier son commentaire
router.put('/:fk_commentaire_messages', commControllers.modifyCommentaires);


// pour supprimer son commentaire
router.delete('/:fk_commentaire_messages', commControllers.deleteCommentaires);

//pour liker ou enlever un like d'un commentaire
// router.post('/:id/likes', commControllers.likeCommentaires);





module.exports = router;