<template>
    <div>
        <h1>首页</h1>
        <el-button type="primary" @click="goNavgation">主要按钮</el-button>
    </div>

</template>
<script>
    export default{
        data(){
            return{

            }
        },
        methods:{
            goNavgation(){
                this.$router.push('nav/slide1')
            }
        }
    }
</script>
<style>
</style>