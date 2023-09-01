import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import ProjectList from './pages/ProjectList.vue';
import SingleProject from './pages/SingleProject.vue';
import NotFound from './pages/NotFound.vue';
import ContactUs from './pages/ContactUs.vue';
import ThankYou from './pages/ThankYou.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectList
        },
        {
            path: '/contact-us',
            name: 'contact-us',
            component: ContactUs
        },
        {
            path: '/thank-you',
            name: 'thank-you',
            component: ThankYou
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: SingleProject
        },
        {
            path: '/pagina-non-trovata',
            name: 'not-found',
            component: NotFound
        },
        {
            path: '/:catchAll(.*)',
            redirect: '/pagina-non-trovata',
        }
    ]
});

export { router }