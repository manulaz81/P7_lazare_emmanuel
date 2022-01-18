const express = require('express');

const userControllers =  require ( '../controllers/usersController');

const router =  express.Router();



router.post('/signup',userControllers.signUp);
// router.post('/login',userControllers.login);



module.exports = router ;