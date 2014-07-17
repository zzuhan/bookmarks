define(function (require, exports, module) {
	// 是否应该把name，desc糅合进去，因为name,desc可能是根据页面
	// 的不同有所不同，暂时先这样用
	exports.tool = require('./tool');
    exports.css = require('./css');
    exports.site = require('./site');
    exports.js = require('./js');
    exports.nodejs = require('./nodejs');




	// exports.cheatsheet = require('./cheatsheet');
	// exports.cdn = require('./cdn');
	// exports.ui = require('./ui');
	// exports.compatible = require('./compatible');

});