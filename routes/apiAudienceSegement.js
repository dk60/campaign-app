var express = require('express');
var router = express.Router();
var apiControllerRequest = require('../models/apiController');

router.get('/getAudienceSegement', function(req,res){
    apiControllerRequest.getAudienceSegementData(function(err,rows){
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
    var segement ={
        user_id : req.body.params.userId,
        segement_name : req.body.params.segement_name,
        segment_form_data : req.body.params.segment_form_data,
        create_date : req.body.params.create_date,
        update_date : req.body.params.update_date,
        status : req.body.params.status
    }
    apiControllerRequest.insertAudienceSegementData(segement,function(err,count){
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