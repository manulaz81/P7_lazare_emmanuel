const db = require('../models');
// const User = db.users;
// const { user } = require('../models');
const Message = db.messages;

exports.postMessage = (req, res, next) => {
	console.log(req.body.userId);
	
	Message.create({
		// id: req.body.id,
		// idMessage: req.body.idMessage,
		// userId: req.body.userId,
		// like: req.body.like,
		// created: req.body.created,
		message: req.body.message,
		// imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
	})
		.then(() => {
			res.send({ message: 'Le message est bien posté !' });
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};

// voir son message
exports.oneMessage = (req, res, next) => {
	const id = req.params.id;
	
	Message.findByPk(id)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: "Problème de récupération de l'article avec l'id=" + id,
			});
		});
};

// voir tout les messages
exports.allMessage = (req, res, next) => {
	Message.findAll({
		order: [['updatedAt', "DESC"], ['createdAt', "DESC"]] },
	)

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
		where: { id: req.params.id },
	})
		.then(() => {
			res.send({ message: 'votre message a bien été supprimé !' });
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};

