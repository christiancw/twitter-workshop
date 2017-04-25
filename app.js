const express = require( 'express' );
const nunJ = require('nunjucks');
const routes = require('./routes')
const app = express();

// app.get('/', function(req, res){
//   console.log('GET' + req.path);
// })

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunJ.render); // when giving html files to res.render, tell it to use nunjucks
nunJ.configure('views', {noCache : true}); // point nunjucks to the proper directory for templates

app.use('/', routes);
app.use(express.static('public'));



var locals = {
  title: 'An Example',
  people: [
      { name: 'Gandalf'},
      { name: 'Frodo' },
      { name: 'Hermione'}
    ]
};


var server = app.listen(3000);
