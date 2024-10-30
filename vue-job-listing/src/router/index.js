import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import JobListingsView from '@/views/JobListingsView.vue'
import DetailJobListing from '@/views/DetailJobListing.vue'
import AddJobView from '@/views/AddJobView.vue'
import KanbanTodos from '@/views/KanbanBoardView/KanbanTodos.vue'
import GridViewDnD from '@/views/GirdViewDnD/GirdViewDnD.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    isNavbar: true
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: JobListingsView,
    isNavbar: true
  },
  {
    path: '/jobs/:id',
    name: 'DetailListingPage',
    component: DetailJobListing,
    isNavbar: false
  },
  {
    path: '/jobs/create-new-listing',
    name: 'Add Job',
    component: AddJobView,
    isNavbar: true
  },
  {
    path: '/kanban-todos',
    name: 'Kanban Todos',
    component: KanbanTodos,
    isNavbar: true
  },
  {
    path: '/dnd-gridview',
    name: 'DnD Grid View',
    component: GridViewDnD,
    isNavbar: true
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
