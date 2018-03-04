var express = require('express');
var router = express.Router();
var User = require('../schemas/User.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test')
});

router.post('/post', function(req, res, next){
	
	let r = JSON.parse(req.body.data)
	console.log(r)
	var newUser = new User(r)
	newUser.save(function(err){
		if(err) throw err
		else console.log("save success")
	})
	// next()
	res.send('ok')
})
router.get('/db', function(req, res, next) {
        User.find({}, function(err, users) {
           res.send({users: users});
        });
})

module.exports = router;
