import { createRouter, createWebHistory } from 'vue-router';

const MainLayout = () => import('../components/layout/MainLayout.vue');
const TwoLayout = () => import('../components/layout/TwoLayout.vue');


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: MainLayout },
        { path: '/two', component: TwoLayout },
    ]
})

export default router;
