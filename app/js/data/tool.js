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
			description: '',
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
		}
	]
});