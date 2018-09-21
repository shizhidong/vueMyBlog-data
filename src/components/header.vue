<template>
    <div class="header">
        <div class="bk-header">
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="grid-content">
                        <span>欢迎进入</span>
                    </div>
                </el-col>
                <el-col :span="16">
                    <div class="grid-content right">
                        <span><a href="javascript:;">标签云</a></span>
                        <span><a href="javascript:;">读者墙</a></span>
                        <span><a href="javascript:;">友情链接</a></span>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="grid-content">
                        <div class="logo">坏小子的微博</div>
                    </div>
                </el-col>
                <el-col :span="16">
                    <div class="grid-content right">
                        <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal">
                            <el-menu-item index="1"><router-link :to="{name:'MyIndex'}">首页</router-link></el-menu-item>
                            <el-menu-item index="2"><router-link :to="{name:'ResumeCenter'}">简历中心</router-link></el-menu-item>
                            <el-menu-item index="3"><router-link :to="{name:'MyPhoto'}">相册</router-link></el-menu-item>
                            <el-menu-item index="4"><router-link :to="{name:'MyWorkFragment'}">工作片段</router-link></el-menu-item>
                            <el-menu-item index="5"><router-link :to="{name:'MyAbout'}">关于我</router-link></el-menu-item>
                        </el-menu>
                    </div>
                </el-col>
            </el-row>
        </div>
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
    @font-face {
        font-family: 'jingdianqujianti';
        src: url('../../static/font/jingdianqujianti.ttf');
    }
    .header{
        background-color: #fff;
        margin-top: -85px;
        .bk-header{
            height: auto;
            padding-bottom: 0.2rem;
            max-width: 1280px;
            margin:0 auto;
        }
    }
   
    .el-menu--horizontal{
        border-width: 0px
    }
    .el-menu-item{
        height:0.4rem;
        line-height: 0.4rem;
        &:last-child{
            padding:0px
        }
    }   
    .el-row {
    margin-bottom: 0px;
    margin-top:0.05rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 0.04rem;
  }
    .right{
        text-align: right;
    }
  .grid-content {
    border-radius: 0.04rem;
    min-height: 0.36rem;   
    span{
        display: inline;
        margin-right: 0.2rem;
        color:#999999;
        font-size: 0.14rem;
        &:last-child{
            margin-right: 0px;
        }
        a{  
            font-size: 0.14rem;
            color:#999999;
            &:hover{
                color:#11a0f2
            }
        }
    }
    .logo{
        font-family:jingdianqujianti;
        color:#11a0f2;
        font-size: 0.3rem;
    }
    .el-menu{
        float:right
    }
  }

</style>
