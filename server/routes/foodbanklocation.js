//post the pin id that's been taken out
//get list of places near person
//
var express = require('express');
var router = express.Router();
var FoodItem = require('../schemas/FoodItem.js')
/* GET home page. */
router.get('/test', function(req, res, next) {
  res.send(JSON.stringify({'test':true}));
});
router.get('/list', function(req, res, next){
		let data = JSON.parse(req.body.data)
		let maxY = data.location.coord.long+0.08
		let maxX = data.location.coord.lat+0.08
		let minY = data.location.coord.long-0.08
		let minX = data.location.coord.lat-0.08
	   // FoodItem.find({"location.coord.long":, function (err, items){
	   // 	res.send({items:items})
	   // }})
})
module.exports = router;
