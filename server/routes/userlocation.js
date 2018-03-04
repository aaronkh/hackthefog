//post location
//post image
//post desc
//maybe put it in all one method?
var FoodItem = require('../schemas/FoodItem.js')
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
  res.json({"hello":"hellos"})
});

router.post('/post', function(req, res, next){
	let r = JSON.parse(req.body.data)
	console.log(r)
	var newUser = new FoodItem(r)
	newUser.save(function(err){
		if(err) throw err
		else console.log("save success")
	})
	// next()
	res.send('ok')
})

module.exports = router;
