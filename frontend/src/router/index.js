import { createRouter, createWebHistory } from 'vue-router';

const MainLayout = () => import('../components/layout/MainLayout.vue');
const CovidChartComponent = () => import('../components/layout/CovidChartComponent.vue');


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: MainLayout },
        { path: '/CovidChartComponent', component: CovidChartComponent },
    ]
})

export default router;
