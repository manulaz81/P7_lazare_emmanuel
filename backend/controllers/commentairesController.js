const db = require('../models');
// const User = db.users;
const { user } = require('../models');
const Commentaire = db.commentaires;

// poster un commentaire 
exports.postCommentaires = (req, res, next) => {

	Commentaire.create({
		
		idcommentaires: req.body.idcommentaires,
		comments: req.body.comments,  
        id : req.body.id,    
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
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

// route pour avoir tout les commentaires 

exports.allcommentaires = (req, res, next) => {
    console.log(req.body)
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

	const id = req.params.id;
	
	Commentaire.findByPk(id)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: "Problème de récupération de l'article avec l'id=" + id,
			});
		});
};

// // route pour mettre a jour son commentaire
// exports.oneCommentaire = (req, res, next) => {

// 	const id = req.params.id;
	
// 	Commentaire.findByPk(id)
// 		.then((data) => {
// 			res.send(data);
// 		})
// 		.catch((err) => {
// 			res.status(500).send({
// 				message: "Problème de récupération de l'article avec l'id=" + id,
// 			});
// 		});
// };

//route pour modifier un commentaire

exports.modifyCommentaires = (req, res, next) => {
    Commentaire.update(
		{            comments : req.body.comments,
			imageUrl : `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
			
		},
		{where: { id: req.params.id }}
	)
		.then(() => {
			res.send({ message: 'votre compte a bien été modifié!' });
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});


};


exports.deleteCommentaires = (req, res, next) => {
    Commentaire.destroy({
		where: { id: req.params.id },
	})
		.then(() => {
			res.send({ message: 'votre commentaire a bien été supprimé !' });
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};

exports.likeCommentaires = (req, res, next) =>{
const like = req.body.likes
Commentaire.update(
    {            likes : req.body.likes       
        
    },
    {where: { id: req.params.id }}
)
    .then(() => 
    
    {
        res.send({ message: 'vous aimez ce commentaire !' });
    })
    .catch((err) => {
        res.status(500).send({ message: err.message });
    });

};

exports.dislikeCommentaires =(req, res, next) =>{ 
    const like = req.body.likes
    Commentaire.update(
        {            likes : req.body.likes       
            
        },
        {where: { id: req.params.id }}
    )
        .then(() => {
            res.send({ message: 'vous aimez ce commentaire !' });
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        });
    
    console.log(like);
    
    
    };