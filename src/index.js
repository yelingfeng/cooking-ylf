/**
 * Created by yelingfeng on 2016/10/9.
 */
import Vue from 'vue'
import App from './App'
import store from "./store"
import router from "./router"
import { sync } from 'vuex-router-sync'

sync(store, router)

if (process.env.NODE_ENV !== 'production') {
    console.log = (function(log) {
        return function(obj) {
            log.call(console, JSON.parse(JSON.stringify(obj)));
        }
    })(console.log);
} else {
    console.log = function() {}
}


new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app")
