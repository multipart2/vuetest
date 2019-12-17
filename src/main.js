import Vue from 'vue'
import app from './App.vue'
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'
//头部区域
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
//底部区域
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
//轮播图
// import { Swipe, SwipeItem,Button,Lazyload } from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);
//加载轮播图数据
//2.1导入vue-resource 
import VueResource from 'vue-resource'
//2.2安装vue-resource
Vue.use(VueResource)

//配置访问的根路径，注意要在vue-resource 之后
Vue.http.options.root = "http://192.168.112.135:8080/root"
//全局设置post表单数据的组织形式 application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true

//1.1导入路由包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)
//1.3导入自己的路由模块
import router from './router.js'

//导入时间格式化的插件
import moment from 'moment'
//定义全局的时间过滤器
Vue.filter('dateFormat',function(dataStr,pattern='yyyy-MM-DD hh:mm:ss'){
   return moment(dataStr).format(pattern)
})
var vm = new Vue({
   el:'#app',
   data:{
     msg:'123'
   },
   render:c => c(app),
   router//1.4挂载路由到vm实例上
})
