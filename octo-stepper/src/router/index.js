import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/main.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/pages/home.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/pages/profile.vue')
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('@/views/pages/cart.vue'),
      },
      {
        path: '/items/:name',
        name: 'preview',
        component: () => import('@/components/item_preview.vue') 
      },
      {
        path: '/checkout',
        name: 'checkout',
        component: () => import('@/components/checkout.vue') 
      },
      {
        path: '/orders',
        name: 'order',
        component: () => import('@/views/pages/order.vue')
      },
      {
        path: '/wishlist',
        name: 'wishlist',
        component: () => import('@/views/pages/wishlist.vue')
      },
    ]
  },
  {
    path: '/splash',
    name: 'index',
    component: () => import('@/views/splash.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
