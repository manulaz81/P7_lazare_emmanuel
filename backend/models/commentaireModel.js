module.exports = (sequelize, DataTypes) => {
	const Commentary = sequelize.define( 'commentaire', {
			
        idcommentaires: {
				type: DataTypes.STRING,
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

	return Commentary;
};
