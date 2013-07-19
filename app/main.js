// 未写baseUrl的时候，默认是以main.js为起点
// console.log(requirejs);

requirejs.config({
	baseUrl: 'app/',
	paths: {
		'tools': 'datas/tools',
		'app': 'app',
		'jquery': 'js/lib/183',
		'underscore': 'js/lib/underscore'
	},
	shim: {
		'app': {
			deps: ['jquery', 'underscore']
		}
	}
});

require([
	'app'
], function(App){
	App.init();
});