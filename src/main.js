// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 导入app组件
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import $ from "jquery"
// import { Header } from 'mint-ui';
// Vue.component(Header.name, Header);
// import 'mint-ui/lib/index.js'
Vue.use(Mint);
// 导入mui样式
import "../static/mui/css/mui.css"
import "../static/mui/css/icons-extra.css"
Vue.config.productionTip = false
// 导入resource
import Vueresource from 'vue-resource'
Vue.use(Vueresource)
import "../static/common.css"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render:c=>c(app),//rander是vue渲染函数
  router,//挂载路由到实例对象
  components: { App },
  template: '<App/>'
})
