const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('groupoma', 'root', 'manulaz81', {
	dialect: 'mysql',
	host: 'localhost',
});

try {
	sequelize.authenticate();
	console.log('Connecté à la base de données MySQL!');
} catch (error) {
	console.error('Impossible de se connecter, erreur suivante :', error);
}

module.exports.getDB = () => { return sequelize }
