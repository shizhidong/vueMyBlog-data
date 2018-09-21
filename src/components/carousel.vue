<template>
  <el-carousel indicator-position="none"  :interval="number" :height="carouselHeight">
    <el-carousel-item v-for="(item,index) in picList" :key="index">
      <img :src="item.img">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
    export default{
        props:["picList","carouselHeight","number"]
    }
</script>
<style lang="less" scoped>
    img{
        width:100%;
        height:100%;
    }
</style>