import './assets/main.css';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Content from '@/components/Content.vue';
import Movies from '@/views/Movies.vue';
import Home from '@/views/Home.vue';
import Series from '@/views/Series.vue';
import Bookmark from '@/views/Bookmark.vue';
import Search from '@/views/Search.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/movies',
      component: Movies
    },
    {
      path: '/series',
      component: Series
    },
    {
      path: '/bookmarks',
      component: Bookmark
    },
    {
      path: '/search/:query?',
      component: Search
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/:id',
      component: Content
    }
  ]
});

createApp(App).use(router).mount('#app');
