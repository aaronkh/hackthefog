//post location
//post image
//post desc
//maybe put it in all one method?

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
  res.json({"hello":"hellos"})
});

router.get('/post', function(req, res, next){
	//save to db
})

module.exports = router;
