const mongoose = require('mongoose')
let foodItem = mongoose.Schema({
	location: {
			address : {type: String, default: ""},
		 	coord: [{
		 		lat:Number,
		 		long:Number
		 	}]
		}, 
	category : String,
	picture : {
	 	type: String, 
	 	default: "http://noteablemusictherapy.com/wp-content/uploads/2017/09/apple.jpg"
	 },
	description : String,
	contact : String,
	//_id auto created
})
//hello
//NOTE: do not arrow function
module.exports = mongoose.model('FoodItem', foodItem)