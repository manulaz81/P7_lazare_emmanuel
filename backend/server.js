const express = require ('express');
// const userRoutes = require ('./routes/useroutes');
require ( 'dotenv').config({path : './config/.env'});
require ('./config/bdd');
const app = express ();


// routes

// app.use('/api/user', userRoutes);

app.listen ( process.env.port , () => {
    console.log(`listening on port ${process.env.port}`);
});