const { USER } = require('../config/dbConfig');
const db = require('../models');
// const User = db.users;
// const { user } = require('../models');
const Message = db.messages;

exports.postMessage = (req, res, next) => {
	const article = {
		message: req.body.message,
		usersId: req.body.userId,
		fk_message_users : req.body.fk_message_users,
		imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
	};
	Message.create(article)
		// id: req.body.id,
		// idMessage: req.body.idMessage,
		// userId: req.body.userId,
		// like: req.body.like,
		// created: req.body.created,
		// fk_message_users: req.body.fk_message_users,
		// 	message: req.body.message,

		// 	imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
		// })
		.then((article) => {
			res.send(article);
		})

		// .then(() => {
		// 	res.send({ message: 'Le message est bien posté !' });
		// })
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};

// voir son message
exports.oneMessage = (req, res, next) => {
	Message.findOne({ where: { fk_message_users: req.params.fk_message_users } })
		.then((users) => res.status(200).json(users))
		.catch((error) => res.status(404).json({ error }));
};

// exports.modifyMessage = (req, res, next) => {
// 	const id = req.params.fk_message_users;
// 	const modification = req.file
// 		? {
// 				message: req.body.message,
// 				//   userId: req.body.userId,
// 				  imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
// 		  }
// 		: {
// 				message: req.body.message,
// 		  };
//   userId: req.body.userId,}

// 	Message.update(modification, {
// 		where: { fk_message_users: id },
// 	})
// 		.then((num) => {
// 			if (num == 1) {
// 				res.send({
// 					message: "L'article est modifié",
// 				});
// 			} else {
// 				res.send({
// 					message: `Impossible de mettre à jour l'article avec l'id=${id}.`,
// 				});
// 			}
// 		})
// 		.catch((err) => {
// 			res.status(500).send({
// 				message: "erreur lors de la mise à jour de l'article avec l'id=" + id,
// 			});
// 		});
// };

// voir tout les messages
exports.allMessage = (req, res, next) => {
	Message.findAll({
		order: [
			['updatedAt', 'DESC'],
			['createdAt', 'DESC'],
		],
	})

		.then((allMessages) => {
			res.send(allMessages);
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};

// modifier son messages

exports.deleteMessage = (req, res, next) => {
	Message.destroy({
		where: { fk_message_users: req.params.fk_message_users },
	})
		.then(() => {
			res.send({ message: 'votre message a bien été supprimé !' });
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};
