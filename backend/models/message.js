module.exports = (sequelize, DataTypes) => {

    const Message = sequelize.define("message", {
        rating: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        }
    })

    return Message

}