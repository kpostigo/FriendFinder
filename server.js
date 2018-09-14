// require dependencies
var express = require('express');
var bodyParser = require('body-parser');

// express set up
var app = express();
var PORT = process.env.PORT || 8080;

// data parsing for express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// router
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// start server for listening
app.listen(PORT, function () {
  console.log("FriendFinder listening on: " + PORT);
});