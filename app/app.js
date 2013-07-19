define([
	'datas/tools'
], function(tools){
	
	var App = {
		init: function() {
			console.log('init');
			this.bindEvents();
		},
		bindEvents: function() {
			$('.name').parent().next().hide().end().end().click(function(){
				$(this).parent().next().show();
				return false;
			});
		}
	};
	// 写一个index的加载页面
	var template =  _.template( $('#item-template').html() );
	var string = template(tools);
	console.log(tools.num_items);

	$('#tools').append(string);


	return App;
})