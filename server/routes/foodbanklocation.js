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
router.post('/del', function(req, res, next){
	let r = JSON.parse(req.body.data)
	console.log(r)
	FoodItem.find({_id:r.id}).remove(function(){
		console.log('some stuff removed')
		res.send({status:"ok"})
	})
})
router.post('/list', function(req, res, next){
		let data = JSON.parse(req.body.data)
		let maxY = data.location.coord.long+0.08
		let maxX = data.location.coord.lat+0.08
		let minY = data.location.coord.long-0.08
		let minX = data.location.coord.lat-0.08
		console.log(data)
		FoodItem.find(
			{
			// 	$and:[
			// 	{"FoodItem.location.coord.lat":{$gt:minX, $lt:maxX}},
			// 	{"FoodItem.location.coord.long":{$gt:minY, $lt:maxY}}
			// ]
		}, 
			function(err, items){
				res.send({item:items})
		})
	   // FoodItem.find({"location.coord.long":, function (err, items){
	   // 	res.send({items:items})
	   // }})
})
module.exports = router;
