const express = require ('express');
require ( 'dotenv').config({path : './config/.env'})
const app = express ();

app.listen ( process.env.port , () => {
    console.log(`listening on port ${process.env.port}`);
})