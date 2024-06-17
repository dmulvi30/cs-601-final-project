var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'My Life'    
  });
});

router.get('/education', function (req, res, next) {
  res.render('education', {
    title: 'My Education'    
  });
});

router.get('/family', function (req, res, next) {
  res.render('family', {
    title: 'My Family'    
  });
});

router.get('/books', function (req, res, next) {
  res.render('books', {
    title: 'My Favorite Books'    
  });
});

router.get('/movies', function (req, res, next) {
  res.render('movies', {
    title: 'My Favorite Movies'    
  });
});

router.get('/hobbies', function (req, res, next) {
  res.render('hobbies', {
    title: 'My Hobbies'    
  });
});

router.get('/kids', function (req, res, next) {
  res.render('kids', {
    title: 'My Kids'    
  });
});

router.get('/wife', function (req, res, next) {
  res.render('wife', {
    title: 'My Wife'    
  });
});

router.get('/history', function (req, res, next) {
  res.render('history', {
    title: 'My Personal History'    
  });
});

router.get('/travels', function (req, res, next) {
  res.render('travels', {
    title: 'My Travels'    
  });
});

router.get('/resume', function (req, res, next) {
  res.render('resume', {
    title: 'My Resume'    
  });
});

router.get('/contact', function (req, res, next) {
  res.render('contact', {
    title: 'Contact Me'    
  });
});

router.get('/countries', function (req, res, next) {
  res.render('countries', {
    title: 'Countries Visited'    
  });
});

module.exports = router;
