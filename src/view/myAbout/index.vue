<template>
    <div class="aboutMy">
        <div class="news_infos">
            <p>
               {{content}}
            </p>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                content:""
            }
        },
        mounted(){
            this.init();
        },
        methods:{
            init(){
                this.content = fakedata.aboutMy[0].content;
            }
        }
    }
</script>
<style scoped lang="less">
        .aboutMy{
            width:100%;
            background-color: #fff;
            height: 100%;
            margin-top:0.2rem;
            border:1px solid #ddd;
            .news_infos{
                padding: 10px 20px;
                p{
                    text-indent: 0.32rem;
                    font-size: 0.14rem;
                    color:#555;
                    text-align: justify;
                    line-height: 25px;
                }
            }
        }
</style>
