var rp = require("request-promise");
var Throttler = require("simple-throttler");

rp.defaults({jar: true});

module.exports = function(delay){

	var th = Throttler(delay);

	var post = function(url, form_data){
		return th( () => rp.post(url, {jar: true}).form(form_data));
	};

	var get = function(url){
		return th( () => rp.get(url, {jar: true}));
	};

	return {
		get: get,
		post: post,
	};
};
