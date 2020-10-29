import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from "vue-router";
import UrlField from "@/components/UrlField/UrlField";
import UrlFieldFail from "@/components/UrlField/UrlFieldFail";

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

Vue.component('pulse-loader', require('vue-spinner/src/PulseLoader.vue'));

const routes = [
  { path: '/', component: UrlField },
  { path: '/fail', component: UrlFieldFail }
]

export const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App), router
}).$mount('#app')
