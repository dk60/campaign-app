var express = require('express');
var router = express.Router();
var apiControllerRequest = require('../models/apiController');

router.post('/login', function(req,res){
    if(req.body.params){
        apiControllerRequest.userLogin(req.body.params, function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        })
    }
});

module.exports = router;