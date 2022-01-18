//model d'exportation
const userModel = require('../models/modelUser');

//pour générer le token
const jwt = require('jsonwebtoken');

//chiffrage du password
const bcrypt = require ('bcrypt');

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('groupoma', 'root', 'manulaz81', {
	dialect: 'mysql',
	host: 'localhost',
});


exports.signUp = async (req, res, next) => {

	var email = req.body.email;
	var username = req.body.nom;
	var password = req.body.password;


	console.log(email);
		console.log(username);
	console.log(password);
	
	
	// const { nom,prenom,pseudo, email,role, password } = req.body;

    await userModel.sync({ force: true });

    // //créeation dans la base de donnée
	try {
        // await Sequelize.sync();
		const user = await userModel.create({nom : username ,email : email,password: password })
		
		
		.then(() => {
	// 		sequelize.query("insert into  `utilisateur` (`nom`,`prenom`,`pseudo`,`email`,`role`,`password`) values ('req.body.nom','$prenom','$pseudo', '$email','$role', '$password' );").then(([results, metadata]) => {
	// 			console.log('Base de données créée !');
	// 		  })

	// 		res.status(201).json ({ msg : "created !"})
		})
		.catch(error => res.status(500).json(error))
	
		
	} catch (err) {
		res.status(200).send({ err });
	}

	// console.log(req.body);
	//    const usergroupo = new userModel ({
	//        email = req.body.email,
	//    });
};



// pour s'authentifier
// exports.signUp= async (req, res, next) => {};


