const http = require ('http');
// const userRoutes = require ('./routes/useroutes');
require ( 'dotenv').config({path : './config/.env'});
// require ('./config/bdd');
const app = require ('./app');
const server = http.createServer(app);


// routes

// app.use('/api/user', userRoutes);

server.listen ( process.env.port , () => {
    console.log(`listening on port ${process.env.port}`);
});