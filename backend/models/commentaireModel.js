module.exports = (sequelize, DataTypes) => {
	const Commentary = sequelize.define(
		'commentaire',
		{
			idcommentaires: {
				type: DataTypes.INTEGER,
			},
			comments: {
				type: DataTypes.TEXT,
			},

			userId: {
				type: DataTypes.TEXT,
			},
			imageUrl: {
				type: DataTypes.TEXT,
			},

			likes: {
				type: DataTypes.TEXT,
			},
			fk_commentaire_messages: {
				type: DataTypes.TEXT,
			},

			id: {
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
		},
		{
			timestamps: true,
			createdAt: true,
			updatedAt: true,
		},
	);

	return Commentary;
};
