var express = require('express');
var router = express.Router();
var apiControllerRequest = require('../models/apiController');

router.get('/', function(req,res){
    apiControllerRequest.getAudienceSegementData(function(err,rows){
        if(err)
        {
        res.json(err);
        }
        else
        {
        res.json(rows);
        }
    })
})
router.get('/:id?',function(req,res,next){
    if(req.params.id){
        apiControllerRequest.getAudienceSegementById(req.params.id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
        });
    }
});
router.post('/audienceSegement',function(req,res,next){
    apiControllerRequest.insertAudienceSegementData(req.body,function(err,count){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(req.body);
        }
    });
});
router.delete('/audienceSegement/:id',function(req,res,next){
    apiControllerRequest.deleteAudienceSegementData(req.params.id,function(err,count){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(count);//or return count for 1 &amp;amp;amp; 0
        }
    });
});
router.put('/audienceSegement/:id',function(req,res,next){
    apiControllerRequest.updateAudienceSegementData(req.params.id,req.body,function(err,rows){
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