var express = require('express');
var router = express.Router();
var apiControllerRequest = require('../models/apiController');
var jwt = require('jsonwebtoken');
var config = require('../configuration/appConfig').config;

router.post('/login', function(req,res){
    if(req.body.params){
        apiControllerRequest.userLogin(req.body.params, function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                var user = rows[0];
                //RowDataPacket
                 var token = jwt.sign(user.email_id, config.tokenSecret);

                 var result = {
                    data : user,
                    accessToken : token
                 }
                res.json(result);
            }
        })
    }
});

module.exports = router;