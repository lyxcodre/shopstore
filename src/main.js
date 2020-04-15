import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelazyload from 'vue-lazyload'

Vue.prototype.$bus = new Vue();
Vue.use(Vuelazyload);
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
    store
}).$mount('#app')