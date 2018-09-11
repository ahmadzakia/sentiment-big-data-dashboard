var mongoose = require('mongoose');

var schema = mongoose.Schema({
    text : {
        type : String,
        required : true
    },
    retweet_count : {
        type: Number,
        required: true
    },
    favourites_count : {
        type : Number,
        required : true
    },
    followers_count : {
        type : Number,
        required : true
    },
    friends_count : {
        type : Number,
        required : true
    },
    lang : {
        type : String,
        required : false
    },
    screen_name : {
        type : String,
        required : true
    },
    created_at : {
        type : String,
        required : true
    },
    sentiment : {
        type : String,
        required : true
    },
    neutral_value: {
        type : Number,
        required : true
    },
    neg_value: {
        type : Number,
        required : true
    },
    pos_value: {
        type : Number,
        required : true
    },
});

var Schema = module.exports = mongoose.model('test2', schema);

module.exports.getSchema = function(callback) {
    Schema.find(callback);
};

module.exports.addSchema = function(data, callback){
    Schema.create(data, callback);
};

