const db = require('../models');
// const User = db.users;
const { user } = require('../models');
const Commentaire = db.commentaires;

// poster un commentaire
exports.postCommentaires = (req, res, next) => {
	Commentaire.create({
		// idcommentaires: req.body.idcommentaires,
		comments: req.body.comments,
		fk_commentaire_messages: req.body.fk_commentaire_messages,
		// imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
		// created: req.body.createdAt,
		// updated : req.body.updatedAt
	})
		.then(() => {
			res.send({ message: 'Le message est bien posté !' });
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};

// route pour avoir tout les commentaires

exports.allcommentaires = (req, res, next) => {
	console.log(req.body);
	Commentaire.findAll()

		.then((allMessages) => {
			res.send(allMessages);
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};

// route pour avoir le commentaire d'un id
exports.oneCommentaire = (req, res, next) => {
	Commentaire.findOne({ where: { fk_commentaire_messages: req.params.fk_commentaire_messages } })
		.then((commentaireUser) => res.status(200).json(commentaireUser))
		.catch((error) => res.status(404).json({ error }));
};

//route pour modifier un commentaire

exports.modifyCommentaires = (req, res, next) => {
	const id = req.params.fk_commentaire_messages;
	console.log(id);

	const modification = req.file
		? {
				comments: req.body.comments,
				userId: req.body.userId,
				likes: req.body.likes,
				//   image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
		  }
		: {
				comments: req.body.comments,
				userId: req.body.userId,
		  };

	Commentaire.update(modification, {
		where: { fk_commentaire_messages: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: "L'article est modifié",
				});
			} else {
				res.send({
					message: `Impossible de mettre à jour l'article avec l'id=${id}.`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "erreur lors de la mise à jour de l'article avec l'id=" + id,
			});
		});
};

exports.deleteCommentaires = (req, res, next) => {
	Commentaire.destroy({
		where: { fk_commentaire_messages: req.params.fk_commentaire_messages },
	})
		.then(() => {
			res.send({ message: 'votre commentaire a bien été supprimé !' });
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};


