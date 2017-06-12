<template>
    <div>
        <el-row>
            <el-col :span="6">
                <div class="grid-content bg-purple-dark">
                    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
                        <el-submenu index="1">
                            <template slot="title">导航一</template>
                            <el-menu-item-group title="分组一">
                                <el-menu-item index="1-1"> <router-link to="/nav/slide1">slide1</router-link></el-menu-item>
                                <el-menu-item index="1-2"><router-link to="/nav/slide2">slide2</router-link></el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2">导航二</el-menu-item>
                        <el-menu-item index="3">导航三</el-menu-item>
                    </el-menu>
                </div>
            </el-col>
            <el-col :span="18">
                <div class="grid-content bg-purple-dark">
                    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                             @select="handleSelect">
                        <el-menu-item index="1">处理中心</el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">我的工作台</template>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-3">选项3</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="3">订单管理</el-menu-item>
                        <el-menu-item index="4">
                            <el-button type="primary" @click="quit">退出</el-button>
                        </el-menu-item>
                    </el-menu>
                    <div id="content-box">
                        <router-view></router-view>
                    </div>

                </div>
            </el-col>
        </el-row>







    </div>
</template>
<script>
    export default{
        data() {
            return {
                activeIndex: '1',
            };
        },
        methods: {
            quit(){
                this.$router.push('/')
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }

    }
</script>
<style>
</style>