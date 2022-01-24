const express = require('express');

const userControllers =  require ( '../controllers/usersController');
const auth = require('../middleware/auth');

const router =  express.Router();


// creer un nouvel utilisateur
router.post('/signup',userControllers.signUp);

//utilisateur
router.post('/login',userControllers.login);

//route pour mettre à jour son profil
router.put('/:id', userControllers.modifyUser);

//route pour supprimer son compte
router.delete('/:id', userControllers.deleteUser);

// route pour avoir tout les utilisateurs
router.get('/:id',userControllers.getOneUser);

// route pour avoir tout les utilisateurs
router.get('/',userControllers.getAllUsers);





module.exports = router ;