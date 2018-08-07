 <template>
  <div>
    <div class="filterBox clearfix">
      <ul>
        <li>
          <router-link to="/home">首页
            <span>></span>&nbsp;&nbsp;</router-link>
        </li>
        <li>
          <router-link :to="'/views/category/'+categoryid"> {{name}} ></router-link>
        </li>
        <li id="category">
          <router-link to="#">{{info.name}}</router-link>
        </li>
      </ul>
    </div>

    <div class="productInfo">
      <div class="title">{{info.productName}}</div>
      <div class="pic">
        <div v-html="info.productImg"></div>
        <a href="javascript:;">
          <img src="../../../static/images/sc.jpg" width="39" height="39">
        </a>
      </div>
    </div>

    <div class="footnav mmw_footer ">
      <div class="foot_top clearfix" @click.prevent="tabcactive">
        <router-link to="" class="active">比价购买</router-link>
        <router-link to="">产品参数</router-link>
        <router-link to="">评价</router-link>
      </div>
    </div>
    <div class="compare" v-html="info.bjShop">

    </div>
    <div class="note">
      * 实际价格以各网站列出的实时售价为准，我们提供的价格可能有数小时至数日的延迟。
    </div>
    <div class="evaluate">
      <div class="eva_title">
        网友评价
      </div>
      <div class="eva_content">
        <ul class="comItem" v-for="(item,index) in comments" :key="index">
          <li class="clearfix">
            <div class="comName f_left">{{item.comName}}</div>
            <div class="comTime f_right">{{item.comTime}}</div>
          </li>
          <li class="clearfix">
            <div class="comFrom f_right ">{{item.comFrom}}</div>
          </li>
          <li>
            <div class="comContent">{{item.comContent}}</div>
          </li>
          <li>
            <a href="javascript:;">回复</a>
          </li>
        </ul>
      </div>
      <div class="more">
        <button type="button" class="more">更多评价</button>
      </div>
    </div>
    <!-- 底部 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: 0,
      categoryid: 0,
      info: {},
      name: '',
      comments: []
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getNewsinfo();
    this.getComment();
  },
  methods: {
    cate(categoryid) {
      this.$http
        .get("http://mmb.ittun.com/api/getcategorybyid", {
          params: { categoryid: this.categoryid }
        })
        .then(response => {
          console.log(response);
          this.name = response.body.result[0].category;
        });
    },
    getNewsinfo() {
      this.$http
        .jsonp("http://mmb.ittun.com/api/getproduct?productid=" + this.id)
        .then(function(response) {
          console.log(response);
          if (response.status == 200) {
            this.info = response.body.result[0];
            this.info.name = response.body.result[0].productName.split(" ")[0];
            this.categoryid = response.body.result[0].categoryId;
            this.cate(this.categoryid);
          }
        });
    },
    getComment() {
      this.$http
        .get("http://mmb.ittun.com/api/getproductcom", {
          params: {
            productid: this.id
          }
        })
        .then(response => {
          this.comments = response.body.result;
          console.log(response);
        });
    },
    tabcactive(e) {
      $(e.target)
        .addClass("active")
        .siblings()
        .removeClass("active");
    }
  }
};
</script>
<style  scopped lang="less">
.filterBox {
  padding: 0 8/50rem;
  li {
    // width: 10%;
    font-size: 14/50rem;
    float: left;
    > a {
      text-align: center;
      line-height: 40/50rem;
      color: #5a5a5a;
      display: block;
      &.on {
        color: #ed0000;
      }
    }
    &.filter {
      float: right;
      margin-top: 10/50rem;
    }
  }
}

.productInfo {
  background-color: #fff;
  .title {
    font-size: 16/50rem;
    text-align: center;
    word-break: break-all;
    padding: 15/50rem 21/50rem;
  }
  .pic {
    text-align: center;
    position: relative;
    > img {
      width: 160/50rem;
      height: 160/50rem;
    }
    > a {
      position: absolute;
      top: -10/50rem;
      right: 40/50rem;
    }
  }
}

.footnav.mmw_footer {
  margin-top: 25/50rem;
  > .foot_top {
    border-top: 1/50rem solid #c14d00;
    border-bottom: 1/50rem solid #c14d00;
    height: 34/50rem;
    line-height: 34/50rem;
    > a {
      &.active {
        background: -webkit-gradient(
          linear,
          0 0,
          0 100%,
          from(#ffa632),
          to(#ff9000)
        );
      }
      box-sizing: border-box;
      background-color: #ffbb00;
      color: #5a5a5a;
      float: left;
      font-size: 14/50rem;
      text-align: center;
      width: 33.33%;
      border-right: 1/50rem solid #c14d00;
      &:last-of-type {
        width: 33.33%;
        border-right: 0;
      }
    }
  }
}

.compare {
  background-color: #fff;
  padding: 8/50rem 0;
  border-bottom: 1/50rem solid #ccc;
}

.note {
  background-color: #fff;
  font-size: 12/50rem;
  color: #888;
  padding: 8/50rem 10/50rem;
  line-height: 18/50rem;
}

.evaluate {
  border-top: 4/50rem solid #7a7a7a;
  margin-top: 5/50rem;
  .eva_title {
    height: 34/50rem;
    line-height: 34/50rem;
    text-align: center;
    overflow: hidden;
    background: #dbdbdb;
    font-size: 14/50rem;
    border-top: 1/50rem solid #fff;
  }
  .eva_content {
    > .comItem {
      padding: 10/50rem 8/50rem 0 8/50rem;
      background-color: #fff;
      border-bottom: 1/50rem solid #ccc;
      > li {
        font-size: 12/50rem;
        color: #666;
        line-height: 18/50rem;
        padding: 4/50rem 0;
        .comName {
          float: left;
        }
        .comTime,
        .comFrom {
          float: right;
        }
      }
    }
  }
  .more {
    margin-top: 16/50rem;
    padding: 0 10/50rem;
    > button {
      width: 100%;
      border-radius: 10/50rem;
      height: 34/50rem;
      line-height: 34/50rem;
      background: -webkit-gradient(
        linear,
        0 0,
        0 100%,
        from(#f1f1f1),
        to(#d4d4d4)
      );
      border: 1/50rem solid #bababa;
    }
  }
}
</style>
