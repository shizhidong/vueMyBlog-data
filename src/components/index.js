import carouselBanner from './carousel.vue'
import newsLatestList from './newsLatest.vue'
const carouse = {
    install:function(Vue){
        Vue.component("my-carouse",carouselBanner);
        Vue.component("my-newsList",newsLatestList);
    }
}

export default carouse;