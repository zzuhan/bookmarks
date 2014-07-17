define(function (require, exports, module) {
	// TODO 是否把这些变量tpl, data js path 用变量保存起来

	var App = {
		init: function() {
			this.bindEvents();
		},
		bindEvents: function() {
			$('#navigation .shortcut').toggle(function () {
				$(this).closest('#navigation').addClass('active').find('.shortcut').addClass('arrow-left')
			}, function () {
				$(this).closest('#navigation').removeClass('active').find('.shortcut').removeClass('arrow-left')
			})
		}
	};
	module.exports = App;
 
	// compile template
	var tpl = require('./tpls/section.tpl'),
		render =  template.compile( tpl );

	// render with data
	var dataSet = require('data/index.js');
	_.each(dataSet, function (data, category) {
		var html = render(data);
		$('#' + category).html(html);
	});

	// tooltip
	$('.link-box .list a').popover({
		trigger: 'hover',
		placement: 'bottom',
		delay: {
			show: 200,
			hide: 0
		}
	})

});


