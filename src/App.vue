<template>
    <div id="app" >
        <div class="header-wapper">
            <header class="header header-fixed">
                <div class="container">
                    <h1><a href="javascript:;">cooking demo</a></h1>
                    <ul class="nav">
                        <li class="nav-item" v-for="item in itemData">
                            <router-link activeClass="active" :to="'/'+ item.link + '/' " tag="a">
                                {{item.name}}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
        <div class="main-center">
            <div class="page-container">
                <transition name="fade" mode="out-in">
                    <router-view class="view"></router-view>
                </transition>
            </div>
        </div>
    </div >
</template>

<script>
    import {mapGetters} from "vuex"
    export default {
        name: "app",
        computed: mapGetters({
            itemData: 'getOneMenu'
        }),
        data() {
            return {
                message: 'cooking'
            }
        }
    }
</script>

<style >
    :root{
        --color-primary: #20a0ff;
        --link-color: #475669;
        --link-hover-color: var(--color-primary);

    }
    @reset-global pc;

    body {
        font-family: 'Helvetica Neue', Helvetica, 'Microsoft YaHei', SimSun, sans-serif;
        overflow: auto;
        font-weight: 400;
    }

    #app {
        height: 100%;
    }
    a {
        color: var(--link-color);
        text-decoration: none;
    }

    .header-wapper {
        height: 80px;
    }

    .header {
        height: 80px;
        background-color: #1F2D3D;
        color: #fff;
        top: 0;
        left: 0;
        width: 100%;
        line-height: 80px;
        z-index: 100;
        position: relative;
    }

    .header-fixed {
        position: fixed;
    }

    .container,
    .page-container {
        width: 1140px;
        margin: 0 auto;
    }

    .header h1 {
        margin: 0;
        float: left;
        font-size: 32px;
        font-weight: 400;
    }

    .header h1 a {
        color: #fff;
        text-decoration: none;
        display: block;
    }

    .header .nav {
        float: right;
        height: 100%;
        line-height: 80px;
        background: transparent;
        padding: 0;
        margin: 0;
    }

    .header .nav-item {
        margin: 0;
        float: left;
        list-style: none;
        position: relative;
        cursor: pointer;
        margin-left: 20px;
    }

    .header .nav-item a {
        text-decoration: none;
        color: #fff;
        display: block;
        padding: 0 20px;
        opacity: .8;
    }

    .header .nav-item a.active {
        text-decoration: none;
        color: #fff;
        display: block;
        padding: 0 20px;
        opacity: .8;
    }

    .header .nav-item a.active:before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #99d2fc;
    }

    @media (max-width: 1140px) {
        .container,
        .page-container {
            width: 100%;
        }
    }

    .main-center {
        margin-top: -80px;
        padding: 80px 0 120px;
        box-sizing: border-box;
        min-height: 100%;
    }

    .page-container {
        padding-top: 55px;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: all .3s ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0;
    }
</style>