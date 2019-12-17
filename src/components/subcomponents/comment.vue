<template>
    <div class="cmt-container">
        <h1>
            发表评论组件

        </h1>
        <hr>
        <textarea name="commentcontainer" id="" cols="30" rows="10" placeholder="请输入要发表的内容（最多吐槽120字）" maxlength="
        120" v-model="msg">
        </textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <!-- <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}&nbsp;&nbsp;
                </div>
                <div class="cmt-body">
                    {{item.content==='undefined'?'此用户很懒，什么也没有留下':item.content}}
                </div>
            </div>
        </div> -->

        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2019-12-16 10:50:49&nbsp;&nbsp;
                </div>
                <div class="cmt-body">
                    锄禾日当午，汗滴禾下土，谁知盘中餐，粒粒皆辛苦。
                </div>
            </div>
             <div class="cmt-item">
                <div class="cmt-title">
                    第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2019-12-16 10:50:49&nbsp;&nbsp;
                </div>
                <div class="cmt-body">
                    锄禾日当午，汗滴禾下土，谁知盘中餐，粒粒皆辛苦。
                </div>
            </div>
             <div class="cmt-item">
                <div class="cmt-title">
                    第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2019-12-16 10:50:49&nbsp;&nbsp;
                </div>
                <div class="cmt-body">
                    锄禾日当午，汗滴禾下土，谁知盘中餐，粒粒皆辛苦。
                </div>
            </div>
        </div>
        
       
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>


<script>
import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            pageIndex:1,
            comments:[],//所有的评论数据
            msg:''
        }
    },
    created(){
      this.getComments();  
      Toast("加载后台评论数据成功！！！！")
    },
    methods:{
        getComments(){
            this.$http.get("......./"+this.id+"?pageIndex="+this.pageIndex).then(result =>{
                if(result.body.status===0){
                    //this.comments=result.body.message;这样会把第一页的数据清空
                    this.comments=this.comments.concat(result.body.message)
                }else{
                    Toast("失败")
                }
            })
        },
        getMore(){
            this.pageIndex++;
            this.getComments();
        },
        postComment(){
            if(this.msg.trim().length===0){
               return   Toast("输入的内容不能为空!")
            }
            this.$http.post("..../"+this.$route.params.id,{content:this.msg.trim()})
            .then(result => {
                //成功之后将数据手动加入到数组中，避免数据丢失
                if(result.body.status===0){
                    var cmt = {
                        username:'匿名用户',
                        add_time:Date.now(),
                        comment:this.msg.trim()
                    }
                this.comments.unshift(cmt);
                this.msg="";
                }
            })
        }
    },
    
    props:['id']
}
</script>


<style lang="scss" scoped>
.cmt-container{
    h1{
      font-size: 18px;  
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }

    .cmt-list{
        margin: 10px,0;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                line-height: 30px;
                background-color: #ccc;
            }
            .cmt-body{
                line-height: 30px;
                text-indent: 2em;
            }
        }
    }
}
</style>