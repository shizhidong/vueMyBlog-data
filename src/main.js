// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import asIndex from './utils/index'
import carousel from './components/index'
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/store.js'


Vue.use(ElementUI);
Vue.use(carousel);
Vue.use(asIndex);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// router.beforeEach((to, from, next) => {
//   if(to.path=="/MyPhoto"){
//     if(this.$getCookie("abc")==="shizhidong221700"){
//         alert("1")
//     }else{
//       alert("2")
//     }
      
//   }
// })