<template>
    <div class="photoList">
        <div>
            <h2 class="photoData">2018-09-20</h2>
            <div class="style4">
                <ul>
                    <li><img src="../../../static/images/1.jpg"><span>鼠标悬停整体旋转放大</span></li>
                    <li><img src="../../../static/images/2.jpg"><span>鼠标悬停整体旋转放大</span></li>
                    <li><img src="../../../static/images/3.jpg"><span>鼠标悬停整体旋转放大</span></li>
                    <li><img src="../../../static/images/4.jpg"><span>鼠标悬停整体旋转放大</span></li>
                    <li><img src="../../../static/images/1.jpg"><span>鼠标悬停整体旋转放大</span></li>
                    <li><img src="../../../static/images/2.jpg"><span>鼠标悬停整体旋转放大</span></li>
                    <li><img src="../../../static/images/3.jpg"><span>鼠标悬停整体旋转放大</span></li>
                    <li><img src="../../../static/images/4.jpg"><span>鼠标悬停整体旋转放大</span></li>
                </ul>
            </div>
        </div>
        <div>
            <h2 class="photoData">2018-09-22</h2>
            <div class="style4">
                <ul>
                    <li><img src="../../../static/images/1.jpg"><span>鼠标悬停整体旋转放大</span></li>
                    <li><img src="../../../static/images/2.jpg"><span>鼠标悬停整体旋转放大</span></li>
                    <li><img src="../../../static/images/3.jpg"><span>鼠标悬停整体旋转放大</span></li>
                    <li><img src="../../../static/images/4.jpg"><span>鼠标悬停整体旋转放大</span></li>
                    <li><img src="../../../static/images/1.jpg"><span>鼠标悬停整体旋转放大</span></li>
                    <li><img src="../../../static/images/2.jpg"><span>鼠标悬停整体旋转放大</span></li>
                    <li><img src="../../../static/images/3.jpg"><span>鼠标悬停整体旋转放大</span></li>
                    <li><img src="../../../static/images/4.jpg"><span>鼠标悬停整体旋转放大</span></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        mounted(){
            this.initCookie();
        },
        methods:{
            initCookie(){//判断是否有cookie
                let cookieBac = this.$getCookie("abc");
                if(cookieBac!="shizhidong221700"){
                    this.$router.push({
                        path:"/Login"
                })
                }
            }
        }
    }

</script>
<style scoped lang="less">
    .photoList{
        background-color: #fff;
        height: 100%;
        border:1px solid #ddd;
        margin-top: 20px;
        .photoData{
            font-size: 0.14rem;
            color:#555;
            margin: 20px 20px;
        }
    }
    .style4{
        width:730px;
        margin: -20px auto auto auto;
        overflow: hidden;
    }
    .style4 ul li{
        float:left;
        position:relative;
        list-style:none;
        margin-right: 10px;
        margin-top: 20px;
        border:1px solid #ddd;
        transition:All 0.4s ease-in-out;   
        -webkit-transition:All 0.4s ease-in-out;    
        -moz-transition:All 0.4s ease-in-out;    
        -o-transition:All 0.4s ease-in-out;
    }
    .style4 ul li img{
        width: 170px!important;
        height: 120px!important;
        border-radius: 2px;
    }
    .style4 ul li span{
        background:rgba(0, 0, 0, 0.5);
        color:#fff;
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
        line-height: 23px;
        position:absolute;
        bottom: 3px;
        width: 170px;
        left:0;
        font-size:12px;
        transition:All 0.4s ease-in-out;
        -webkit-transition:All 0.4s ease-in-out;
        -moz-transition:All 0.4s ease-in-out;
        -o-transition:All 0.4s ease-in-out;
    }
    .style4 ul li:hover {
        transform:rotate(360deg) scale(1.2);    
        -webkit-transform:rotate(360deg) scale(1.2);    
        -moz-transform:rotate(360deg) scale(1.2);    
        -o-transform:rotate(360deg) scale(1.2);    
        -ms-transform:rotate(360deg) scale(1.2);
    }

</style>
