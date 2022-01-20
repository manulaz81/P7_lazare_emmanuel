const http = require ('http');
const userRoutes = require ('./routes/user.routes');
require ( 'dotenv').config({path : './config/.env'});

const app = require ('./app');
const server = http.createServer(app);



// // routes
// app.use('/api/user', userRoutes);




server.listen ( process.env.port , () => {
    console.log(`listening on port ${process.env.port}`);
});