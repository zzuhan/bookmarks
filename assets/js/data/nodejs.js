define({
    name: 'nodejs',
    desc: 'nodejs',
    categories: {
        web: {
            name: 'web模块',
            items: [
                {
                    name: 'connect',
                    desc: '网站中间件，静态资源管理，cookie-session，body-parser',
                    url: 'https://www.npmjs.org/package/connect'
                },
                {
                    name: 'request',
                    desc: '客户端http请求',
                    url: 'https://www.npmjs.org/package/request'
                },
                {
                    name: 'expressjs',
                    url: 'http://expressjs.com/'
                },
                {
                    name: 'cheerio',
                    url: 'https://github.com/cheeriojs/cheerio',
                    desc: '字符串解析为可操作的DOM结构'
                }
            ]
        },
        tool: {
            name: '工具',
            items: [
                {
                    name: 'forever',
                    desc: '让node进城在后台跑',
                    url: 'https://www.npmjs.org/package/forever'
                }
            ]
        }
    }
});