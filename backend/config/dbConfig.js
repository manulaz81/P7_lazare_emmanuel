module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'manulaz81',
  DB: 'groupomania',
  dialect: 'mysql',

  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  }
}

// Create the connection pool. The pool-specific settings are the defaults
// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root", 
//   database: 'groupomania',
//   password: 'manulaz81'
// });

 
// module.exports = pool.promise;