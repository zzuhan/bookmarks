这个目录主要存放自己在github上的一些项目，展示自己功力的时候到了！！

文件夹的命名有点混乱，怎么app文件夹代表什么

导航的目的，快速找到相应的工具，学习的化，找相应的资源

## Plan Feature List

** 像developer.mozilla.org 指示箭头有个翻转的效果
** 加入 【设计和交互】【移动端】
** 像HTML5Rocks 一样，把左边栏导航，未focus使，颜色弱化

                                                                                            
每个box里，标题配上icon
左侧加入一个可折叠进去的导航
每次上线，通过grunt生成纯静态的页面，不需要每次加载一堆js
每个子类型，只显示一行，通过展开按钮，再展开
能否提供检索

借鉴：
http://www.ienav.com/
http://www.whycss.com/

## 分类

1 前端组织，论坛，博客
2 JS 
3 CSS
4 工具
5 文档区


## Todo

高优先级

- 使用多tab或者什么更好的利用有限空间
- 多tab情况下，支持url hash

低优先级

- underscore.js, template.js, jquery.js使用模块化
- 把模板文件独立出来，看看seajs的插件支持否
- item.description 默认值
- animate 做稍微有点延时，就像livepage-loading -webkit-transition:all .2s ease-in 不适用ease-in 换成由快变慢的
- 【重要】只用写数据，每次提交的时候，用node生成几个静态的页面

## 思考

还是先想好我的导航形态，再进行下手，如何能更直接展示组件的效果

流程：
data.js 添加内容
add.js 添加
node build.js 构建网站