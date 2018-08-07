<template>
  <div>
    <mt-swipe :auto="0">
      <mt-swipe-item v-for="item in swipeList" :key="item.id">
        <img :src="item.img" style=" width: 100%;display: block;">
      </mt-swipe-item>
    </mt-swipe>
    <div class="navbar">
      <ul class="clearfix">
        <li v-for="(item,index) in navList" :key="item.id" @click.prevent="toggle">
          <router-link to="" v-if="index==7">
            <img :src="item.img">
            <div class="mui-media-body">{{item.name}}</div>
          </router-link>
          <router-link :to="'/views/'+item.titlehref" v-else>
            <img :src="item.img" alt="">
            <div class="mui-media-body">{{item.name}}</div>
          </router-link>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
import Vue from "vue";
// 轮播图导入
import { Swipe, SwipeItem } from "mint-ui";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  data() {
    return {
      swipeList: [],
      navList: []
    };
  },
  created() {
    this.getSwipeData();
    this.getList();
  },
  methods: {
    getSwipeData() {
      this.$http
        .jsonp("https://api.douban.com" + "/v2/movie/us_box")
        .then(function(response) {
          // console.log(response);
          if (response.status == 200) {
            response.body.subjects.forEach(el => {
              var obj = { img: el.subject.images.large, id: el.subject.id };
              this.swipeList.push(obj);
            });
            this.swipeList = [
              this.swipeList[0],
              this.swipeList[1],
              this.swipeList[2]
            ];
            // console.log(this.swipeList);
          }
        });
    },
    getList() {
      this.$http
        .jsonp(this.common.mapi + "/api/getindexmenu")
        .then(function(response) {
          console.log(response);
          if (response.status == 200) {
            response.body.result.forEach((el, index) => {
              response.body.result[index].img =
                "../static/" + el.img.split('"')[1];
              response.body.result[index].titlehref = el.titlehref.split(
                "."
              )[0];
            });
            console.log(response);

            this.navList = response.body.result;
          }
        });
    },
    toggle() {
      $(".navbar")
        .find("li:nth-child(n+9)")
        .toggle();
    }
  }
};
</script>
<style scopped lang="less">
.mint-swipe {
  height: 230/50rem;
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
.navbar {
  padding: 10/50rem;
  text-align: center;
  font-size: 16/50rem;
  li {
    width: 25%;
    float: left;
    margin-top: 25/50rem;
    &:nth-child(n + 9) {
      display: none;
    }
    > a {
      display: block;
      width: 85%;
      > img {
        display: block;
        width: 100%;
        margin-bottom: 5/50rem;
      }
    }
  }
}
</style>



