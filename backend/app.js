const express = require ('express');

const app = express ();


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
// require('./config/bdd');

// const { Sequelize } = require('sequelize');

//  const sequelize = new Sequelize("foodly", "root", "manulaz81", {
//      dialect: "mysql",
//      host: "root@localhost"
//  });

//  try {
//     sequelize.authenticate();
//     console.log('Connecté à la base de données MySQL!');
//   } catch (error) {
//     console.error('Impossible de se connecter, erreur suivante :', error);
//   };













module.export = app ;
