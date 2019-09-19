var unirest = require("unirest");

var req = unirest("POST", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0");

req.headers({
	"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
	"x-rapidapi-key": "3c95f0fb29mshbd153b344888fe5p19b36fjsn1aa60346eba1",
	"content-type": "application/x-www-form-urlencoded"
});

req.form({
	//optional format yyyy-mm-dd
	"inboundDate": "2019-11-20",
	
	//option “economy”, “premiumeconomy”, “business”, “first” 
	"cabinClass": "economy",
	
	//option
	"children": "0",
	"infants": "0",
	
	//required country code and currency adn locale
	"country": "AU",
	"currency": "AUD",
	"locale": "en-AU",
	
	//required getPlace API
	"originPlace": "PVG-sky",
	"destinationPlace": "CTU-sky",
	
	//required depart date
	"outboundDate": "2019-09-20",
	
	//required
	"adults": "1"
});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

//this will return no content
//call pollSession to get all flight info