var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var User     = require('./user');



/*=================================
    Blueprint for Message Table
===================================*/
var schema = new Schema({
    content: {  
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});


/*====================================
    On remove message from messages -
    remove it from users collections
=======================================*/ 
schema.post('remove', function(message) {
    User.findById(message.user, function(err, user) {
        user.messages.pull(message);
        user.save();
    });
});




module.exports = mongoose.model(
    'Message',
    schema
);
