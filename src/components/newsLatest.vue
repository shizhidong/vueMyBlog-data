<template>
    <div>
        <div class="index_arc_item" v-for="(item,index) in newsList" :key="index">
            <el-row :gutter="5">
                <el-col :span="6">
                    <div class="bk-pic"><img :src="item.srcImg" class="imgCss"/></div>
                </el-col>
                <el-col :span="18">
                    <div class="bk-desc">
                        <h5  @click="newsClick(item.id)"><a href="javascript:;">{{item.newsTitle}}</a></h5>
                        <p>{{item.newsContent}}</p>
                    </div>
                    <p class="bk-time"><span>发布时间：</span>{{item.time}}</p>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    export default{
        props:["newsList"],
        methods:{
            newsClick(id){
                this.$emit("my-Click",id)
            }
        }
    }
</script>
<style scoped lang="less">
    .index_arc_item{
            background-color: #fff;
            padding:0.15rem;
            margin:0.2rem 0rem;
            border:1px solid #ddd;
            .bk-pic{
                width:90%;
                height:1.1rem;
                border:1px solid #000;
            }
            .bk-desc{
              
                h5{
                    font-size: 0.14rem;
                    a{
                        font-size: 0.14rem;
                         color: #555;
                        &:hover{
                            color:#11a0f2
                        }
                    }
                }
                p{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient:vertical;
                    color:#555;
                    font-size: 0.14rem;
                    line-height: 0.22rem;
                    font-weight: 500;
                    margin-top:0.1rem;
                }
            }
            .bk-time{
                color:#a3a1a1;
                font-size: 0.12rem;
                float:right;
                margin-top: 20px;
            }
            .imgCss{
                width:100%;
                height: 100%;
                margin-top:0px;
                display: block;
            }
        }
</style>
