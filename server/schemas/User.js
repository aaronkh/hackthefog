const mongoose = require('mongoose')
let user = mongoose.Schema({
	contact : {type: String, default: ""},
 	location: {
		address : String,
	 	coord: [{
	 		lat:Number,
	 		long:Number
	 	}]
	}	
})
// NOTE: do not arrow functions
module.exports = mongoose.model('User', user)