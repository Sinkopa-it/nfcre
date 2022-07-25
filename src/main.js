import MainPage from "@/components/MainPage";
import NFservicesPage from "@/components/NFservicesPage";
import NF404 from "@/components/NF404";
import { createApp } from 'vue'
import App from './App.vue'





import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage,//shsould be imported

    },
    {
        path: '/services',
        name: 'NFservicesPage',
        component: NFservicesPage,//shsould be imported

    },
    {
        path: '/404',
        name: 'NF404',
        component: NF404,//shsould be imported
    },
    {
        // path: "*",
        path: "/:catchAll(.*)",
        name: "NF404",
        component: NF404,

    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    scrollBehavior: function(to, from, savedPosition) {
        if (to.hash) {
            // return {selector: to.hash}
            //Or for Vue 3:
            return {el: to.hash}
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes
})
createApp(App).use(router).mount('#app')