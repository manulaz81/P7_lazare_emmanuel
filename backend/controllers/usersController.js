// connexion aux models
const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//  crée un main model
const User = db.users;
// const Message = db.messages;

// const fs = require ('fs');

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

exports.login = (req, res, next) => {
	User.findOne({
		where: {
			email: req.body.email,
		},
	})

		.then((user) => {
			if (!user) {
				return res.status(404).send({ message: 'Utilisateur non enregistré !' });
			}

			let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

			if (!passwordIsValid) {
				return res.status(401).send({
					accessToken: null,
					message: 'Mot de passe invalide !',
				});
			}

			let token = jwt.sign({ id: user.id }, { expiresIn: 86400 });

			res.status(200).json({
				id: user.id,
				username: user.username,
				email: user.email,
				isAdmin: user.isAdmin,
				accessToken: token,
				userToken: userToken,
			});
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};

// Supprimer le compte d'utilisateur

exports.deleteUser = (req, res) => {
	User.destroy({
		where: { id: req.params.id },
	})
		.then(() => {
			res.send({ message: 'votre compte a bien été supprimé !' });
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};

//Mettre à jour un utilisateur

exports.modifyUser = (req, res) => {
	User.destroy({
		where: { id: req.params.id },
	})
		.then(() => {
			res.send({ message: 'votre compte a bien été modifié!' });
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};

// récuperer un utilisateur

exports.getOneUser = (req, res) => {
	const id = req.params.id;

	User.findByPk(id)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Error retrieving user with id=' + id,
			});
		});
};

exports.getAllUsers = (req, res, next) => {

	User.findAll()
	
	.then(( userAll) =>{
		res.send(userAll);
	})
	.catch((err) => {
		res.status(500).send({
			message: 'Erreur dans la requete'
		});
	});
	
};

//Mettre à jour un utilisateur
// photo: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
