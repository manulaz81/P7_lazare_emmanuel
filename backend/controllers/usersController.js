// connexion aux models
const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//  crée un main model
const User = db.users;
// const Message = db.messages;

const fs = require('fs');

exports.signUp = (req, res, next) => {
	bcrypt
		.hash(req.body.password, 10)
		.then((hash) => {
			const user = new User({
				email: req.body.email,
				username: req.body.username,
				password: hash,
			});
			console.log(user);
			user
				.save()
				.then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
				.catch((error) => res.status(400).json({ message: 'utilisateur déjà enregistré !!' }));
		})
		.catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
	User.findOne({ where: { email: req.body.email } })
		.then((user) => {
			if (!user) {
				return res.status(401).json({ error: 'Utilisateur non trouvé !' });
			}
			bcrypt
				.compare(req.body.password, user.password)
				.then((valid) => {
					if (!valid) {
						return res.status(401).json({ error: 'Mot de passe incorrect !' });
					}
					res.status(200).json({
						userId: user._id,
						token: jwt.sign({ userId: user._id }, 'RANDOM_TOKEN_SECRET', { expiresIn: '24h' }),
					});
				})
				.catch((error) => res.status(500).json({ error }));
		})
		.catch((error) => res.status(500).json({ error }));
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
	bcrypt.hash(req.body.password, 10).then((hash) => {
		const id = req.params.id;
		const newProfile = req.body
			? {
					username: req.body.username,
					email: req.body.email,
					password: hash,
					//image//
					bio: req.body.bio,
			  }
			: {
					username: req.body.username,
					email: req.body.email,
					bio: req.body.bio,
					//image//
					password: hash,
			  };
		User.update(newProfile, {
			where: { id: id },
		})
			.then((num) => {
				if (num == 1) {
					res.send({
						message: 'Utilisateur modifié.',
					});
				} else {
					res.send({
						message: `Impossible de mettre à jour l'utilisateur avec l'id=${id}!`,
					});
				}
			})
			.catch((err) => {
				res.status(500).send({
					message: 'erreur lors de la mise à jour id=' + id,
				});
			});
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

		.then((userAll) => {
			res.send(userAll);
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Erreur dans la requete',
			});
		});
};
