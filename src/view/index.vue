<template>
    <div class="container">
        <Header></Header>
        <div class="bk-content">
            <div class="bk-contentLeft">
                <Carousel></Carousel>
                <router-view></router-view>
            </div>
            <div class="bk-contentRight">
                <Tabs></Tabs>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '../components/header'
import Carousel from '../components/carousel'
import Tabs from '../components/tabs'
    export default{
        name:"index",
        data(){
            return{

            }
        },
        components:{
           Header,
           Carousel,
           Tabs
        }
    }
</script>
<style lang="less" scoped>
    .container{
         .bk-content{
            max-width: 1280px;
            margin:0.2rem auto;
            display: flex;
            overflow: hidden;
           .bk-contentLeft{
               width:68%;
               margin-right: 0.15rem;
           }
           .bk-contentRight{
               width:32%;
           }
        }
    }
</style>
