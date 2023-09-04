import { createRouter, createWebHistory } from 'vue-router';

const MainLayout = () => import('../components/layout/MainLayout.vue');


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: MainLayout,
        }
    ]
})

export default router;
