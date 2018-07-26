<template>
  <div id="app" >
    <!-- 顶部区域 -->
    <mt-header fixed title="固定在顶部"></mt-header>
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
import { Toast } from "mint-ui";
export default {
  //es6导出对象的写法
  name: "App",
  methods: {
    tip() {
      Toast({
        message: "测试哈哈哈哈",
        position: " center",
        duration: 1000,
        iconClass: 'icon icon-success'
      });
    }
  }
};
</script>

<style scoped lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 45px;
   padding-bottom: 50px;
  background-color: #fff;
}

</style>
