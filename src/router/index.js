import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import CatalogView from '@/views/CatalogView.vue'
import FinancingView from '@/views/FinancingView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import LocationView from '@/views/LocationView.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
  { path: '/', name: 'Inicio', component: HomeView },
  { path: '/catalog', name: 'Catálogo', component: CatalogView },
  { path: '/financing', name: 'Financiación', component: FinancingView },
  { path: '/about-us', name: 'Nosotros', component: AboutUsView },
  { path: '/location', name: 'Ubicación', component: LocationView },
  { path: '/contact', name: 'Contacto', component: ContactView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
