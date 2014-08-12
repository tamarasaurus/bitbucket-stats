var Stats = require('./index'),
	stats = new Stats();
var express = require('express');
var app = express();



app.get('/repo/:owner/:slug', function(req, res) {
	console.info(stats);
	stats.getRepoDetails(req.params, function(data) {
		res.json(data);
	});
});

app.listen(8888);