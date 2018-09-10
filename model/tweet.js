var mongoose = require('mongoose');

var schema = mongoose.Schema({
    text : {
        type : String,
        required : true
    },
    retweet_count : {
        type: int,
        required: true
    },
    favourites_count : {
        type : int,
        required : true
    },
    followers_count : {
        type : int,
        required : true
    },
    friends_count : {
        type : int,
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
    }
});

var Schema = module.exports = mongoose.model('tweet', schema);

module.exports.getSchema = function(callback) {
    Schema.find(callback);
};

module.exports.addSchema = function(data, callback){
    Schema.create(data, callback);
};

