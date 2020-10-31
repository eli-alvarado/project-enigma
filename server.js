var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors())


app.get('/message', function(req, res) {
  console.log('message route');
  res.send('choch');
})


app.listen(3001, function(req, res) {
  console.log('Express server started.');
})