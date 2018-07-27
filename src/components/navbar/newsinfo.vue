 <template>
    <div>
        <div class="productInfo">
        <div class="title">{{info.productName}}</div>
        <div class="pic">
            <img src="../../../static/images/1.png" width="170">
            <router-link to="/">
                <img src="../../../static/images/sc.jpg" width="39" height="39">
            </router-link>
        </div>    
</div>
    </div>
</template>
<script>
export default {
  data() {
    return {
        id:0,
      info:{}
    };
  },
  created() {
      this.id = this.$route.params.id;
    this.getNewsinfo();
  },
  methods: {
    getNewsinfo() {
      this.$http
        .jsonp("http://mmb.ittun.com/api/getproduct?productid="+this.id)
        .then(function(response) {
          console.log(response);
          if (response.status == 200) {
            this.info = response.body.result[0];
            console.log(this.info);
          }
        });
    }
  }
};
</script>
<style  scopped lang="less">
</style>
