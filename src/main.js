import Vue from 'vue'
import app from './App.vue'
//import MintUI from 'mint-ui'
//Vue.use(MintUI)
import 'mint-ui/lib/style.css'
//头部区域
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
//底部区域
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
//轮播图
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//加载轮播图数据
//2.1导入vue-resource 
import VueResource from 'vue-resource'
//2.2安装vue-resource
Vue.use(VueResource)
//1.1导入路由包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)
//1.3导入自己的路由模块
import router from './router.js'
var vm = new Vue({
   el:'#app',
   data:{
     msg:'123'
   },
   render:c => c(app),
   router//1.4挂载路由到vm实例上
})
