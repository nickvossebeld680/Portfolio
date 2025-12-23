import { createWebHistory, createRouter } from 'vue-router'

import Home from "@/Pages/Home.vue";
import Work from "@/Pages/Work.vue";
import About from "@/Pages/About.vue";
import America from "@/Pages/America.vue";


const routes = [
    { path: '/', component: Home },
    { path: '/Work', component: Work },
    { path: '/about', component: About },
    { path: '/America', component: America },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { left: 0, top: 0 };
    },
});

export default router