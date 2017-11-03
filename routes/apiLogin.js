var express = require('express');
var router = express.Router();
var apiControllerRequest = require('../models/apiController');
var jwt = require('jsonwebtoken');
var config = require('../configuration/appConfig').config;

router.post('/login', function(req,res){
    if(req.body.params){
        apiControllerRequest.userLogin(req.body.params, function(err,rows){
            if(!rows[0])
            {
                res.json({
                        data : [],
                        code: 500,
                        status: false,
                        message: "API Not Successful"});
            }
            else
            {
                var user = rows[0];
                //RowDataPacket
                 var token = jwt.sign(user.email_id, config.tokenSecret);

                 var result = {
                    email_id : user.email_id,
                    user_id : user.user_id,
                    accessToken : token
                 }
                res.json({
                        data : result,
                        code: 200,
                        status: true,
                        message: "API Successful"});
            }
        })
    }
});

module.exports = router;