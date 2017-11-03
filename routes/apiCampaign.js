var express = require('express');
var router = express.Router();
var apiControllerRequest = require('../models/apiController');


router.get('/getCampaign', function(req,res){
    console.log("req c,apaigndi",req.originalUrl);
    apiControllerRequest.getCampaign(function(err,rows){
        if(err)
        {
        res.json(err);
        }
        else
        {
        res.json({
            data : rows,
            code: 200,
            status: "Success",
            message: "API Successful"});
        }
    })
});
router.post('/addNewCampaign', function(req,res){
    apiControllerRequest.addNewCampaign(function(err,rows){
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