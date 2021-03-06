const express = require ('express');

const app = express();

app.use(express.json());

// gestionnaire de routage
const path = require ('path');

//import des routes
const usersRoute = require ('./routes/user.routes');
const messageRoute = require ('./routes/message.routes');
const commentairesRoute = require ('./routes/commentaire.routes');

//cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

 app.use(express.urlencoded({extended : true})) ;

// connexion Database
  const db = require('./config/dbConfig');  

app.use('/images', express.static(path.join(__dirname,'images')));
app.use('/api/auth',usersRoute);
app.use('/api/messages',messageRoute);
app.use('/api/commentaires',commentairesRoute);


module.exports = app ;
