<template>
    <div class="app-container">

   
               <!--  <mt-button type="default">default</mt-button>
            <mt-button type="primary" icon="more" @click="show">primary</mt-button>
            <mt-button type="danger" icon="back">danger</mt-button>
        <hr>
            <mt-button type="default" size="small">default</mt-button>
            <mt-button type="primary" size="large" plain>primary</mt-button>
            <mt-button type="danger" size="normal" disabled >danger</mt-button> -->
            <!--页面header区 开始-->
<mt-header fixed title="固定在顶部"></mt-header>
            <!--页面header区 结束-->


            <!--页面主题区 开始 路由router-view 区域-->
            <router-view></router-view>
            <!--页面主题区 结束-->


            <!--页面Tabbar区 开始   mui-active  这是mui的高亮显示-->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"> <span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
            <!--页面Tabbar区 结束-->
              
    </div>
</template>

<script>
import {Toast} from 'mint-ui'

export default {
    data(){
        return {}
    },
    methods:{
        show(){
            //Toast('提示信息')
            Toast({
                message:"这是底部消息，哈哈",
                duration:1000,
                position:"bottom",
                iconClass:"glyphicon glyphicon-heart"
            })
        }
    }
    
}
</script>

<style scoped>
.app-container{
    padding-top: 40px;
}
</style>