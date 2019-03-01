// dependencies
var friends = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
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