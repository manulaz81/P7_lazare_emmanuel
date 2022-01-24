const http = require ('http');
// const userRoutes = require ('./routes/user.routes');
// const messageRoutes = require ('./routes/message.routes');
require ( 'dotenv').config({path : './config/.env'});

const app = require ('./app');
const server = http.createServer(app);



server.listen ( process.env.port , () => {
    console.log(`listening on port ${process.env.port}`);
});