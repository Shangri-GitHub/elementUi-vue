<template>
    <div>
        <h1>slide1</h1>

        <el-button-group>
            <el-button v-for="(item, index) in items" :key="item.message" :class="{'el-button--primary':selected==index}" @click="clickBtn(index)">
                {{item.message}}
            </el-button>
        </el-button-group>

    </div>

</template>
<script>
    export default{
        data(){
            return {
                selected: '',
//                items: ['主要按钮', '文字按钮'],
                items: [
                    { message: '主要按钮' },
                    { message: '文字按钮' }
                ]
            }
        },
        methods: {
            clickBtn(index){
                this.selected = index
            }
        }
    }
</script>
<style>

</style>