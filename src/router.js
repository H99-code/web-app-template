import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/LoginPage.vue';
import HomePage from './components/HomePage.vue';
import RegistrationPage from "@/components/RegistrationPage.vue";

const routes = [
    { path: '/', component: LoginPage },
    { path: '/home', component: HomePage },
    {path:'/register', component: RegistrationPage}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
