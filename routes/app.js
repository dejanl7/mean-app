var express = require('express');
var router  = express.Router();
var User    = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
    User.findOne({}, function(err, doc){
        if (err) {
          return res.send('Hey, there is an error!');
        }
        
        res.render('node', { email: doc.email });
    });
});

/* Post User */
router.post('/', function(req, res, next) {
  var email = req.body.email;
  console.log(email);
  var user    = new User({
      firstName: 'Dejan',
      lastName: 'Loncar',
      password: 'super-secret',
      email: email
  });
  user.save();
  res.redirect('/');
});

module.exports = router;