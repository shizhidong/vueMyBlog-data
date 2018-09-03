<template>
  <el-carousel indicator-position="none"  :interval="number" height="300px">
    <el-carousel-item v-for="(item,index) in picList" :key="index">
      <img :src="item.img">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
    export default{
        data(){
            return{
                number:3000,
                picList: [{
                        "id":"1",
                        "img":"../../static/images/timg.jpg"
                        },
                        {
                        "id":"2",
                        "img":"../../static/images/timg.jpg"
                        }]
            }
        },
    }
</script>
<style lang="less" scoped>
    img{
        width:100%;
        height:100%;
    }
</style>