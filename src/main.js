// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 导入app组件
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import $ from "jquery"
Vue.prototype.common={
  api: 'https://api.douban.com',
  // mapi: 'http://127.0.0.1:3000'
  mapi:'http://mmb.ittun.com'
}
// import { Header } from 'mint-ui';
// Vue.component(Header.name, Header);
// import 'mint-ui/lib/index.js'
Vue.use(Mint);
// 导入mui样式
import "../static/mui/css/mui.css"
import "../static/mui/css/icons-extra.css"
Vue.config.productionTip = false
// 导入resource
import "../static/common.css"
import Vueresource from 'vue-resource'
Vue.use(Vueresource)

import axios from "axios";
Vue.prototype.$axios = axios

import moment from "moment"
Vue.filter("datefmt", (input,formatStr)=>{
  return moment(input).format(formatStr)
})

import scrollBehavior from 'vue-scroll-behavior'
Vue.use(scrollBehavior, { router: router })

import VuePreview from 'vue-preview'
// Vue.use(VuePreview)
Vue.use(VuePreview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: { top: 0, bottom: 0 },
  captionEl: false,//底部文字介绍
  fullscreenEl: true,
  shareEl: true,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: true//点击背景退出全屏
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render:c=>c(app),//rander是vue渲染函数
  router,//挂载路由到实例对象
  components: { App },
  template: '<App/>'
})
