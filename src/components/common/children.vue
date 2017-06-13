<template>
    <div>
        <h1>我是子组件children</h1>
        <div>接收到父页面的消息:{{parentMsg}}</div>
        <el-button type="primary" @click="clickChildren">点击把子组件值传父页面</el-button>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                childrenMsg: '我是children发来的',
                parentMsg: ''
            }
        },
        props: ['messageFromFather'],
        methods: {
            clickChildren(){
                this.parentMsg = this.messageFromFather
                this.$emit('child-tell-parent', this.childrenMsg)
            }
        },
        mounted: function () {



        }
    }
</script>
<style>
</style>