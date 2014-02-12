// 加入企业标示，如twitter能有个网页标示出来是twitter

define({
	id: 'tool',
	name: '辅助工具',
	description: 'url帮你生成指定大小图片，模仿图片延迟，html5可视化编程，在线编写代码测试',
	items: [
		{
			name: '图片占位',
			description: '方便在设计师还未出图的时候，url参数来实现任意大小的图片，而且大小非常小',
			url: 'http://img-api.allenm.me/200-300.png',
			author: {
				name: 'allenm'
			}
		},
		{
			name: '模仿图片5秒延时加载',
			description: '方便你测试获取图片慢的时候的情况，参数可实现延时任意时间',
			url: '<img src="http://lab.allenm.me/delay-img/delay.php" alt="5s delay" />',
			author: {
				name: 'allenm'
			}
		},
		{
			name: 'Bower web包管理工具',
			description: 'Twitter 开发的一个web包管理工具，依赖于Node和npm',
			url: 'http://bower.io/',
			author: {
				name: 'twitter',
				type: 'company'
			}
		},
		{
			name: '在线JS/CSS/HTML压缩',
			description: 'oschina提供，易用',
			url: 'http://tool.oschina.net/jscompress'	
		},
		{
			name: 'sass',
			description: 'css预编译',
			url: 'http://sass-lang.com'
		},
		{
			name: '阿里矢量图标库',
			description: '方便的搜索功能，再也不用发愁到处找icon了，响应式设计必备',
			url: 'http://www.iconfont.cn/'
		},
		{
			name: '获取网站配色方案',
			description: '获取网站配色，还有颜色占比，目前还不知其如何计算的',
			url: 'http://webcolourdata.com/'
		},
		{
			name: '随时随地创建静态文件服务器',
			description: '基于nodejs的工具，方便的创建静态文件服务器,方便引入各种库',
			url: 'https://npmjs.org/package/anywhere'
		},
		{
			name: '正则表达式',
			description: '功能强大，用户社区提供很多实用的正则',
			url: 'I forget'
		},
		{
			name: '正则解析树',
			description: '显示一个可视的解析树',
			url: 'http://jviereck.github.io/regexp.js/'
		},
		{
			name: '简单正则表达式',
			description: '中国chinaz，易用，可满足简单需求测试',
			url: 'http://tool.chinaz.com/regex'
		},
		{
			name: 'HEXPRESS',
			description: '人类语言定义正则表达式',
			url: 'http://krainboltgreene.github.io/hexpress/'
		},
		{
			name: 'StackEdit',
			description: 'Stack出品的Markdown编辑器',
			url: 'https://stackedit.io/'
		},
		{
			name: 'CSS3 Factory',
			description: 'CSS3 工厂，辅助生成css3代码',
			url: 'http://www.css3factory.com/'
		},
		{
			name: 'CSS3 按钮交互效果',
			url: 'http://tympanus.net/Development/CreativeButtons/'
		},
		{
			name: 'HTML5 幻灯片',
			url: 'http://bartaz.github.io/impress.js'
		}

	]
});