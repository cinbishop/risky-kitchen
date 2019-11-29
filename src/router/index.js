import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import auth from '../../auth.json';

Vue.use(VueRouter);

import BlogEntries from '../statics/data/blogs.json';

var tagArr = [];

const blogRoutes = Object.keys(BlogEntries).map(section => {
    const children = BlogEntries[section].map(child => ({
        path: child.id,
        name: child.id,
        component: () => import(`../posts/${section}/${child.id}.md`)
    }));
    for (var blog of BlogEntries[section]) {
        for (var tag of blog.tags) {
            if (!~tagArr.indexOf(tag)) {
                tagArr.push(tag);
            }
        }
    }
    return {
        path: `/${section}`,
        name: section,
        component: () => import('../views/Blog.vue'),
        children
    };
});

const tagRoutes = tagArr.map(tag => {
    return {
        path: `/tags/${tag}`,
        name: tag,
        component: Home
    };
});

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    ...tagRoutes,
    ...blogRoutes
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

Vue.use(VueAnalytics, {
    id: auth.ga,
    router
});

export default router;
