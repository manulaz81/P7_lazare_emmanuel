// connexion aux models
const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//  crée un main model
const User = db.users;
// const Message = db.messages;

exports.signUp = (req, res, next) => {
	User.create({
		email: req.body.email,
		username: req.body.username,
		password: bcrypt.hashSync(req.body.password, 8),
		bio: req.body.bio,
		isAdmin: req.body.isAdmin, // user role = 1 créer un booléen si User ou Admin (Tinyint 0 ou 1)
	})
		.then(() => {
			res.send({ message: "L'utilisateur est bien enregistré !" });
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};

//   } else if (!regexEmail.test(req.body.email)) {
// 	return res.status(400).json({
// 	  message: "bad request",
// 	});
//   }
//   bcrypt.hash(req.body.password, 10)
// 	.then((hash) => {
// 	  const user = {
// 		email: req.body.email,
// 		username: req.body.username,
// 		password: hash,
// 		profil_picture: req.body.profil_picture,
// 		is_admin: req.body.is_admin,
// 	  };
// 	  User.save(user)
// 		.then(() => {
// 		  res.status(200).json({
// 			message: "success",
// 		  });
// 		})
// 		.catch((err) => {
// 		  if ((err.message = "users.email must be unique")) {
// 			res.status(409).json({ message: "conflict" });
// 		  } else {
// 			res.status(500).json({ err  });
// 		  }
// 		});
// 	})
// 	.catch((err) => res.status(500).json({ err }));

// // const User = db.users;
// // const Op = db.Sequilize.Op;

// const Sequelize = require("sequelize");

// exports.signUp = async (req, res,next) => {

// 	const sequelize = new Sequelize("groupomania", "root", "manulaz81", {
// 		dialect: "mysql",
// 		host: "localhost"
// 	   });

// 	   try {
// 		  sequelize.authenticate();
// 		  console.log('Connecté à la base de données MySQL!');

// 		  sequelize.query("insert into `users` (`email`,`username`,`password`,`bio`,`isAdmin`) values ('pierrot@yahoo.com','manu','coolcool','j aime les pommes', 'ok');").then(([results, metadata]) => {
// 			console.log('results!');
// 			})
// 		} catch (error) {
// 		  console.error('Impossible de se connecter, erreur suivante :', error);
// 		}

// const email = req.body.email;

// DB.query("CREATE DATABASE `baseeee`;").then(([results, metadata]) => {
// 		console.log('Base de données créée !');

// });
// const thing= new userModel({
// ...req.body

// })
// res.status(201).json({
// 	message : 'objet crée !'
// })
// console.log(req.body);

//   };
