module.exports = (sequelize,DataTypes) =>{



const User = sequelize.define('user', {
  // Model attributes are defined here
   
   email: {
    type: DataTypes.STRING,
    allowNull: false
  },
   username : {
      type :  DataTypes.STRING,
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


