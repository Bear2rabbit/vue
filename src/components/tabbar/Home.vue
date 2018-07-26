<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in src" :key="index">1</mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
import Vue from 'vue'
// 轮播图导入
import { Swipe, SwipeItem } from "mint-ui";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default{
    data(){
        return{
          
        }
    },
    created(){
         this.getSwipeData()
    },
    methods:{
        getSwipeData(){
            this.$http.get('')
			 .then(function(response){
			 	console.log(response.body);
			 });
        }
    }

}
</script>
<style scopped lang="less">
.mint-swipe{
    height: 100px;
    background-color: orange;
    
}
</style>



