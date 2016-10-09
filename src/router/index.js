/**
 * Created by yelingfeng on 2016/10/9.
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import page1 from 'views/page1'
import page2 from 'views/page2'
import page3 from "views/page3"
export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        { path: '/page1', name: "page1", component: page1 },
        { path: '/page2', name: "page2", component: page2 },
        { path: '/page3', name: "page3", component: page3 },
        { path: '*', redirect: '/page1' }
    ]
})