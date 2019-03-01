// dependencies

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();


app.use(express.static("./app/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// api & html routing

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("listening on PORT: " + PORT);
});






