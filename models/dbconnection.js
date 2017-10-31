var mysql=require('mysql');
var connection=mysql.createPool({

    host: '182.50.133.77:3306',
    user: 'compaign',
    password: 'compaign@123',
    database: 'compaign_db'

});
module.exports=connection;