

## 放大模式

通俗讲就是输入一个模块添加一些方法，生成更加强大的模块
var module2 = function(module){
	module.fn1 = function(){};

	return module;
}(module1);


## 输入全局变量

保证模块的独立性，模块内部最好不与程序的其他部分直接交互
将全局变量输入

var module1 = function($, YAHOO){
	

}(jQuery, YAHOO);

除了保证模块的独立性，还使得模块之间的依赖关系变得明显