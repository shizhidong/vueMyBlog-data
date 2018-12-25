<template>
     <div>
        <div class="bk-about">
            <h5>友情链接</h5>
            <div class="abBg">
                <p v-for="(item,index) in friendshipLink" :key="index"><a :href="item.href" target="_blank">{{item.linkName}}</a></p>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:["friendshipLink"]
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
            text-align: center;
            p{
                color:#555;
                font-size: 0.14rem;
                padding: 5px 0px;
            }
            a{
                color:#555;
                font-size: 0.14rem;
                text-decoration: none;
                &:hover{
                    color:#11a0f2;
                }
            }
            
        }
        
    }
</style>
