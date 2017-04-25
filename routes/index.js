const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const bodyParser = require('body-parser');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm : true } );
});

router.get('/users/:name', function(req, res){
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list } );
});

// router.get('/stylesheets/style.css', function(req, res) {
//   res.sendFile('stylesheets/style.css', {root: './public/'},
//   function(err){
//     if(err) throw err;
//     console.log('Sent file');
//   })
// })

module.exports = router;
