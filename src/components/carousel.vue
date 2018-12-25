<template>
  <el-carousel indicator-position="none"  :interval="number" :height="carouselHeight" v-if="carouselIsShow">
    <el-carousel-item v-for="(item,index) in picList" :key="index">
      <img :src="item.img">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
    export default{
        props:["picList","carouselHeight","number"],
        computed:{
            carouselIsShow(){
                return this.$store.state.carouselIsShow;
            }
        }
    }
</script>
<style lang="less" scoped>
    img{
        width:100%;
        height:100%;
    }
</style>