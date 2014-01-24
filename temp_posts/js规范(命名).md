## 注释

单行注释
对于单行代码的注释，// 写代码后面，不影响阅读代码
如果注释本来就很长，那就写其上面

## 变量声明

### var声明位置

产生新的作用域上下文 context，变量都声明在新作用域中

```javascript
$.post(url, data, function(r){
	var errno = r.errno,
		posts = r.data.posts;

	_.each(posts, function(post){
		var title = post.title,
			author = post.author;

		// do something ...
	});
})
```javascript


## 编码风格

### Properties and methods
私有的属性，变量和方法，用‘_’下划线开头 
保护属性，变量和方法名不需要下划线开头，和公共变量名一样

### Method and function parameter
可选参数 opt_开头
*可选和可变参数，尽量在@param标记说明*

### 私有域保护域
标记为@pravite表明只能在当前文件使用



## Examples

### 如果是个集合,大的命名空间，可以考虑用大写
App.Helpers
Model.Utils

### 事件名
元素+动作
calendar.on('dateClick')

### 一些函数命名

access, create, manipulate, 
updateTableList
updateCurrentBox

### 逻辑函数命名

setup
init

### 一些名词命名
oneElement , allElements
listNode, listEl


### 一些变量名

flag 标记

## 可参考的资源

http://www.w3.org/TR/wai-aria/rdf_model.svg

### j前缀

jlink
jbtn
j+动作
jtext || jel
