var http = require("https");

var options = {
	"method": "GET",
	"hostname": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
	"port": null,
	
	//path .../{Session id}?options like sortType,
	//get Session ID from createSession header->Location->final section
	"path": "/apiservices/pricing/uk2/v1.0/49618f1f-885e-4a6e-8ad6-97ca3d8208e3?sortType=duration&pageIndex=0&pageSize=10",
	"headers": {
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		
		//change here
		"x-rapidapi-key": "f7fb25c9-4313-4d5c-9483-207e3937f7e4"
	}
};

var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();


//ref: https://rapidapi.com/skyscanner/api/skyscanner-flight-search?endpoint=5a9ca032e4b04378c0c99930