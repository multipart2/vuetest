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
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
		                    <span class="mui-icon mui-icon-home"></span>
                            <!-- <img src="../../images/menu1.png"> -->
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photoList">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                            
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                       
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                            
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                          
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                           
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
		           
		        </ul> 
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
         img{
            width:100%;
             height:100%;
         }
    }
   
}
.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border: 0;
    img{
        width: 37px;
        height: 37px;
    }
    .mui-media-body{
        font-size: 13px;
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0;
}
</style>