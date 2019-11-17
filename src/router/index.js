import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import auth from '../../auth.json';

Vue.use(VueRouter);

import BlogEntries from '../statics/data/blogs.json';

const blogRoutes = Object.keys(BlogEntries).map(section => {
  const children = BlogEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    component: () => import(`../posts/${section}/${child.id}.md`)
  }))
  return {
    path: `/${section}`,
    name: section,
    component: () => import('../views/Blog.vue'),
    children
  }
})

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
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
