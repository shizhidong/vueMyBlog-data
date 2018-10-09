<template>
    <div class="index">
        <div class="recommend">
            <p><span class="recommendTitle">【今日推荐】</span>{{recommendsTitle}}</p>
            <p class="recommendContent">{{recommendsContent}}</p>
        </div>
        <div class="news-content">
            <p class="bk-label">最新发布</p>
            <my-newsList
            :newsList=newsList
            @my-Click=myClick
            />
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                newsList:[],
                recommendsTitle:"",
                recommendsContent:""
            }
        },
        mounted(){
            this.initData();
        },
        
        methods:{
            initData(){
                this.newsList=fakedata.newsList;
                this.recommendsTitle=fakedata.todayRecommends[0].title;
                this.recommendsContent=fakedata.todayRecommends[0].content;
            },
            myClick(id){
                this.$router.push({
                    path:"/Detail",
                    query:{//通过query 传递参数
                        goodsDetail:id,
                    }
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    .recommend{
        border:1px solid #ddd;
        background-color: #fff;
        padding:0.15rem;
        margin-top:0.2rem;
        p{
            color:#555;
            font-size: 0.14rem;
            font-weight: bold;
           .recommendTitle{
                color:#11a0f2;
                font-size: 0.16rem; 
            }
        }
        .recommendContent{
            color:#555;
            font-size: 0.14rem;
            line-height: 0.22rem;
            text-indent: 0.3rem;
            font-weight: 500;
            margin-top:0.2rem;
        }
        
    }
    .news-content{
         .bk-label{
            font-size: 0.16rem;
            color:#333;
            margin-top:0.2rem;
            margin-bottom: 0.2rem;
            }
        
        
    }
</style>

