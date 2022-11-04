var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('Gel', { title: 'Search Results for Gel Class' });
});

module.exports = router;