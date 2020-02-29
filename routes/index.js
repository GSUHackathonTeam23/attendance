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

/* GET classview page. */
router.get('/grades', function(req, res, next) {
  res.render('grades', { title: 'Student Grades' });
});

/* GET classview page. */
router.get('/attendance', function(req, res, next) {
  res.render('attendance', { title: 'Attendance Calendar' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Attendance Calendar' });
});

module.exports = router;
