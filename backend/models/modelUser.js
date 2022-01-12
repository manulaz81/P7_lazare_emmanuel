const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
  // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true   
    },

  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  pseudo : {
    type: DataTypes.STRING
  },
  email : {
      type :  DataTypes.STRING
  },
  password : {
    type: DataTypes.STRING
  },
  poste : {
    type :  DataTypes.STRING
  }





}, {
  // Other model options go here
});


// module.exports = sequelize.model('usersgroupomania',User);
// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true