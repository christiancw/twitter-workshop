const express = require( 'express' );
const app = express();

app.get('/', function(req, res){
  console.log('GET' + req.path);
  res.send('hello');
})




var server = app.listen(3000);
