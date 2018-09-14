// dependencies
var path = require('path');

// routing
module.exports = function (app) {
  // HTML GET requests

  // default to home page
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });

  // survey page
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '../pubic/survey.html'));
  });
}