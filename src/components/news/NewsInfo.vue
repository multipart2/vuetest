<template>
    <div>
        <h1>
            新闻详情页---{{id}}

        </h1>
        <!--大标题 -->
        <!--子标题 -->
        <!--内容区域 -->
        <!--评论区域 -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>
<script>
//导入评论子组件
import comment from '../subcomponents/comment.vue'
export default {
    data(){
        return {
            id:this.$route.params.id
        }
    },
    components:{//用来注册子组件的节点
        "comment-box":comment
    }
    
}
</script>

<style lang="scss" scoped>

</style>