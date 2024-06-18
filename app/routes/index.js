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

router.get('/movies', function (req, res, next) {
  res.render('movies', {
    title: 'My Favorite Movies'    
  });
});

router.get('/travels', function (req, res, next) {
  res.render('travels', {
    title: 'My Travels'    
  });
});

router.get('/countries', function (req, res, next) {
  res.render('countries', {
    title: 'Countries Visited'    
  });
});

router.get('/contact', function (req, res, next) {
  res.render('contact', {
    title: 'Contact Me'    
  });
});

module.exports = router;
