const express = require('express');

const userControllers =  require ( '../controllers/usersController');

const router =  express.Router();


// creer un nouvel utilisateur
router.post('/signup',userControllers.signUp);


//utilisateur
// router.post('/login',userControllers.login);

//route pour mettre à jour son profil
//route.put ('/:id, userControllers.modifyUser)

//route pour supprimer son profil
// router.delete('/:id', userControllers.deleteUser);

// route pour avoir tout les utilisateurs
// router.get('/:id',userControllers.getOneUsers);


// route pour avoir tout les utilisateurs
// router.get('/',userControllers.getAllUsers);







module.exports = router ;