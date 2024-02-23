import { createRouter, createWebHistory } from 'vue-router'
import CrearOrganizaciones from '../views/CrearOrganizaciones.vue'
import CrearActividades from '../views/CrearActividades.vue'
import Organizaciones from '../views/Organizaciones.vue'
import PanelAdminInfo from '../views/PanelAdminInfo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CrearOrganizaciones
    },
    {
      path: '/actividades',
      name: 'actividades',
      component: CrearActividades
    },
    {
      path: '/organizaciones',
      name: 'organizaciones',
      component: Organizaciones
    },
    {
      path: '/panelAdminInfo',
      name: 'panelAdminInfo',
      component: PanelAdminInfo
    }
  ]
})

export default router
