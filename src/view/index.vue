<template>
    <div class="container">
       <!-- <div style="font-size:0.12rem"> {{weatherList}}</div> -->
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
               <my-weatherForecast
                :city=city
                :data=data
                :high=high
                :low=low
                :fx=fx
                :sunrise=sunrise
                :sunset=sunset
                :notice=notice
                :ganmao=ganmao
                :type=type
               />
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
                weatherList:[],
                city:"",//天气城市
                data:"",//天气日期
                high:"",//天气高温
                low:"",//天气低温
                fx:"",//天气风向
                sunrise:"",//天气日出
                sunset:"",//天气日落
                notice:"",//天气说明
                ganmao:"",//感冒指数
                type:"",//天气
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
            this.fetchData();
        },
        methods:{
            initData(){
               this.srcImg=fakedata.BloggerList[0].srcImg;
               this.BloggerName=fakedata.BloggerList[0].BloggerName;
               this.BloggerTexy=fakedata.BloggerList[0].BloggerTexy;
               //友情链接
              this.friendshipLink = fakedata.friendshipLink;
            },
            fetchData: async function () {
            let params = {
                
            }
            this.$http.get(this.$api.url, params)
                .then((res)=>{
                    this.city = res.data.cityInfo.city
                    this.ganmao = res.data.data.ganmao
                    this.data = res.data.data.forecast[0].date
                    this.high = res.data.data.forecast[0].high
                    this.low = res.data.data.forecast[0].low
                    this.fx = res.data.data.forecast[0].fx
                    this.sunrise = res.data.data.forecast[0].sunrise
                    this.sunset = res.data.data.forecast[0].sunset
                    this.notice = res.data.data.forecast[0].notice
                    this.type = res.data.data.forecast[0].type
                    
                })
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
