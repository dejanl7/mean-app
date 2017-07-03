var express = require('express');
var router  = express.Router();
var Message = require('../models/message'); // Import Mongoose Model

/*=============================
  Get All Messages
===============================*/
router.get('/', function(req, res, next){
    Message.find()
        .exec(function(err, result) {
            if(err){
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Successful getting data...',
                obj: result
            });
        });
});


/*=============================
    Send Message (POST)
===============================*/
router.post('/', function(req, res, next) {
    var message = new Message({
        content: req.body.content
    });
    message.save(function(err, result) {
        if(err){
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }

        // Save Message
        res.status(201).json({
            message: 'Saved message.',
            obj: result
        });
    });
});


/*=============================
    Delete Message
===============================*/
/*router.delete('/:id', function(req, res, next){
    Message.findById(req.params.id, function(err, message){
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }

        // Remove Message
        message.remove(function(err, result){
            if (err) {
                return result.status(500).json({
                    title: 'An error occured during removing message...',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted message...',
                obj: result
            });
        });
    });
});*/



// Export Router
module.exports = router;