<template>
    <div class="detail">
        <h2>个人博客应该选择什么样的域名和域名后缀</h2>
        <div class="article-meta">
             <el-row :gutter="30">
                <el-col :span="12" class="item"><div class="article-meta-time"><i class="el-icon-time bail"></i>2018-02-05</div></el-col>
                <el-col :span="12"><div class="article-meta-time"><i class="el-icon-location-outline bail"></i>坏小子</div></el-col>
            </el-row>
        </div>
        <div class="article-content">
            <p>深入推进东北振兴，事关我国区域发展总体战略的实现，事关我国新型工业化、信息化、城镇化、农业现代化的协调发展，事关我国周边和东北亚地区的安全稳定。
                在深入推进东北振兴座谈会上，习近平总书记着眼国家发展大局，立足实现东北全面振兴、全方位振兴，明确提出了6个方面的要求，也是重大工作部署，对于我们推进新时代东北全面振兴，形成对国家重大战略的坚强支撑，具有深远意义。
                以优化营商环境为基础，全面深化改革；以培育壮大新动能为重点，激发创新驱动内生动力；科学统筹精准施策，构建协调发展新格局；更好支持生态建设和粮食生产，巩固提升绿色发展优势；深度融入共建“一带一路”，建设开放合作高地；更加关注补齐民生领域短板，让人民群众共享东北振兴成果。习近平总书记科学把握形势，坚持问题导向，确立了全面振兴东北的重点任务，具有很强的科学性、指导性，是推进新时代东北全面振兴的重要方法论，为东北地区破解矛盾、扬长避短、发挥优势指明了努力方向。
                把握东北振兴的重点任务，就要把深化改革摆在首要位置。东北地区发展面临新的困难和问题，解决这些困难和问题归根结底还要靠全面深化改革。在这次座谈会上，习近平总书记提出要“在谋划地区改革发展思路上下功夫，在解决突出矛盾问题上下功夫，在激发基层改革创新活力上下功夫”；强调要“重点从有利于深化供给侧结构性改革、有利于加快培育经济增长新动能、有利于激发各类市场主体活力、有利于增强人民群众获得感、有利于调动保护广大干部群众积极性等方面完善改革思路”。“三个下功夫”明确了深化改革的着力点，“五个有利于”突出了完善改革思路的总原则。按照习近平总书记的要求，坚定改革信心，做实改革举措，释放改革活力，提高改革效能，就能为新时代东北全面振兴提供强劲动力。
                把握东北振兴的重点任务，就要把新发展理念贯彻到各个方面。新发展理念是指挥棒、红绿灯，是管全局、管根本、管长远的导向。只有依靠创新把实体经济做实、做强、做优，积极扶持新兴产业加快发展，才能激发创新驱动内生动力；只有培育发展现代化都市圈，形成东北地区协同开放合力，深入推进东北振兴与京津冀协同发展、长江经济带发展、粤港澳大湾区建设等国家重大战略的对接和交流合作，才能构建协调发展新格局；只有贯彻绿水青山就是金山银山、冰天雪地也是金山银山的理念，充分利用东北地区的独特资源和优势，更好支持生态建设和粮食生产，才能巩固提升绿色发展优势；只有深度融入共建“一带一路”，加快落实辽宁自由贸易试验区重点任务，完善重点边境口岸基础设施，才能建设开放合作高地；只有更加关注补齐民生领域短板，保障好城乡生活困难人员基本生活，加大东北地区公共基础设施领域的投资力度，才能让人民群众共享东北振兴成果。
                实现东北振兴，是历史赋予我们这一代人义不容辞的使命。坚持以习近平新时代中国特色社会主义思想为指导，贯彻落实党中央关于东北振兴的一系列决策部署，一以贯之、久久为功，东北地区就一定能重塑环境、重振雄风，实现全面振兴。</p>
            <p>
                <pre class="prettyprint lang-cs">代码示例：
                    // 引入 Tabbar组件
                    import mTabbar from './components/Tabbar'
                    import mTabbarItem from './components/TabbarItem'
                    // 引入 vuex 的两个方法
                    import {mapGetters, mapActions} from 'vuex'
                    
                    export default {
                        name: 'app',
                        // 计算属性
                        computed:mapGetters([
                        // 从 getters 中获取值
                        'tabbarShow'
                        ]),
                        // 监听,当路由发生变化的时候执行
                        watch:{
                        $route(to,from){
                            if(to.path == '/' || to.path == '/Prisoner' || to.path == '/Goods' || to.path == '/Time' || to.path == '/Mine'){
                            /**
                            * $store来自Store对象
                            * dispatch 向 actions 发起请求
                            */
                            this.$store.dispatch('showTabBar');
                            }else{
                            this.$store.dispatch('hideTabBar');
                            }
                        }
                        },
                        beforeRouteEnter (to, from, next) {
                        // 在渲染该组件的对应路由被 confirm 前调用
                        // 不！能！获取组件实例 `this`
                        // 因为当钩子执行前，组件实例还没被创建
                        },
                        beforeRouteUpdate (to, from, next) {
                        // 在当前路由改变，但是该组件被复用时调用
                        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
                        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
                        // 可以访问组件实例 `this`
                        },
                        beforeRouteLeave (to, from, next) {
                        // 导航离开该组件的对应路由时调用
                        // 可以访问组件实例 `this`
                        },
                        components:{
                        mTabbar,
                        mTabbarItem
                        },
                        data() {
                        return {
                            select:"Building"
                        }
                        }
                    }

                </pre>
            </p>
        </div>
    </div>
</template>
<script>
export default{
    
}
</script>
<style scoped lang="less">
    .detail{
        width:100%;
        background-color: #fff;
        height: 100%;
        padding-top:20px;
        h2{
            font-size: 0.16rem;
            color:#555;
             width:100%;
             text-align: center;
        }
        .article-meta{
            margin-top: 15px;
            .item{
                text-align: right;
            }
           .article-meta-time{
               font-size: 0.12rem;
               color:#555;
               .bail{
                   margin-right: 5px;
               }
           }
        }
        .article-content{
            padding: 10px 20px;
            p,pre{
                font-size: 0.14rem;
                color:#555;
                text-align: justify;
                line-height: 25px;
            }
           pre{
               padding: 20px;
               background-color: #f5f5f5;
           }
        }
    }
</style>
