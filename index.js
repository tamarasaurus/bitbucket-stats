var bitbucket = require('bitbucket-rest');
var config = require('./config');
var client = bitbucket.connectClient(config);

// install diff parser
module.exports = (function() {
	var stats = function() {};

	stats.prototype = {
		getRepoDetails: function(params, cb) {
			client.getRepoDetails({
				owner: params.owner,
				repo_slug: params.slug
			}, function(res) {
				cb.call(null, res);
			});
		},
        getCommitDetails: function(href){

        }
	};

	return stats;
}());