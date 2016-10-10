/**
 * Created by yelingfeng on 2016/10/9.
 */
import Vue from 'vue'
import App from './App'
import store from "./store"
import router from "./router"
import { sync } from 'vuex-router-sync'

sync(store, router)

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app")
