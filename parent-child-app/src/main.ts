import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import StudentInfo from './student-info.vue';
import HomePage from './home-page.vue';

const routes = [
    {
        path: '/',
        redirect: '/home-page'
    },
    {
        path: '/home-page',
        name: 'home',
        component: HomePage
    },
    {
        path: '/student-info/:id',
        name: 'student',
        component: StudentInfo
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App)
    .use(router)
    .mount('#app');

export default router;