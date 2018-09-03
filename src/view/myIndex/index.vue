<template>
    <div class="index">
        <div class="recommend">
            <p><span class="recommendTitle">【今日推荐】</span>个人博客应该选择什么样的域名和域名后缀</p>
            <p class="recommendContent">不论搭建什么样的网站，选择一个好的域名都是很有必要的，选择一个好的域名对网站的意义也是不言而喻的。每一个网站都有之对应的域名，就像人的名字一样。每个人都想自己有个好听的名字，网站也是一样。一个网站可以有多个域名，但是一个域名只能对应</p>
        </div>
        <div class="news-content">
            <p class="bk-label">最新发布</p>
            <div class="index_arc_item" v-for="item in 10">
                <el-row :gutter="10">
                    <el-col :span="4">
                        <div class="bk-pic"></div>
                    </el-col>
                    <el-col :span="20">
                        <div class="bk-desc">
                            <h5><a href="javascript:;">个人博客应该选择什么样的域名和域名后缀</a></h5>
                            <p>不论搭建什么样的网站，选择一个好的域名对网站的意义也是不言而喻的。每一个网站都有之对应的域名，就像人的名字一样。每个人都想自己有个好听的名字，网站也是一样。一个网站可以有多个域名，但是一个域名只能对应一个网站。 一、域名要好记，方便输入域名本身的意义就是为了人</p>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .recommend{
        border:1px solid #eaeaea;
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
        .index_arc_item{
            background-color: #fff;
            padding:0.15rem;
            margin:0.2rem 0rem;
            .bk-pic{
                width:1.3rem;
                height:0.7rem;
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
        }
        
    }
</style>

