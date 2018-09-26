<template>
     <div>
        <div class="bk-about">
            <h5>天气情况</h5>
            <div class="abBg">
                <div>
                    <p><span class="w-title">地区：</span><span class="weath">{{city}}&nbsp;&nbsp;{{type}}</span></p>
                    <p><span class="w-title">日期：</span><span class="weath">{{data}}</span></p>
                    <p><span class="w-title">高温：</span><span class="weath">{{high}}</span></p>
                    <p><span class="w-title">低温：</span><span class="weath">{{low}}</span></p>
                    <p><span class="w-title">风向：</span><span class="weath">{{fx}}</span></p>
                    <p><span class="w-title">日出：</span><span class="weath">{{sunrise}}</span></p>
                    <p><span class="w-title">日落：</span><span class="weath">{{sunset}}</span></p>
                    <p><span class="w-title">知会：</span><span class="weath">{{notice}}</span></p>
                    <p><span class="w-title">感冒指数：</span><span class="weath">{{ganmao}}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:["data","city","high","low","fx","sunrise","sunset","notice","ganmao","type"]
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

            p{
                color:#555;
                font-size: 0.14rem;
                padding: 5px 0px;
                .weath{
                    color:#11a0f2;
                }
            }
           .w-title{
               width:100px;
               display: inline-block;
               text-align: right
           }
            
        }
        
    }
</style>