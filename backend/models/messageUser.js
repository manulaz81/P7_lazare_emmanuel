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
			
			usersId: {
				type: DataTypes.TEXT,
			},
			like: {
				type: DataTypes.TEXT,
			},
			imageUrl:{
				type: DataTypes.TEXT,
			}
		},
		{
			timestamps: true,
			createdAt: true,
			updatedAt: true,
		},
	);

	return Message;
};
