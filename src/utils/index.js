import api from './api'
import http from './http'
import utils from './utils'
export default{
    install:function(Vue,options){
        Vue.prototype.$api = api;
        Vue.prototype.$http = http;
        Vue.prototype.$utils = utils;
    }
}