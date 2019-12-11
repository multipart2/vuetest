import Vue from 'vue'
import app from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'bootstrap/dist/css/bootstrap.css'



Vue.use(MintUI)
var vm = new Vue({
   el:'#app',
   data:{
     msg:'123'
   },
   render:c => c(app)

})