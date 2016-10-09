/**
 * Created by yelingfeng on 2016/10/9.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger.js'
Vue.use(Vuex)
const isProd = process.env.NODE_ENV === 'production'
const plugins = isProd ? [] : [createLogger];

const store = new Vuex.Store({
    plugins: plugins,
    state: {
        testData: "",
        oneMenu: [{
            name: "页面1",
            link: "page1"
        }, {
            name: "页面2",
            link: "page2"
        }, {
            name: "页面3",
            link: "page3"
        }]
    },
    actions: {},
    mutations: {},
    getters: {
        getOneMenu(state) {
            return state.oneMenu
        }
    }
})

export default store