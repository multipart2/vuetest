<template>
   <div>

       <h3>HomeContainer</h3>
       <!--轮播图 -->
       <mt-swipe :auto="4000">
            <!-- <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <img :src="item.img" alt="#">
            </mt-swipe-item> -->
             <mt-swipe-item>1</mt-swipe-item>
             <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
       </mt-swipe>
        <!--九宫格 -->
        
   </div>
    
    
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            lunbotuList:[]//保存轮播图数组
        }
    },
    created(){
         Toast("加载轮播图成功");
       // this.getLunbotu();
    },
    methods:{
        // getLunbotu(){
        //     this.$http.get("http://vue.studyit.io/api/getLunbo").then(result =>{
        //         if(result.body.status == 0){
        //             this.lunbotuList = result.body.message;
        //             Toast("加载轮播图成功");
        //         }else{
        //             Toast("加载轮播图失败！！！！");
        //         }
        //     })
        // }
    }
    
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    .mint-swipe-item{
        &:nth-child(1){
            background-color: red;
        }
         &:nth-child(2){
            background-color: rgb(0, 255, 115);
        }
         &:nth-child(3){
            background-color: rgb(47, 0, 255);
        }
        // img{
        //     width:100%;
        //     height:100%;
        // }
    }
   
}
</style>