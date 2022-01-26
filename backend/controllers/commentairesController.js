const db = require('../models');
// const User = db.users;
const { user } = require('../models');
const Essai = db.commentaires;


exports.postCommentaires = (req, res, next) => {
    console.log(req.body)
	

	Essai.create({
		
		idcommentaires: req.body.idcommentaires,
		comments: req.body.comments,
		userId: req.body.userId,
        like : req.body.like,
		created: req.body.createdAt,
		updated : req.body.updatedAt
	})
		.then(() => {
			res.send({ message: 'Le message est bien posté !' });
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};


exports.getAllCommentaires = (req, res, next) => {
    console.log(req.body)
	

	Essai.findAll()

		.then((allMessages) => {
			res.send(allMessages);
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};