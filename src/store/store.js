import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        carouselIsShow:true,//跑马灯是否显示
        navNumber:"0"
    },
    mutations:{
        increase(state){
            state.carouselIsShow=false;//跑马灯是否显示
        },
        increaseShow(state){
            state.carouselIsShow=true;//跑马灯是否显示
        }
    },
    actions:{
        actionIncrease({commit}){
            commit("increase")
        },
        actionIncreaseShow({commit}){
            commit('increaseShow')
        }
       
    }
})
export default store;