var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors())


app.get('/message', function(req, res) {
  var someObject = {
    "message": "what's a god to a non-believer",
    "statusCode": 1,
    "errors": []
  }
  console.log('message route');
  res.send(someObject);
})


app.listen(3001, function(req, res) {
  console.log('Express server started.');
})