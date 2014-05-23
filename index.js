  var bitbucket = require('bitbucket-rest');                                            
  var client = bitbucket.connectClient({username : 'username', password : 'password'});
  var unirest = require('unirest');

  client.getRepoDetails({owner:'owner', repo_slug : 'slug'}, function(res){
  	console.log(res.data.links.commits.href);

  	unirest.get(res.data.links.commits.href).auth({
  	  user: 'user',
  	  pass: 'password',
  	  sendImmediately: true
  	}).end(function(r){
  		console.info('request success')
  		console.info(r.body);

  	});
  
  });