import { createRouter, createWebHistory } from 'vue-router'
import ProductDetail from '../components/ProductDetail.vue'
import ProductList from '../components/ProductList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProductList
    },
    {
      path: '/product/:id',
      name: 'product-detail',
      component: ProductDetail,
      props: true
    }
  ]
})

export default router