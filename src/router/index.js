import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import FestivalView from '../views/FestivalView.vue'
import ContactView from '../views/ContactView.vue'
import MentionLegaleView from '../views/MentionLegaleView.vue'
import Page404View from '../views/Page404View.vue'
import ArtisteView from '../views/ArtisteView.vue'
import ArtisteRockView from '../views/ArtisteRockView.vue'
import ArtisteBluesView from '../views/ArtisteBluesView.vue'
import ArtistePopView from '../views/ArtistePopView.vue'
import ArtisteHardView from '../views/ArtisteHardView.vue'

import ArtistePunkView from '../views/ArtistePunkView.vue'
import ArtisteMetalView from '../views/ArtisteMetalView.vue'
import ArtisteDynamiqueView from '../views/ArtisteDynamiqueView.vue'
import GuideStyleView from '../views/GuideStyleView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/festival', name: 'FestivalView', component: FestivalView },
    { path: '/contact', name: 'ContactView ', component: ContactView },
    { path: '/mentionlegale', name: 'MentionLegaleView ', component: MentionLegaleView },
    { path: '/artiste', name: 'ArtisteView', component: ArtisteView },
    { path: '/artisterock', name: 'ArtisteRockView', component: ArtisteRockView },
    { path: '/artisteblues', name: 'ArtisteBluesView', component: ArtisteBluesView },
    { path: '/artistepop', name: 'ArtistePopView', component: ArtistePopView },
    { path: '/artistehard', name: 'ArtisteHardView', component: ArtisteHardView },
    { path: '/artistepunk', name: 'ArtistePunkView', component: ArtistePunkView },
    { path: '/artistemetal', name: 'ArtisteMetalView', component: ArtisteMetalView },
    { path: '/artistedynamique', name: 'ArtisteDynamiqueView', component: ArtisteDynamiqueView },
    { path: '/style-guide', name: 'GuideStyleView', component: GuideStyleView },





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
