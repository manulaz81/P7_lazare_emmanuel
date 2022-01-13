const { Sequelize, DataTypes } = require('sequelize');

// import sequelize from '../config/bdd';
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('users', {
  // Model attributes are defined here
   

  pseudo: {
    type: DataTypes.STRING,
    allowNull: false
  },
   email : {
      type :  DataTypes.STRING
  },
  password : {
    type: DataTypes.STRING
  }

}, {
  tableName : 'utilisateur'
});


module.exports = User;


// module.exports = sequelize.model('usersgroupomania',User);
// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true