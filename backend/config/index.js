const mysql = require ('mysql');



const db = mysql.createConnection({
    host : "root@localhost",
    user : "manulaz81",
    password :  "manuel1981"

});

db.connect(function(err){
    if(err) throw err;
    console.log("connecté à la base de données mySql!");
    db.query( "create database mabdd", function (err,result){
        if (err) throw err;
        console.log("base de données créee !");
    })
})

