const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1];
		console.log(token);
		// Récupération du token
		const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET'); // Décoder le token
		console.log(decodedToken);

		const userId = decodedToken.userId; // Récupération du userID
		console.log(userId);

		// si l'idMessage est présent dans la requete et si l'id est différent de l'userId alors ...
		if (req.body.userId && req.body.userId !== userId) {
			// Vérifier si userID correspond au token
			throw "l'utilisateur n'es pas valable";
		} else {
			next();
		}
	} catch {
		res.status(401).json({
			error: new Error("La requête n'est pas valide!"),
		});
	}
};
