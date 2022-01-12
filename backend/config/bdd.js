
 const { Sequelize } = require('sequelize');

 const sequelize = new Sequelize("foodly", "root", "manulaz81", {
     dialect: "mysql",
     host: "localhost"
 });

 try {
    sequelize.authenticate();
    console.log('Connecté à la base de données MySQL!');
  } catch (error) {
    console.error('Impossible de se connecter, erreur suivante :', error);
  };





