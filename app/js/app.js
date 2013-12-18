define(function (require, exports, module) {
	var dataSet = require('data/index.js');
	var App = {
		init: function() {
			this.bindEvents();
		},
		bindEvents: function() {
			$('.name').parent().next().hide().end().end().click(function(){
				$(this).parent().next().show();
				return false;
			});
		}
	};
	module.exports = App;

	var render =  template.compile( $('#section-template').html() );
	console.log(dataSet);
	_.each(dataSet, function (data) {
		var html = render(data);
		$('#' + data.id).html(html);
	});


});

