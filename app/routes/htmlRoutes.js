// dependencies
var path = require('path');

// routing
module.exports = function (app) {
  // HTML GET requests

  // survey page
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });

  // default to home page
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
}