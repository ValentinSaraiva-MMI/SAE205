import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import FestivalView from '../views/FestivalView.vue'
import ContactView from '../views/ContactView.vue'
import MentionLegaleView from '../views/MentionLegaleView.vue'
import Page404View from '../views/Page404View.vue'
import ArtisteView from '../views/ArtisteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/festival', name: 'FestivalView', component: FestivalView },
    { path: '/contact', name: 'ContactView ', component: ContactView },
    { path: '/mentionlegale', name: 'MentionLegaleView ', component: MentionLegaleView },
    { path: '/artiste', name: 'ArtisteView', component: ArtisteView },



    //page 404 
    {
      path: '/:catchAll(.*)',
      name: 'Page404View',
      component: Page404View
    },




    // ici les autre routes
  ]
})

export default router
