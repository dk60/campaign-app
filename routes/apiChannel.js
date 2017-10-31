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

router.post('/editCompaignChannel', function(req,res){
    var chanelUpdate ={
        channel_id : req.body.params.channel_id,
        channel_name : req.body.params.channel_name,
        update_date : req.body.params.update_date
    }
    apiControllerRequest.editChanel(chanelUpdate, function(err, rows){
        if(err)
        {
        res.json(err);
        }
        else
        {
        res.json(rows);
        }
    });
});

router.post('/deleteCompaignChannel',function(req,res){
    //var chanelID = req.body.params.channel_id;
    apiControllerRequest.deleteChanel(req.body.params ,function(err, rows){
        if(err)
        {
        res.json(err);
        }
        else
        {
        res.json(rows);
        }
    });
});

module.exports = router;