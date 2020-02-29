var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET classview page. */
router.get('/classview', function(req, res, next) {
  res.render('classview', { title: 'Class View' });
});

module.exports = router;
