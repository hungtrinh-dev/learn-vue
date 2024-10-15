import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import JobListingsView from '@/views/JobListingsView.vue'
import DetailJobListing from '@/views/DetailJobListing.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomeView
    },
    {
      path: '/jobs',
      name: 'JobListingsPage',
      component: JobListingsView
    },
    {
      path: '/jobs/:id',
      name: 'DetailListingPage',
      component: DetailJobListing
    }
  ]
})

export default router
