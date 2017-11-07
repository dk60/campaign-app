var mysql=require('mysql');
var connection=mysql.createConnection({

    host: 'loaclhost',
    user: 'compaign',
    password: 'deeapk@123',
    database: 'compaign_db'

});
module.exports=connection;
