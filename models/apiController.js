var dbConnect = require('../models/dbconnection'); //reference of dbconnection.js

var APIsData={
        userLogin: function(paramsData, callback){
            return dbConnect.query("select * from user_login where email_id=? and password=?",[paramsData.email_id, paramsData.password], callback);
            dbConnect.end();
        },
        getCompaign:function(callback){
            return dbConnect.query("select * from master_compaign_objective left join objective on master_compaign_objective.obj_Id = objective.objective_id",callback);
            dbConnect.end();
        },
        getChannel:function(callback){
            return dbConnect.query("select * from channel",callback);
            dbConnect.end();
        },
        getAudienceSegementData:function(callback){
            return dbConnect.query("select * from new_segement",callback);
            dbConnect.end();
        },
        getAudienceSegementById:function(id, callback){
            return dbConnect.query("select * from new_segement where seg_id=?",[id],callback);
            dbConnect.end();
        },
        insertAudienceSegementData:function(paramsData, callback){
            return dbConnect.query("INSERT INTO new_segement set ? ", paramsData  ,callback);
            dbConnect.end();
        },
        deleteAudienceSegementData:function(id, callback){
            return dbConnect.query("delete from new_segement where seg_id=?", [id], callback);
            dbConnect.end();
        },
        updateAudienceSegementData:function(id, paramsData, callback){
            return dbConnect.query("update new_segement set ? where seg_id=?",[paramsData , id], callback);
            dbConnect.end();
        },
        addNewCompaign: function(paramsData, callback){
            return dbConnect.query("insert into campaign set? ", paramsData, callback)
            dbConnect.end();
        },
};
module.exports= APIsData;