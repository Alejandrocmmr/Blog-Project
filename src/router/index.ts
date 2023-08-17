import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/About',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Posts',
      name: 'Posts',
      component: () => import('../views/PostsView.vue')
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/Home/News',
      name: 'News',
      component: () => import('../components/sidebar/NewsBar.vue')
    },
    {
      path: '/Home/Games',
      name: 'Games',
      component: () => import('../components/sidebar/GamesBar.vue')
    },
    {
      path: '/Home/HomeAndHealth',
      name: 'HomeAndHealth',
      component: () => import('../components/sidebar/HomeAndHealthBar.vue')
    },
    {
      path: '/Home/SocialMedias',
      name: 'SocialMedias',
      component: () => import('../components/sidebar/SocialMediasBar.vue')
    },
    {
      path: '/Home/Documents',
      name: 'Documents',
      component: () => import('../components/sidebar/DocumentsBar.vue')
    },
    {
      path: '/Home/GeneralDiscussions',
      name: 'GeneralDiscussions',
      component: () => import('../components/sidebar/GeneralDiscussionsBar.vue')
    }
  ]
})

export default router
