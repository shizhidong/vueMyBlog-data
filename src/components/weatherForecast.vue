<template>
     <div>
        <div class="bk-about">
            <h5>天气情况</h5>
            <div class="abBg">
                sdasdas
                <!-- <div>
                    <p>日期：<span class="weath">{{data}}</span></p>
                    <p>上海：<span class="weath">{{type}}</span></p>
                    <p>高温：<span class="weath">{{high}}</span></p>
                    <p>低温：<span class="weath">{{low}}</span></p>
                    <p>风向：<span class="weath">{{fx}}</span></p>
                    <p>日出：<span class="weath">{{sunrise}}</span></p>
                    <p>日落：<span class="weath">{{sunset}}</span></p>
                    <p>知会：<span class="weath">{{notice}}</span></p>
                </div> -->
            </div>
        </div>
    </div>
</template>
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
                .weath{
                    color:#11a0f2;
                    font-weight: bold;
                }
            }
           
            
        }
        
    }
</style>