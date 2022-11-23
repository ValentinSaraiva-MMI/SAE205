import { createRouter, createWebHistory } from "vue-router";
import AccueilView from "../views/AccueilView.vue";
import AproposView from "../views/AproposView.vue";
import ContactView from "../views/ContactView.vue";

import ProjetRampageView from "../views/ProjetRampageView.vue";

import Page404View from "../views/Page404View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Accueil", component: AccueilView },
    { path: "/apropos", name: "AproposView", component: AproposView },
    { path: "/contact", name: "ContactView", component: ContactView },
    { path: "/rampage", name: "ProjetRampageView", component: ProjetRampageView },

    //page 404
    {
      path: "/:catchAll(.*)",
      name: "Page404View",
      component: Page404View,
    },

    // ici les autre routes
  ],
});

export default router;
