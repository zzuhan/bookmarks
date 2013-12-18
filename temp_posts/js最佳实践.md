
1 你的代码就是一个故事，让你的故事情节更加容易理解


## 使用闭包和模块模式

Keep consistent syntax and mix and match what to make global

var module = function(){
	var current = null;
	var labels = {
		'home': 'home',
		'articles': 'articles',
		'contace': 'contact'
	};
	var init = function(){};
	var show = function(){current=1};
	var hide = function(){show();}
	return {init:init,show:show,hide:hide}
}();
module.init();

## 使用jslint检测你的代码

## 注释够用不要太多
“Good code explains itself” is an arrogant myth.

注重注释的样式，不影响看代码

## 模块化

让你的代码模块化，专一化

写些小的，一般的helper函数，功能专一而不是完成所有功能

好的代码应该很容易在此基础上构建，而不是重写核心代码

## 渐进增强
js生成DOM慢而且是耗费资源

## 