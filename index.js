const request = require("request");
let argv = require("yargs").argv;
let apikey = "da9e532566ae485e416828ef3d7569f3";
//var city = 'mumbai';
let city = argv.c || "kolkata";
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`

request(url,function(err,response,body){
	if(err) {
		console.log("Error");
	} else {
		let weather = JSON.parse(body);
		let message = `It is ${weather.main.temp} degrees in ${weather.name} and  minimum current temperature is ${weather.main.temp_min} and maximum temperature is ${weather.main.temp_max} wind ${weather.wind.speed} cloud ${weather.clouds.all}`
		//console.log(weather);
		console.log(message);
	}
})