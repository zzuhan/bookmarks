define(function (require, exports, module) {
	// 是否应该把name，description糅合进去，因为name,description可能是根据页面
	// 的不同有所不同，暂时先这样用
	exports.tool = require('./tool');
	exports.cheatsheet = require('./cheatsheet');
	exports.cdn = require('./cdn');
	exports.ui = require('./ui');
	exports.compatible = require('./compatible');
	exports.docs = require('./docs');

});