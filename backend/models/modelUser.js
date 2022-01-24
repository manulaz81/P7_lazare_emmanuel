module.exports = (sequelize,DataTypes) =>{



const User = sequelize.define('user', {
  // Model attributes are defined here
   
   email: {
    type: DataTypes.STRING,
    unique : {
      msg : "compte déjà crée avec cet email !"
    },
    allowNull: false
  },
   username : {
      type :  DataTypes.STRING,
      unique : {
        msg : "username déjà utilisé !"
      },
      allowNull: false
  },
  password : {
    type: DataTypes.STRING,
    allowNull: false
  },

  bio : {
    type: DataTypes.STRING,
    allowNull: false,
    unique : true
  },
  isAdmin : {
    type: DataTypes.STRING
  }

})
return User
};


