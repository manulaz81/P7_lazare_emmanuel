const mysql = require ('mysql');

const db = mysql.createConnection({
    host : "root@localhost",
    user : "manulaz81",
    password :  "manuel1981"

});

db.connect(function(err){
    if(err) throw err;
    console.log("connecté à la base de données mySql!");
    
});  

console.log(db);