module.exports = (sequelize, DataTypes) => {
	const Message = sequelize.define(
		'message',
		{
			idMessage: {
				type: DataTypes.INTEGER,
			},
			message: {
				type: DataTypes.TEXT,
			},
			imageUrl: {
				type: DataTypes.STRING,
			},
			userId: {
				type: DataTypes.TEXT,
			},
			like: {
				type: DataTypes.TEXT,
			},
		},
		{
			timestamps: true,
			createdAt: 'created',
			updatedAt: false,
		},
	);

	return Message;
};
