<template>
    <div class="container">
        <Header></Header>
        <div class="bk-content">
            <div class="bk-contentLeft">
                <my-carouse
                :picList=picList
                :carouselHeight=height
                :number=number
                />
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
import Tabs from '../components/tabs'
    export default{
        name:"index",
        data(){
            return{
                height:"300px",//banner高度
                number:5000,//滚动时间
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
        components:{
           Header,
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
