"use strict";
module.exports = (sequelize, DataTypes) => {
 const User = sequelize.define('User', 
    {
      email:DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
       bio: DataTypes.STRING,
      admin: DataTypes.BOOLEAN,
    },{
      classMethods : {

        // associer les tables
        associate: function(models){
models.User.hasMany(models.Message)
        }
      }
    });

    return User;
  };


// MES 1ERES LIGNES CODEE

// const { Sequelize, DataTypes } = require('sequelize');


// const sequelize = new Sequelize('sqlite::memory:');

// const User = sequelize.define('utilisateur', {
//   // Model attributes are defined here
   
//    nom: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//    prenom : {
//       type :  DataTypes.STRING,
//       allowNull: false
//   },
//   pseudo : {
//     type: DataTypes.STRING
//   },
//   email : {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique : true
//   },
//   role : {
//     type: DataTypes.STRING
//   },
//   password : {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
  


// }, {
//   tableName : 'utilisateur'
// });


// module.exports = User;


// // module.exports = sequelize.model('usersgroupomania',User);
// // `sequelize.define` also returns the model
// console.log(User === sequelize.models.utilisateur); // true