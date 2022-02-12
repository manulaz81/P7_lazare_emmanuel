const express = require('express');

const userControllers =  require ( '../controllers/usersController');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const router =  express.Router();


// creer un nouvel utilisateur
router.post('/signup',userControllers.signUp);

//utilisateur
router.post('/login',userControllers.login);

//route pour mettre à jour son profil
router.put('/:id',auth,multer, userControllers.modifyUser);

//route pour supprimer son compte
router.delete('/:id',auth, userControllers.deleteUser);

// route pour avoir un utilisateur
router.get('/:id',auth,userControllers.getOneUser);

// route pour avoir tout les utilisateurs
router.get('/',auth,userControllers.getAllUsers);





module.exports = router ;