<template>
    <div>
        <mt-swipe :auto="0">
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.img" style=" width: 100%;display: block;">    
            </mt-swipe-item>           
        </mt-swipe>
        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/news/newList">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
		            <!-- <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-gear"></span>
		                    <div class="mui-media-body">Setting</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-info"></span>
		                    <div class="mui-media-body">about</div></a></li>
		           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-more"></span>
		                    <div class="mui-media-body">more</div></a></li> -->
		        </ul> 
		</div>
	
    </div>
</template>
<script>
import Vue from "vue";
import common from "../../common.js";
// 轮播图导入
import { Swipe, SwipeItem } from "mint-ui";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getSwipeData();
  },
  methods: {
    getSwipeData() {
      this.$http
        .jsonp(common.api + "/v2/movie/us_box")
        .then(function(response) {
          console.log(response);
          if (response.status == 200) {
            response.body.subjects.forEach(el => {
              var obj = { img: el.subject.images.large, id: el.subject.id };
              this.list.push(obj);
            });
            this.list = [this.list[0], this.list[1], this.list[2]];
            console.log(this.list);
          }
        });
    }
  }
};
</script>
<style scopped lang="less">
.mint-swipe {
  height: 230px;
  .mt-swipe-item {
    > img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
}
.mint-swipe-indicator.is-active {
  background-color: orange;
}
.mint-swipe-indicator {
  background: #fff;
  opacity: 1;
}
</style>



