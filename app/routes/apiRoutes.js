// load data
var friendData = require('../data/friends.js');

// routing

module.exports = function (app) {
  // API GET request
  // show all friends data
  app.get('/api/friends', function (req, res) {
    res.json(friendData);
  });

  // API POST request
  app.post('/api/friends', function (req, res) {
    // UTILITY
    // add two numbers
    let add = (a, b) => (a + b);
    // turn into integer
    let makeInt = score => parseInt(score);

    // REUSABLE
    // map to ints, reduce scores to sum
    let getSum = (arr) => (arr.map(makeInt).reduce(add, 0));

    // MATCHING
    // get user scores and add them
    let userSum = getSum(req.body.scores);
    console.log('Analyzed ' + req.body.name + '\'s score: ' + userSum);
    // get first friend data
    let theOne = friendData[0];
    // find match
    for (let i = 1; i < friendData.length; i++) {
      let tempOne = friendData[i];
      let yin = yang ? yang : Math.abs(userSum - getSum(theOne.scores));
      let yang = Math.abs(userSum - getSum(tempOne.scores));
      if (yin > yang) {
        theOne = tempOne;
        yin = yang;
      }
    }

    // RESULT
    // store user in friends.js
    friendData.push(req.body);
    // respond with match
    res.json(theOne);
    console.log('Closest match: ' + theOne.name);
    console.log('Score: ' + getSum(theOne.scores));
  });
}