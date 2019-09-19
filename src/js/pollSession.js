var http = require("https");

var options = {
	"method": "GET",
	"hostname": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
	"port": null,
	
	//path .../{Session id}?options like sortType,
	//get Session ID from createSession header->Location->final section
	"path": "/apiservices/pricing/uk2/v1.0/8075c694-53f0-4e72-98dc-5fd9255ab378?sortType=duration&pageIndex=0&pageSize=10",
	"headers": {
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		
		"x-rapidapi-key": "3c95f0fb29mshbd153b344888fe5p19b36fjsn1aa60346eba1"
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