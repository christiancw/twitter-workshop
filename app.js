const express = require( 'express' );
const nunJ = require('nunjucks');
const app = express();

app.get('/', function(req, res){
  console.log('GET' + req.path);
  var template = nunJ.configure('views', {
    noCache: true,
    express: app});
  // console.log('GET' + res.status(200));
  res.send(template.render('index.html', locals));
})

var locals = {
  title: 'An Example',
  people: [
      { name: 'Gandalf'},
      { name: 'Frodo' },
      { name: 'Hermione'}
    ]
};


var server = app.listen(3000);
