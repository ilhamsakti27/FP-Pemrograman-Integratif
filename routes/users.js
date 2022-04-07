var express = require('express');
var router = express.Router();

// next, digunakan untuk menghandle middleware
// req, request
// res, response

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
