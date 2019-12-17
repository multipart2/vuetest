import VueRouter from 'vue-router'
//2.导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/photoList.vue'
//3.创建路由对象
var router = new VueRouter({
    routes:[//配置路由规则
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/search',component:SearchContainer},
        {path:'/home/newsList',component:NewsList},
        {path:'/home/newsInfo/:id',component:NewsInfo},//注意这个ID的匹配
        {path:'/home/photoList',component:PhotoList}
    ],
    linkActiveClass:'mui-active'//覆盖路由默认的高亮的类router-link-active
})
//把路由对象暴露出去
export default router