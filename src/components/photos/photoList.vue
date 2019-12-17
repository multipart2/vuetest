<template>
<div>
        <h3>图片列表</h3>
        <!--顶部区域-->
        <div id="slider" class="mui-slider "><!-- mui-fullscreen这个是全屏的-->
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<!-- <a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in cates" :key="item.id" @click="getPhotoListByCateId(item.id)">
						    vue中的写法，class前面有冒号，还有这个mui-active 高亮，选用三目挺好的
						</a> -->
                         <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>

                       
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
                        <a class="mui-control-item " href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
                        <a class="mui-control-item " href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
					</div>
				</div>

		</div>

        <!--图片区域-->
        <!-- <ul class="photo-list">
            <li v-for="item in list" :key="item.id">
            <img v-lazy="item">
            </li>
        </ul> -->
</div>
   
</template>

<script>
//1.导入mui js
import mui from '../../lib/mui/js/mui.min.js'

export default {
    data(){
        return {
            cates:[],//所有分类的列表数组
            list:[]//所有图片列表的数组
        }
    },
    methods:{
        // getAllCategory(){
        //     this.$http.get("..../").then(result => {
        //         if(result.body.status==0){
        //             result.body.message.unshift({title:"全部", id:0 })
        //             this.cates= result.body.message
        //         }
        //     })
        // },
        // getPhotoListByCateId(cateid){
        //     this.$http.get("....../"+cateid).then(result=>{
        //         if(result.body.status===0){
        //             this.list=result.body.message;
        //         }
        //     })
        // }
    },
    created(){
        //this. getAllCategory();
        //默认进入页面就主动请求图片列表数据
        //getPhotoListByCateId(0)
    },
    mounted(){//当组件中的dom结构被渲染好并放到页面中后，会执行这个钩子函数。如果要操作元素了，最好在mounted,这里是最新的
    //2.初始化滑动控件,注意这个初始化的时候是不是要在页面元素都加载好了，什么时候最好呢，就是mounted
        mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    }
}
</script>

<style lang="scss" scoped>
*{
    touch-action: pan-y;
 }
.photo-list{
    list-style: none;
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
    li{
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;
        box-shadow: 0 0 9px #999;
            width: 100%;
            vertical-align: middle;
        }
        img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
        }
    }


</style>