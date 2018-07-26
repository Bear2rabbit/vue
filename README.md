# zzg

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##制作首页App组件
1.完成header的制作，属于mini-UI的Header组件
2.制作底部，使用的是mui的tabbar.html代码块
3.中间放router-view展示匹配到的组件
4.购物车代码需要添加extra样式和字体图标
5.将tabbar中的a链接改为router-link href改为to,href内容为路由路径
6.底部路由实现点击高亮在路由规则中使用linkActiveClass:"mui-active"
npm install less less-loader --save-dev 安装less
<style scoped lang="less">
</style>
7.制作轮播图，引用minit组件
npm install vue-resource -S 安装vue-resource
在main.js导入
