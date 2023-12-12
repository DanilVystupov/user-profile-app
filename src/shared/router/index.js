import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import UserDetailsPage from '@/pages/UserDetailsPage.vue';
import UserPostsPage from '@/pages/UserPostsPage.vue';
import UserAlbumsPage from '@/pages/UserAlbumsPage.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/user/:id', 
    name: 'userDetails',
    component: UserDetailsPage,
  },
  {
    path: '/user/:id/posts', 
    name: 'userPosts',
    component: UserPostsPage,
  },
  {
    path: '/user/:id/albums', 
    name: 'userAlbums',
    component: UserAlbumsPage,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../pages/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
