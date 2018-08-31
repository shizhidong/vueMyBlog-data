<template>
    <div class="index">
        <Header></Header>
        <Carousel></Carousel>
        <router-view></router-view>
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
    
</style>
