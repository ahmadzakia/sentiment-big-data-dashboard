var mongoose = require('mongoose');

var schema = mongoose.Schema({
    text : {
        type : String,
        required : true
    },
    username: {
        type: String,
        required: true
    },
    followers_count : {
        type : Number,
        required : true
    }
});

var Schema = module.exports = mongoose.model('topten', schema);

module.exports.getSchema = function(callback) {
    Schema.find(callback);
};

module.exports.addSchema = function(data, callback){
    Schema.create(data, callback);
};

