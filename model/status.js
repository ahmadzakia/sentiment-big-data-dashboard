var mongoose = require('mongoose');

var schema = mongoose.Schema({
    attribut : {
        type : String,
        required : true
    },
    value : {
        type: Number,
        required: true
    }
});

var Schema = module.exports = mongoose.model('status', schema);

module.exports.getSchema = function(callback) {
    Schema.find(callback);
};

module.exports.addSchema = function(data, callback){
    Schema.create(data, callback);
};

