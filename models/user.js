var mongoose          = require('mongoose');
var Schema            = mongoose.Schema;
//var mUniqueValidator  = require('mongoose-unique-validator');


// Blueprint for Message Table
var schema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }]
});


// Use plugin to make unique validation (installed before)
//schema.plugin(mUniqueValidator);


module.exports = mongoose.model(
    'User',
    schema
);
