import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/modules/dashboard/views/Dashboard.vue'
import Products from '@/modules/products/views/Products.vue'
import Sales from '@/modules/sales/views/Sales.vue'
import Inventory from '@/modules/inventory/views/Inventory.vue'
import Reports from '@/modules/reports/views/Reports.vue'
import Login from '@/modules/auth/views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: { layout: 'empty' }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/sales',
      name: 'Sales',
      component: Sales
    },
    {
      path: '/inventory',
      name: 'Inventory',
      component: Inventory
    },
    {
      path: '/reports',
      name: 'Reports',
      component: Reports
    }
  ]
})

export default router
