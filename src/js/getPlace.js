var http = require("https");

var options = {
	"method": "GET",
	"hostname": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
	"port": null,
	// v1.0/Location/Currency/Language/?query=place
	"path": "/apiservices/autosuggest/v1.0/AU/AUD/en-AU/?query=Shang",
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


//ref:https://rapidapi.com/skyscanner/api/skyscanner-flight-search/endpoints
