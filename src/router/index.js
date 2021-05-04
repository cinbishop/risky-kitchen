import Vue from 'vue';
import VueGtag from 'vue-gtag';
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
        component: () => import(`../posts/${section}/${child.id}.md`),
        meta: {
            title: 'Risky.Kitchen - '+child.title,
            metaTags: [
                {
                    name: 'description',
                    content: child.description
                },
                {
                    property: 'og:description',
                    content: child.description
                }
            ]
        }
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
        component: Home,
        meta: {
            title: 'Risky.Kitchen - '+tag,
            metaTags: [
                {
                    name: 'description',
                    content: 'Articles related to: '+tag
                },
                {
                    property: 'og:description',
                    content: 'Articles related to: '+tag
                }
            ]
        }
    };
});

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: 'Risky.Kitchen - Probably Not A Great Use Of Your Time',
            metaTags: [
                {
                    name: 'description',
                    content: 'Your source for food-related things you definitely don\'t need to know. Or care about at all really. Seriously, do something better with your time.'
                },
                {
                    property: 'og:description',
                    content: 'Your source for food-related things you definitely don\'t need to know. Or care about at all really. Seriously, do something better with your time.'
                }
            ]
        }
    },
    ...tagRoutes,
    ...blogRoutes
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        window.scrollTo(0,0);
    }
});

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  if(!nearestWithMeta) return next();
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })

  .forEach(tag => document.head.appendChild(tag));

  next();
});

Vue.use(VueGtag, {
    config: {
        id: auth.ga
    }
});

export default router;
