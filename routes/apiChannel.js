var express = require('express');
var router = express.Router();
var apiControllerRequest = require('../models/apiController');

router.get('/channel', function(req,res){
    apiControllerRequest.getChannel(function(err,rows){
        if(err)
        {
        res.json(err);
        }
        else
        {
        res.json(rows);
        }
    })
});

module.exports = router;