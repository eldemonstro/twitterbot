console.log("Bot is starting")

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);


var stream = T.stream('user');

//stream.on('follow', followed);

function followed(event) {
	var name = event.source.name;
	var screenName = event.source.screen_name;
	tweetIt('@' + screenName + ' THANK YOU')
}


tweetIt();
setInterval(tweetIt, 1000 * 60);

function tweetIt(txt) {
	var r = Math.floor(Math.random() * 100);

	T.post('statuses/update', 
		{ status: txt}, 
		function(err, data, response) {
	  console.log(data.text)
	  if (!err)
	  	console.log("IT WORKED");
	})
}

/*
T.get('search/tweets', 
	{ q: 'saakichan', count: 2 }, 
	function(err, data, response) {
  console.log(data);
  var twitts = data.statuses;
  for (var i = 0; i < twitts.length; i++) {
  	console.log(twitts[i].text);
  }
})*/

