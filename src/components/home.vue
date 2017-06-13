<template>
    <div id="home">
        <h1>首页</h1>
        <el-button type="primary" @click="goNavgation">主要按钮</el-button>
        <el-button type="primary" @click="pushToChild">向子页面传值</el-button>
        <p>子组件的信息：{{childmsg}}</p>
        <!--向子传值-->
        <children :messageFromFather="fateherMsg" v-on:child-tell-parent="listenchildSomething"></children>

    </div>

</template>
<script>
    import Children from './common/children.vue'
    export default{
        data(){
            return {
                fateherMsg: '',
                childmsg: ''
            }
        },
        components: {Children},

        methods: {
            goNavgation(){
                this.$router.push('nav/slide1')
            },
            // 向子类传值
            pushToChild(){
                this.fateherMsg = '我的父页面的值'
            },
            // 子类的传过来的值
            listenchildSomething(msg){
                this.childmsg = msg
            }
        },
        mounted: function () {
            console.log($('#home').width());
        }
    }
</script>
<style>
</style>