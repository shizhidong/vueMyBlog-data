import carouselBanner from './carousel.vue'//跑马灯
import newsLatestList from './newsLatest.vue'//最新文章
import aboutAssembly from './about.vue'//关于我
import friendshipLink from './friendshipLink.vue'//友情链接
import weatherForecast from './weatherForecast.vue'//天气预报
const carouse = {
    install:function(Vue){
        Vue.component("my-carouse",carouselBanner);
        Vue.component("my-newsList",newsLatestList);
        Vue.component("my-aboutAssembly",aboutAssembly);
        Vue.component("my-friendshipLink",friendshipLink);
        Vue.component("my-weatherForecast",weatherForecast);
    }
}

export default carouse;