var express = require('express');
var router  = express.Router();
var jwt     = require('jsonwebtoken');

var Message = require('../models/message'); // Import Mongoose Message Model
var User    = require('../models/user'); // Import Mongoose User Model

/*=============================
  Get All Messages
===============================*/
router.get('/', function(req, res, next){
    Message.find()
        .populate('user', 'firstName')
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
    Protect Route
===============================*/
router.use('/', function(req, res, next) {
    jwt.verify(req.query.token, 'secret', function(err, decoded) {
        if (err) {
            return res.status(401).json({
                title: 'Not authenticated!',
                error: err
            });
        }
        next();
    })
});


/*=============================
    Send Message (POST)
===============================*/
router.post('/', function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function(err, user){
        if (err) {
            return res.status(401).json({
                title: 'Not authenticated!',
                error: err
            });
        }
        var message = new Message({
            content: req.body.content,
            user: user
        });

        // Save
        message.save(function(err, result) {
            if(err){
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            
            // Save Message
            user.messages.push(result);
            user.save();

            res.status(201).json({
                message: 'Saved message.',
                obj: result
            });
        });
    });    
});


/*=============================
    Update Data
===============================*/
router.patch('/:id', function(req, res, next){
    var decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, function(err, message) {
        if(err) {
            return res.status(500).json({
                title: 'An error occured during the update message...',
                err: err
            });
        }
        if(!message) {
            return res.status(500).json({
                title: 'No Messages Found...',
                error: { message: 'Message not found...' }
            });
        }
        if(message.user != decoded.user._id) {
            return res.status(401).json({
                title: 'You don\'t have role to delete this message!',
                error: {message: 'Users do not match!'}
            })
        }

        message.content = req.body.content;
        message.save(function(err, result){
            if(err){
                return res.status(500).json({
                    title: 'An error occured',
                    error: {message: 'Users do not match!'}
                });
            }

            // Save Message
            res.status(201).json({
                message: 'Updated message.',
                obj: result
            });
        });
    });
});


/*=============================
    Delete Message
===============================*/
router.delete('/:id', function(req, res, next){
    var decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, function(err, message){
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        if(message.user != decoded.user._id) {
            return res.status(401).json({
                title: 'You don\'t have role to delete this message!',
                error: err
            })
        }

        // Remove Message
        message.remove(function(err, result) {
            if (err) {
                return result.status(500).json({
                    title: 'An error occured during removing message...',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted message!',
                obj: result
            });
        });
    });
});



// Export Router
module.exports = router;