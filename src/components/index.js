import carouselBanner from './carousel.vue'//跑马灯
import newsLatestList from './newsLatest.vue'//最新文章
import aboutAssembly from './about.vue'//关于我
const carouse = {
    install:function(Vue){
        Vue.component("my-carouse",carouselBanner);
        Vue.component("my-newsList",newsLatestList);
        Vue.component("my-aboutAssembly",aboutAssembly);
    }
}

export default carouse;