var express = require('express');
var cors = require('cors');
// import the function that is exported from the file './shopify'
const shopify = require('./shopify');

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


// To test, start the express server and hit this route: http://localhost:3001/shopify
app.get('/shopify', function(req, res) {
  shopify(function(response) {
    res.send(response);
  })
})

app.listen(3001, function(req, res) {
  console.log('Express server started.');
})

// malexander@es99.agency 
// Temp102-0964