const mongoose = require('mongoose')
let user = mongoose.Schema({
 	"location" : {
		"address" : String,
	 	"coord" : {
	 		"lat" : Number,
	 		"long" : Number
	 	}
	},	
	"contact" : {type: String, default: ""},

})
// NOTE: do not arrow functions
module.exports = mongoose.model('User', user)