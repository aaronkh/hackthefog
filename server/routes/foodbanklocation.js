//post the pin id that's been taken out
//get list of places near person
//
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
  res.send(JSON.stringify({'test':true}));
});
router.get('/list', function(req, res, next){
	res.send(JSON.stringify([
			//list of objects
		]))
})
module.exports = router;
