var express = require('express');
var router  = express.Router();
var bcrypt  = require('bcryptjs');

var User    = require('../models/user');


/*=============================
    Add New User
===============================*/
router.post('/', function(req, res, next) {
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email,
    });
    user.save(function(err, res){
        if(err){
            return res.status(500).json({
                title: 'An error occured during the save new user...',
                error: err
            });
        }
            res.status(201).json({
                message: 'User creted...',
                obj: result
            });
    });
});


module.exports = router;