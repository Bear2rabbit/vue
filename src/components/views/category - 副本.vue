<template>
  <div class="content">
  
    <!-- 主体部分 -->
    <div class="main">
      <ul class="products clearfix">
        <li class="product" v-for="(item,index) in cateData" :key="item.titleId" :data-id="item.titleId">
          <router-link to="" class="unfold" @click.native="fade">{{item.title}}</router-link>
          <ul class="pulldown clearfix" style="display: none;" >
            <!-- <li v-for="data in item.list" :key="data.categoryId" >
              <router-link to="" >{{data.category}}</router-link>
            </li> -->
            <li v-for="data in cateList[index]" :key="data.categoryId" >
              <router-link to="">{{data.category}}</router-link>
            </li>
          </ul>
        </li> 
      </ul>
    </div>
    <!-- 底部 -->
    <footer class="mmw_footer">
      <div class="foot_top clearfix">
        <router-link to="javascript:;">登录</router-link>
        <router-link to="javascript:;">注册</router-link>
        <router-link to="javascript:;" class="back">
          <img src="../../images/top.jpg">返回顶部</router-link>
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
      <router-link class="closefix" to="javascript:;"></router-link>
      <div class="icon"></div> 
      <p class="titlefix">慢慢买</p>
      <p class="describe">全网比价,查历史价格</p>
      <a class="download-btn" to="javascript:;">立即打开</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cateData: [],
      cateList: []
    };
  },

  beforeMount() {
    this.getCateData();
  },
  methods: {
    getCateData() {
      this.$axios
        .get(this.common.mapi + "/api/getcategorytitle")
        .then(response => {
          console.log(response);
          if (response.status == 200) {
            this.cateData = response.data.result;
            // console.log(this.cateData);
            this.getCateList();
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    async getCateList() {
      let arr = [];
      let res = [];
      this.cateData.forEach((ele) => {
        arr.push(
          this.$http.get(this.common.mapi + "/api/getcategory", {
            params: { titleid: ele.titleId }
          })
        );
      });
      try {
        res = await Promise.all(arr);
      } catch (err) {
        console.log(err);
      }
      console.log(res);
      res.forEach(item => {
        this.cateList.push(item.body.result);
      });
      console.log(this.cateList);
    },

    fade(e) {
      $(e.target).toggleClass("in");
      $(e.target).next().toggle();
    }
  }
};
</script>
<style lang="less" scoped>
.main {
  padding: 5/50rem;

  padding-bottom: 0;

  > .products {
    background: #ebebeb;
    border-radius: 0.1rem;
    border: 1/50rem solid #ccc;
    font-size: 14/50rem;
    color: #666;
    > .product {
      border-bottom: 1/50rem solid #ccc;
      > a {
        line-height: 40/50rem;
        color: #000;
        font-size: 16/50rem;
        display: block;
        padding-left: 16/50rem;
        font-weight: bold;
        background: url(../../images/arrow2.gif) right center no-repeat;
        &.in {
          background: url(../../images/arrow1.gif) right center no-repeat;
        }
      }
      > ul {
        width: 100%;
        background: #f9f9f9;
        border-bottom: 1/50rem solid #888;

        > li {
          float: left;

          border-bottom: 1/50rem solid #ccc;

          border-right: 1/50rem solid #ccc;

          text-align: center;

          width: 33.33%;

          height: 40/50rem;

          line-height: 40/50rem;

          > a {
            display: block;

            height: 100%;

            width: 100%;
          }
        }
      }
    }
  }
}
</style>
