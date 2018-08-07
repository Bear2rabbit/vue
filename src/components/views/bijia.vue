
 <template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
        <router-link :to="'/views/cateInfo/'+item.productId">
          <!-- <img class="mui-media-object mui-pull-left" src="../../../static/images/1.png" > -->
          <div class="mui-media-object mui-pull-left" v-html="item.productImg"></div>
          <div class="mui-media-body">
            <div class="clearfix info">
              <div class="title">{{item.productName}}</div>
              <div class="price"> {{item.productPrice}}</div>
              <div class="quote">{{item.productQuote}}</div>
              <div class="sales f_left">{{item.productCom}}</div>
            </div>
          </div>
        </router-link>
      </li>
      <infinite-loading @infinite="onInfinite" ref="infiniteLoading">
        <span slot="spinner"><img src="../../../static/images/loading_green.gif"></span>
        <h4 slot="no-more">暂无更多数据 </h4>
      </infinite-loading>
    </ul>
  </div>
</template>
<script>
import InfiniteLoading from "vue-infinite-loading";
export default {
  components: {
    InfiniteLoading
  },
  data() {
    return {
      list: [],
      id: 0,
      pageid: 1,
      total: 0
    };
  },
  created() {
    this.id = this.$route.params.id;
    // this.getNewsData();
  },
  methods: {
    onInfinite($state) {
      this.$http
        .jsonp(
          "http://mmb.ittun.com/api/getproductlist?categoryid=" +
            this.id +
            "&pageid=" +
            this.pageid
        )
        .then(function(response) {
          console.log(response);
          if (response.body.result.length) {
            this.total = Math.ceil(
              response.body.totalCount / response.body.pagesize
            );
            this.list.push(...response.body.result);
            $state.distance = 1000;
            $state.loaded();
            this.pageid++;
          } else {
            $state.complete();
          }
        });
    }
  }
};
</script>
<style  scopped lang="less">
.mui-table-view {
  padding-bottom: 2rem;
}
.mui-table-view .mui-media-object {
  max-width: 100/50rem;
  height: 100/50rem;
}

.info {
  float: left;
  width: 229/50rem;
  > .title {
    text-align: center;
    white-space: normal;
    color: #333333;
    word-break: break-all;
    font-size: 15/50rem;
    line-height: 28/50rem;
    height: 56/50rem;
    overflow: hidden;
  }
  .price {
    color: red;
    font-size: 16/50rem;
    text-align: left;
    margin-bottom: 5/50rem;
  }
  .quote {
    float: left;
    margin-right: 10/50rem;
  }
}
</style>
