// dependencies
var friends = require("../data/friends.js");
var path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.json(path.join(__dirname, "public/home.html"));
      });


    app.post("/api/friends", function (req, res) {
    console.log(req.body.scores);

    // get user information
    var user = req.body;

    // parseInt scores

    for (var i = 0; i < user.scores.length; i++) {
        user.scores[i] = parseInt(user.scores[i]);
    }

    // super secret friend matching technology

    var friendIndex = 0;
    var minDiff = 40;

    for (var i = 0; i < friends.length; i++) {
        var totalDiff = 0;
        for (var j = 0; j < friends[i].scores.length; j++) {
            var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
            totalDiff += difference;
        }

        if (totalDiff < minDiff) {
            friendIndex = i;
            minDiff = totalDiff
        }
    } 

        friends.push(user);

        res.json(friends[friendIndex]);
    });
};