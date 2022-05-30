<template>
    <div class="flex items-center justify-between w-full h-16 p-7 ">
        <div class="flex items-center justify-between w-32 h-12 p-1">
           
        </div>
<ul class="hidden z-50 flex-auto x-justify-center gap-2 md:flex ">
  <!-- Autre menu -->
 
  <li class="flex flex-auto mx-2 text-base font-oswald text-Beige-150 "><router-link to="/AccueilView">Programmation</router-link></li>
  <li class="flex flex-auto mx-2  text-base font-oswald text-Beige-150" ><router-link to="/Test">Artiste</router-link></li>
  <li class="flex flex-auto mx-2  text-base font-oswald text-Beige-150" ><router-link to="/">Festival</router-link></li>
    <li class="flex flex-auto mx-2 text-base font-oswald text-Beige-150" ><router-link to="/">Contact</router-link></li>

 
</ul>

       <hamburger-menue-vue class="flex w-7"/>

    </div>
</template>

<script >


import HamburgerMenueVue from "./icons/HamburgerMenue.vue";


export default {
 name: "navbar",
 components: {HamburgerMenueVue},

}
</script>
