<template>
  <div id="app">
    <!-- 顶部区域 -->
    <mt-header fixed title="">
      <router-link to="/" slot="left" class="logo">
        <img src="../static/images/header_logo.png">
      </router-link>
      <router-link to="/" slot="right" class="downLoad">
        <img src="../static/images/header_app.png">
      </router-link>
    </mt-header>
    <!--  路由内容-->
    <router-view></router-view>
    <!-- 底部 区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item " to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact">
                     </span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopCar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"> 
                      <span class="mui-badge">0</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
  // import { Header } from 'mint-ui';
  // Vue.component(Header.name, Header);
  export default {
    //es6导出对象的写法
    name: "App",
    methods: {}
  };
  
</script>

<style scoped lang="less">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    padding-top: 40/50rem;
    padding-bottom: 1rem;
    background-color: #fff;
  }
  
  html,
  body {
    height: 100%;
    width: 100%;
    background-color: #f2f2f2;
    color: #000;
    padding-bottom: 1rem;
    box-sizing: content-box;
  }
  
  //头部样式
  .mint-header {
    width: 100%;
    background-color: #ff841d;
    border-bottom: 1/50rem solid #e6e6e6;
    // height: 0.8rem;
    .logo {
      float: left;
      margin-left: 5/50rem;
      padding: 12/50rem;
      display: block;
      >img {
        display: block;
        width: 185/50rem;
        height: 0.5rem;
      }
    }
    .downLoad {
      float: right;
      padding: 7/50rem;
      display: block;
      >img {
        display: block;
        width: 34/50rem;
        height: 34/50rem;
      }
    }
  }
</style>
