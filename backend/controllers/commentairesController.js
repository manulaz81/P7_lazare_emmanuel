const db = require('../models');
// const User = db.users;
const { user } = require('../models');
const Comments = db.commentaires;

exports.postCommentaires = (req, res, next) => {
    console.log(req.body)
	Comments.create({
		idcommentaires: req.body.idcommentaires,
		comments: req.body.comments,
	
		
	})
    console.log("req.body")
		.then(() => {
			res.send({ message: 'Le commentaire est bien posté !' });
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};