var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

var tables = [
	{
		"customerName": "Kendra",
		"phoneNumber": "4089991111",
		"customerEmail": "kendra@kendra.com",
		"customerID": "fasfasf"
	},
	{
		"customerName": "Anna",
		"phoneNumber": "4084442222",
		"customerEmail": "anna@anna.com",
		"customerID": "gghhaa"
	},
	{
		"customerName": "Jared",
		"phoneNumber": "4081234567",
		"customerEmail": "jared@jared.com",
		"customerID": "dgdgdg"
	},
]

var waitlist = []

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "home.html"));
})
app.get("/tables", function(req, res){
	res.sendFile(path.join(__dirname, "tables.html"));
})
app.get("/reservation", function(req, res){
	res.sendFile(path.join(__dirname, "reservation.html"));
})
app.get("/api/tables", function(req, res){
	return res.json(tables);
})

app.get("/api/waitlist", function(req, res){
	return res.json(waitlist);
})

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
