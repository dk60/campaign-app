var mysql=require('mysql');
var connection=mysql.createConnection({

    host: '182.50.133.77',
    user: 'compaign',
    password: 'compaign@123',
    database: 'compaign_db'

});
module.exports=connection;