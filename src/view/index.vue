<template>
    <div class="container">
        <Header></Header>
        <div class="bk-content">
            <div class="bk-contentLeft">
                <Carousel></Carousel>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '../components/header'
import Carousel from '../components/carousel'
    export default{
        name:"index",
        data(){
            return{

            }
        },
        components:{
           Header,
           Carousel
        }
    }
</script>
<style lang="less" scoped>
    .container{
         .bk-content{
           max-width: 1280px;
           margin:0 auto;
           .bk-contentLeft{
               width:75%;
               margin-top:20px;
           }
        }
    }
</style>
