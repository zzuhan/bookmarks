// 加入企业标示，如twitter能有个网页标示出来是twitter

define({
    id: 'js',
    name: 'js',
    desc: 'js相关的内容',
    categories: {
        library: {
            name: "常用库",
            items: [
                {
                    name: 'jQuery',
                    desc: '无需解释',
                    url: 'http://www.jquery.com/'
                },
                {
                    name: 'MomentJS',
                    url: 'http://momentjs.com/'
                },
                {
                    name: 'MockJS',
                    desc: '模拟Ajax服务器，再也不用担心模拟ajax请求',
                    url: 'https://github.com/appendto/jquery-mockjax'
                }
            ]
        },
        framework: {
            name: "框架",
            items: [
                {
                    name: 'YUI',
                    desc: '无需解释',
                    url: 'http://www.jquery.com/'
                },
                {
                    name: 'Kissy',
                    desc: '无需解释',
                    url: 'http://www.jquery.com/'
                },
                {
                    name: 'BUI',
                    desc: 'UI类库',
                    url: 'http://builive.com/'
                }
            ]
        },
        tool: {
            name: '工具',
            items: [
                {
                    name: 'Grunt',
                    desc: 'JavaScript项目构建工具',
                    url: 'http://www.jquery.com/'
                },
                {
                    name: 'CasperJS',
                    desc: '无需解释',
                    url: 'http://www.jquery.com/'
                },
                {
                    name: 'Uglify',
                    url: ''
                },
                {
                    name: 'JSHint',
                    desc: 'JavaScript代码检查，灵活，根据自己需求配置',
                    url: 'http://jshint.com/'
                }
            ]
        },
        mvc: {
            name: 'MVC',
            items: [
                {
                    name: 'Backbone',
                    desription: '应该是使用最多的吧',
                    url: 'http://backbonejs.org/'
                },
                {
                    name: 'AngularJS',
                    url: 'https://angularjs.org/'
                }
            ]
        },
        effetcs: {
            name: '效果库',
            items: [
                {
                    name: 'onepage scroll',
                    desc: '页面切换',
                    url: 'https://github.com/peachananr/onepage-scroll'
                }
            ]
        }
    }
});