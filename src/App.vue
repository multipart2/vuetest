<template>
    <div>

        <h1>这是App组件</h1>
            <mt-button type="default">default</mt-button>
            <mt-button type="primary" icon="more" @click="show">primary</mt-button>
            <mt-button type="danger" icon="back">danger</mt-button>
<hr>
            <mt-button type="default" size="small">default</mt-button>
            <mt-button type="primary" size="large" plain>primary</mt-button>
            <mt-button type="danger" size="normal" disabled >danger</mt-button>
              
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

</style>