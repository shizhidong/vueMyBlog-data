import api from './api'
import http from './http'
export default{
    install:function(Vue,options){
        Vue.prototype.$api = api;
        Vue.prototype.$http = http;
    }
}