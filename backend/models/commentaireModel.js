module.exports = (sequelize, DataTypes) => {
	const Commentaire = sequelize.define(
		'commentaire',
		{
			idcommentaires: {
				type: DataTypes.INTEGER,
			},
			comments: {
				type: DataTypes.TEXT,
			},
			
			usersId: {
				type: DataTypes.TEXT,
			},
			likes: {
				type: DataTypes.TEXT,
			},
		},
		{
			timestamps: true,
			createdAt: true,
			updatedAt: true,
		},
	);

	return Commentaire;
};
