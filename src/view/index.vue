<template>
    <div class="container">
        <Header></Header>
        <div class="bk-content">
            <div class="bk-contentLeft">
                <!--跑马灯-->
                <my-carouse
                :picList=picList
                :carouselHeight=height
                :number=number
                />
                <router-view></router-view>
            </div>
            <div class="bk-contentRight">
               <my-weatherForecast/>
                <Tabs></Tabs>
                <div class="aaa">
                    <!--关于我-->
                    <my-aboutAssembly
                    :srcImg=srcImg
                    :BloggerName=BloggerName
                    :BloggerTexy=BloggerTexy
                    />
                    <!--友情链接-->
                    <my-friendshipLink
                    :friendshipLink=friendshipLink
                    />
                </div>
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
                srcImg:"",
                BloggerName:"",
                BloggerTexy:"",
                friendshipLink:[],
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
        },
        mounted(){
            this.initData();
        },
        methods:{
            initData(){
               this.srcImg=fakedata.BloggerList[0].srcImg;
               this.BloggerName=fakedata.BloggerList[0].BloggerName;
               this.BloggerTexy=fakedata.BloggerList[0].BloggerTexy;
               //友情链接
              this.friendshipLink = fakedata.friendshipLink;
            }
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
