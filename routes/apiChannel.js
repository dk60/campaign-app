var express = require('express');
var router = express.Router();
var apiControllerRequest = require('../models/apiController');

router.post('/getCompaignChannel', function(req,res){
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
router.post('/addNewChannel', function(req,res){
    var channel ={
        channel_name : req.body.params.channel_name,
        create_date : req.body.params.create_date,
        update_date : req.body.params.update_date,
        user_id : req.body.params.userId,
        status : req.body.params.status
    }
    apiControllerRequest.postChannel(channel, function(err,rows){
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