var express = require('express');
var app = express();

// **********************************************


app.get('/', function (req, res) {

	// Donostia. Zubiri-Manteo
	var url = 'http://api.eventful.com/json/events/get?app_key=CCKfK2wWkZpkRWT9&id=V0-001-000104270-1';

	var request = require('request');
	request({url:url, json:"true"}, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log(body);
			res.json(body);
		} else {
			console.log(body);
			console.log(error);
			res.json({erroor:"request error"});
		}
	});

});



var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening in port %d', server.address().port);
});