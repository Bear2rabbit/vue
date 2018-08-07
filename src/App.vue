<template>
  <div id="app">
    <!-- 顶部区域 -->
    <!-- 头部 -->
    <header class="mmw_header clearfix">
      <div class="logo">
        <router-link to="">
          <img src="./images/header_logo.png">
        </router-link>
      </div>
      <div class="downLoad">
        <router-link to="">
          <img src="./images/header_app.png">
        </router-link>
      </div>
    </header>
    <!-- 搜索部分 -->
    <div class="mmw_search">
      <div class="searchBox">
        <form action="#">
          <div class="searchtxt">
            <input value="" name="key" type="search" placeholder="请输入你想比价的商品">
          </div>
          <div class="searchbtn">
            <input type="button" value="搜索">
          </div>
        </form>
      </div>
    </div>

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
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
    <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    <!-- 广告 -->
    <footer class="mmw_footer">
      <div class="foot_top clearfix">
        <router-link to="javascript:;">登录</router-link>
        <router-link to="javascript:;">注册</router-link>
        <router-link to="" class="back" @click.native.prevent="scrollt">
          <img src="../static/images/top.jpg">返回顶部</router-link>
      </div>
      <div class="foot_bottom">
        <p>
          <router-link to="javascript:;" style="color: Red;">手机APP下载</router-link>
          <router-link to="javascript:;">
            慢慢买手机版</router-link> -- 掌上比价平台</p>
        <p>
          <router-link to="javascript:;"> m.manmanbuy.com</router-link>
        </p>
      </div>
    </footer>
    <div class="mmw_ad">
      <router-link class="closefix" to="" @click.native.prevent="remove"></router-link>
      <div class="icon"></div>
      <p class="titlefix">慢慢买</p>
      <p class="describe">全网比价,查历史价格</p>
      <router-link class="download-btn" to="javascript:;">立即打开</router-link>
    </div>
  </div>
</template>

<script>
// import { Header } from 'mint-ui';
// Vue.component(Header.name, Header);
export default {
  //es6导出对象的写法
  name: "App",
  data() {
    return {
      slide1: [
        {
          src: "https://placekitten.com/100/100",
          msrc: "https://placekitten.com/100/100",
          alt: "picture1",
          title: "Image Caption 1",
          w: 600,
          h: 400
        },
        {
          src: "https://placekitten.com/200/200",
          msrc: "https://placekitten.com/200/200",
          alt: "picture1",
          title: "Image Caption 1",
          w: 400,
          h: 600
        }
      ]
    };
  },
  methods: {
    remove(e) {
      $(e.target)
        .parent()
        .remove();
    },
    scrollt() {
      $("html,body").scrollTop(0);
    },
    handleClose() {
      console.log("close event");
    }
  }
};
</script>

<style scoped lang="less">
.mmw_footer {
  padding-bottom: 1.8rem;
}
</style>
