let food = [
	{"location": {
		"address" : "75 Fast Lane",
	 	"coord": [525,124]
	}, 
	 "category" : "fruit",
	 "picture" : "http://noteablemusictherapy.com/wp-content/uploads/2017/09/apple.jpg",
	 "item" : "apples",
	 "description" : "Fugi Apples",
	 "id" : 12193049,
	 "contact" : "415-324-1338"
}, 
{"location": {
		"address" : "75 Fast Lane",
	 	"coord": [525,124]
	}, 
	 "category" : "vegetable",
	 "picture" : "https://www.organicfacts.net/wp-content/uploads/2013/05/Corn12.jpg",
	 "item" : "corn",
	 "description" : "New corn as we bred out the old",
	 "id" : 12193049,
	 "contact" : "415-324-1338"
},
{"location": {
		"address" : "75 Fast Lane",
	 	"coord": [525,124]
	}, 
	 "category" : "fruit",
	 "picture" : "http://noteablemusictherapy.com/wp-content/uploads/2017/09/apple.jpg",
	 "item" : "apples",
	 "description" : "Fugi Apples",
	 "id" : 12193049,
	 "contact" : "415-324-1338"
},
{"location": {
		"address" : "1949 Palm Drive",
	 	"coord": [525,124]
	}, 
	 "category" : "fruit",
	 "picture" : "http://noteablemusictherapy.com/wp-content/uploads/2017/09/apple.jpg",
	 "item" : "apples",
	 "description" : "Fugi Apples",
	 "id" : 12193049,
	 "contact" : "415-324-1338"
}]

food = JSON.stringify(food)

let account = 
	{"id" : 12193049,
	 "contact" : "415-324-1338",
	 "location": {
		"address" : "75 Fast Lane",
	 	"coord": [525,124]
		} 
	}
account = JSON.stringify(account)

export {food, account}
