const express = require ('express');

const app = express ();

app.use(express.json());

const usersRoute = require ('./routes/user.routes');


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

require('./config/bdd');

app.use('/api/auth',usersRoute);


module.exports = app ;