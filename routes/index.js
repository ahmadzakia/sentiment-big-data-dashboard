var express = require('express');
var router = express.Router();
var Schema = require('../model/tweet.js');
var SchemaPos = require('../model/pos_tweets.js');
var SchemaNeg = require('../model/neg_tweets.js');
var SchemaNeu = require('../model/neu_tweets.js');
var SchemaStatus = require('../model/status.js');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/status', function(req, res){

    SchemaStatus.getSchema(function (err, data) {
        if (err) return res.status(500).send(err);
        res.send(data);
    });

});

router.get('/data', function(req, res){

    Schema.getSchema(function (err, data) {
        if (err) return res.status(500).send(err);
        res.send(data);
    });

});

router.get('/positive', function(req, res){

    SchemaPos.getSchema(function (err, data) {
        if (err) return res.status(500).send(err);
        // res.send("{'a':'b}");
        res.send(data);
    });

});

router.get('/negative', function(req, res){

    SchemaNeg.getSchema(function (err, data) {
        if (err) return res.status(500).send(err);
        res.send(data);
    });

});

router.get('/neutral', function(req, res){

    SchemaNeu.getSchema(function (err, data) {
        if (err) return res.status(500).send(err);
        res.send(data);
    });

});

module.exports = router;
