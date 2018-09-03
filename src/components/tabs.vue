<template>
    <div class="tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane v-for="(item,index) in tabsList" :label="item.tabsName" :name="item.clickName">
                    <ul>
                        <li v-for="(item1,index) in item.tabes">
                            <el-row :gutter="10">
                                <el-col :span="15">
                                    <p class="index_recd"><a href="javascript:;">{{item1.tabsTitle}}</a></p>
                                </el-col>
                                <el-col :span="9">
                                    <p class="index_data">{{item1.tabsData}}</p>
                                </el-col>
                            </el-row>
                        </li>
                    </ul>
            </el-tab-pane>
             <el-tab-pane label="联系站长" name="fourth">
                 <p class="ContactMaster"><span>联系方式（QQ）：</span>59317748</p>
             </el-tab-pane>
        </el-tabs>
     </div>
</template>
<script>
  export default {
      name:"tabs",
    data() {
      return {
        activeName: 'first',
        tabsList:[
            {
                "id":"1",
                "tabsName":"网站公告",
                "clickName":"first",
                "tabes":[
                    {
                         "tabsTitle":"阻止a标签href默认跳转事件1",
                         "tabsData":"2018-04-21"
                    },
                     {
                         "tabsTitle":"阻止a标签href默认跳转事件2",
                         "tabsData":"2018-04-22"
                    }
                ]
               
            },
            {
                "id":"2",
                "tabsName":"会员中心",
                "clickName":"second",
                "tabes":[
                    {
                         "tabsTitle":"阻止a标签href默认跳转事件3",
                         "tabsData":"2018-04-23"
                    },
                     {
                         "tabsTitle":"阻止a标签href默认跳转事件4",
                         "tabsData":"2018-04-24"
                    }
                ]
               
            }
        ]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<style lang="less" scoped>
    .tabs{
        background-color: #fff;
        padding: 0rem 0.1rem;
        margin-top:-0.80rem;
        ul{
            li{
                line-height: 30px;
                p{
                    color:#555;
                    font-size: 0.14rem;
                    a{
                        color: #555;
                        
                        &:hover{
                            color:#11a0f2
                        }
                    }
                }
            }
        }
    }
    .index_recd{
        font-size: 0.14rem;
        a{
            font-size: 0.14rem;
                color: #555;
            &:hover{
                color:#11a0f2
            }
        }
    }
    .index_data{
        color: #555;
        font-size: 0.14rem;
        text-align: right;
    }
    .ContactMaster{
        font-size: 0.14rem;
        color:#555;
         font-weight:bold;
        span{
            font-weight: 500;
        }
    }
</style>
