<template>
    <div class="header">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1"><router-link :to="{name:'MyIndex'}">首页</router-link></el-menu-item>
            <el-menu-item index="2"><router-link :to="{name:'ResumeCenter'}">简历中心</router-link></el-menu-item>
            <el-menu-item index="3"><router-link :to="{name:'MyPhoto'}">相册</router-link></el-menu-item>
            <el-menu-item index="4"><router-link :to="{name:'MyWorkFragment'}">工作片段</router-link></el-menu-item>
             <el-menu-item index="5"><router-link :to="{name:'MyAbout'}">关于我</router-link></el-menu-item>
        </el-menu>
    </div>
    
</template>
<script>
    export default{
        data(){
            return{
                activeIndex: '1'
            }
        },
        methods: {
           
        }
    }
</script>
<style lang="less" scoped>
    .el-menu-item{
        height:45px;
        line-height: 45px;
    }   
</style>
