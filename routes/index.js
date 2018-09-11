var express = require('express');
var router = express.Router();
var Schema = require('../model/tweet.js');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/data', function(req, res){

    Schema.getSchema(function (err, data) {
        if (err) return res.status(500).send(err);
        res.send(data);
    });

});


module.exports = router;
