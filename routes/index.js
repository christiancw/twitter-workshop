const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

var Tweet = function(name, content){

}

module.exports = function(io){
  router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    res.render( 'index', { tweets: tweets, showForm : true } );
  });

  router.get('/users/:name', function(req, res){
    var name = req.params.name;
    var list = tweetBank.find( {name: name} );
    res.render( 'index', { tweets: list, showForm : true, value: name } );
  });

  router.post('/tweets', function(req, res) {
    console.log(req.body)
    var name = req.body.name;
    // console.log(req.body);
    var text = req.body.text;
    tweetBank.add(name, text);
    io.sockets.emit('newTweet', new Tweet(name, text));
    res.redirect('/');
  });

  return router;
}
