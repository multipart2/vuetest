<template>
    <div>

       <ul class="mui-table-view">
				<!-- <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<router-link :to="'/home/newsInfo'+item.id">//id是个表达式了，属性要用v-bind
						<img class="mui-media-object mui-pull-left" :src="item.url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
                        
							<p class='mui-ellipsis'>
                                <span>{{ item.add_time}}</span>
                                <span>{{item.time}}</span>
                            </p>
						</div>
					</router-link>
				</li> -->
				<li class="mui-table-view-cell mui-media">
					<router-link :to="'/home/newsInfo/'+'2'">
						<img class="mui-media-object mui-pull-left" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAB/0lEQVRoQ+2YzysEYRjHv2Nm7bKJJCUpuThQIjYRSg6sKCKJVlKr1lFJTqQcnFwcHCRCiexho40TLkh+HOQfUEr57WRmd7VbSLbtnZlm9M4+e36e93m/38/3mdpXqGzxRJBEP4EEW5w2EbY4YBBhImwxByjSFgP6Rw4RJsIWc4AibTGg9NGiSFOkEzhQX12OhuoKSKJoik9KKISD43McHl9onqcr0sP9nRjoboXNJmm+gJpGWVawvLmDhdVtNW2/anUJHuxpQ19HMyRJneCUFAEOeyoEQcCHLEOWQ0wCFEXBmj+IpY0AU328Il2CtU51N9ZgzDcAZ7oDp5fXGJmY1XqU6j4SrNoyDQ1EmCKtITaMLbTDjEbpKqMdph3WFaCEzbTDxnn7czLtMO2wcTmjHTbOW9ph+ntoRrpoh81w2dPlhrevA3Z7anK8eMyM+9BU54q9aVniiae2qgxDve0QIOD27h7hcPg7OPl5uSgtLoIoiohEIgjsH2F6btGMYMVmGLLDrvISTI16kZOdlVDIy9s7ZudXsHd4wrfg9DQHlucmUViQF1dIlOzj8ytWtnax7g+aJtYwwtGDo7HOzHDGFXP/8ISzqxtThX4NMyTS/6KEcSgJZjSK2zIizC06xosTYUajuC0jwtyiY7w4EWY0itsyIswtOsaLE2FGo7gt+wTuODJkdZqx3wAAAABJRU5ErkJggg==">
						<div class="mui-media-body">
                            <h1>木屋</h1>
							
							<p class='mui-ellipsis'>
                                <span>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖. 

                                </span>
                                
                                <span>点击了：9次</span>
                                
                                
                            </p>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAB/0lEQVRoQ+2YzysEYRjHv2Nm7bKJJCUpuThQIjYRSg6sKCKJVlKr1lFJTqQcnFwcHCRCiexho40TLkh+HOQfUEr57WRmd7VbSLbtnZlm9M4+e36e93m/38/3mdpXqGzxRJBEP4EEW5w2EbY4YBBhImwxByjSFgP6Rw4RJsIWc4AibTGg9NGiSFOkEzhQX12OhuoKSKJoik9KKISD43McHl9onqcr0sP9nRjoboXNJmm+gJpGWVawvLmDhdVtNW2/anUJHuxpQ19HMyRJneCUFAEOeyoEQcCHLEOWQ0wCFEXBmj+IpY0AU328Il2CtU51N9ZgzDcAZ7oDp5fXGJmY1XqU6j4SrNoyDQ1EmCKtITaMLbTDjEbpKqMdph3WFaCEzbTDxnn7czLtMO2wcTmjHTbOW9ph+ntoRrpoh81w2dPlhrevA3Z7anK8eMyM+9BU54q9aVniiae2qgxDve0QIOD27h7hcPg7OPl5uSgtLoIoiohEIgjsH2F6btGMYMVmGLLDrvISTI16kZOdlVDIy9s7ZudXsHd4wrfg9DQHlucmUViQF1dIlOzj8ytWtnax7g+aJtYwwtGDo7HOzHDGFXP/8ISzqxtThX4NMyTS/6KEcSgJZjSK2zIizC06xosTYUajuC0jwtyiY7w4EWY0itsyIswtOsaLE2FGo7gt+wTuODJkdZqx3wAAAABJRU5ErkJggg==">
						<div class="mui-media-body">
							  <h1>CBD</h1>
							<p class='mui-ellipsis'>
                               <span>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</span> 
                                <span>点击了：11次</span>
                                
                            </p>
						</div>
					</a>
				</li>

			</ul>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
    data(){
        return {
            newslist:[]
        }
    
    },
    methods:{
       // getNewList(){//配置了根路径，这里就不能带/app/getNewList
            // this.$http.get('app/getNewList').then(result =>{
            //     if(result.body.status==0){
            //         Toast("获取信息成功");
            //         //将信息存储到data上
            //         this.newslist=result.body.message;
            //     }else{
            //          Toast("获取信息失败！！");
            //     }
            // })
       // }
    }
}
</script>


<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{
            font-size: 14px;
        }
        .mui-ellipsis{
            font-size: 12px;
            color:#226aff;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>