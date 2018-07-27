 <template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id" >
                <router-link :to="'/news/newinfo/'+item.productId">
                    <img class="mui-media-object mui-pull-left" src="../../../static/images/1.png">
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
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getNewsData();
  },
  methods: {
    getNewsData() {
      this.$http
        .jsonp(
          "http://mmb.ittun.com/api/getproductlist?categoryid=1&pageid=1"
        )
        .then(function(response) {
          console.log(response);
          if (response.status == 200) {
            this.list = response.body.result;
            console.log(this.list);
          }
        });
    }
  }
};
</script>
<style  scopped lang="less">
.mui-table-view .mui-media-object{
    max-width: 100px;
    height: 100px;
}

.info {
  float: left;
  width: 229px;
  > .title {
    text-align: center;
    white-space: normal;
    color: #333333;
    word-break: break-all;
    font-size: 15px;
    line-height: 28px;
    height: 56px;
    overflow: hidden;
  }
  .price {
    color: red;
    font-size: 16px;
    text-align: left;
    margin-bottom: 5px;
  }
  .quote {
    float: left;
    margin-right: 10px;
  }
}
</style>
