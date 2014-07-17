// 加入企业标示，如twitter能有个网页标示出来是twitter

define({
	name: '工具',
	desc: 'url帮你生成指定大小图片，模仿图片延迟，html5可视化编程，在线编写代码测试',
	categories: {
		regex: {
			name: "正则",
			items: [
				{
					name: 'regexr ',
					desc: '功能强大，用户社区提供很多实用的正则like Regexp buddy',
					url: 'http://www.regexr.com/'
				},
				{
					name: '正则解析树',
					desc: '显示一个可视的解析树',
					url: 'http://jviereck.github.io/regexp.js/'
				},
				{
					name: '简单正则表达式',
					desc: '中国chinaz，易用，可满足简单需求测试',
					url: 'http://tool.chinaz.com/regex'
				},
				{
					name: 'HEXPRESS',
					desc: '人类语言定义正则表达式',
					url: 'http://krainboltgreene.github.io/hexpress/'
				}
			]
		},
		img: {
			name: "图片",
			items: [
				{
					name: '图片占位',
					desc: '方便在设计师还未出图的时候，url参数来实现任意大小的图片，而且大小非常小',
					url: 'http://img-api.allenm.me/200-300.png',
					author: {
						name: 'allenm'
					}
				},
				{
					name: '模仿图片5秒延时加载',
					desc: '方便你测试获取图片慢的时候的情况，参数可实现延时任意时间',
					url: '<img src="http://lab.allenm.me/delay-img/delay.php" alt="5s delay" />',
					author: {
						name: 'allenm'
					}
				},
				{
					name: '阿里矢量图标库',
					desc: '方便的搜索功能，再也不用发愁到处找icon了，响应式设计必备',
					url: 'http://www.iconfont.cn/'
				}
			]
		},
		demo: {
			name: '在线演示',
			items: [
				{
					name: 'dabblet',
					desc: '设计师做的演示网站',
					url: 'http://dabblet.com/'
				},
				{
					name: 'jsfiddle',
					url: 'http://jsfiddle.net/'
				}
			]
		},
		other: {
			name: "其它",
			items: [
				{
					name: 'Bower web包管理工具',
					desc: 'Twitter 开发的一个web包管理工具，依赖于Node和npm',
					url: 'http://bower.io/',
					author: {
						name: 'twitter',
						type: 'company'
					}
				},
				{
					name: '在线JS/CSS/HTML压缩',
					desc: 'oschina提供，易用',
					url: 'http://tool.oschina.net/jscompress'	
				},
				{
					name: '随时随地创建静态文件服务器',
					desc: '基于nodejs的工具，方便的创建静态文件服务器,方便引入各种库',
					url: 'https://npmjs.org/package/anywhere'
				},
				{
					name: '随机码生成',
					url: 'http://www.unsv.com/mima/'
				},
				{
					name: 'StackEdit',
					desc: 'Stack出品的Markdown编辑器',
					url: 'https://stackedit.io/'
				},
				
				
				{
					name: '思维导图',
					url: 'http://naotu.baidu.com/'
				}
			]
		}
	}
});