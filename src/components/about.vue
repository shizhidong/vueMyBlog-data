<template>
    <div>
        <div class="bk-about">
            <h5>关于我</h5>
            <div class="abBg">
                <div class="avatar"> <img :src="srcImg" alt=""> </div>
                <p class="abname"><router-link :to="{name:'MyAbout'}">{{BloggerName}}</router-link></p>
                <p class="abtext">{{BloggerTexy}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
    props:["srcImg","BloggerName","BloggerTexy"]
    }
</script>
<style scoped lang="less">
    .bk-about{
        background-color: #fff;
        margin-top: 0.2rem;
        border:1px solid #ddd;
        h5{
            font-size: 0.15rem;
            color:#555;
            padding:10px;
            display: block;
            background-color: #f8f8f8;
        }
        .abBg{
            background-color: #fff;
            overflow: hidden;
            padding: 10px;
            .avatar {
                width: 100px;
                height: 100px;
                border:1px solid #ddd;
                float: left;
                margin-right: 15px;
               font-size: 0.2rem;
            }
            .abname {
                
                font-weight: bold;
                font-size: 0.15rem;
                margin-bottom: 5px;
                a{
                   color: #3f3f3f;
                   &:hover{
                       color:#11a0f2
                   }
                }
            }
            .abtext {
                color: #9a9a9a;
                line-height: 0.20rem;
                padding-bottom: 20px;
                font-size: 0.14rem;
            }
        }
        
    }
</style>

