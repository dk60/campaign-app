var mysql=require('mysql');
var connection=mysql.createPool({

    host: 'localhost',
    user: 'deepak',
    password: 'deepak',
    database: 'cuberoot_portal_db'

});
module.exports=connection;