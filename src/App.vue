<template>
  <div class="bg-[#010101]">
    <div class="inline-flex w-full">
      <RouterLink class="my-auto" to="/">
        <logo-valentin class="ml-3 w-14" />
      </RouterLink>
      <navbar />
    </div>
  </div>

  <router-view />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

//logo Menu Hamburger
import MenuHamburger from "../src/components/icons/HamburgerMenue.vue";

//logo valentin
import LogoValentin from "./components/icons/Logo.vue";

//logo reseau sociaux

//logo map,localisation, mail

//component

import navbar from "./components/navbar.vue";

export default {
  components: {
    LogoValentin,
    navbar,
  },
};
</script>




