<template>
    <div class="flex items-center justify-between w-full h-16 p-7 ">
        <div class="flex items-center justify-between w-32 h-12 p-1">
           
        </div>
<ul class="hidden z-50 flex-auto x-justify-center gap-2 md:flex ">
  <!-- menu deployée -->
 
  <li class="flex flex-auto mx-2 text-base font-oswald text-Beige-150 "><router-link to="/AccueilView">Programmation</router-link></li>
  <li class="flex flex-auto mx-2  text-base font-oswald text-Beige-150" ><router-link to="/Test">Artiste</router-link></li>
  <li class="flex flex-auto mx-2  text-base font-oswald text-Beige-150" ><router-link to="/festival">Festival</router-link></li>
    <li class="flex flex-auto mx-2 text-base font-oswald text-Beige-150" ><router-link to="/contact">Contact</router-link></li>

 
</ul>

      <button class="relative z-111 text-xl sm:hidden"
      aria-haspopup="true"
                aria-controls="menu"
                :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">

       <hamburger-menue-vue class="  flex w-7"/>
          </button>




                
      <div id="menu"
          class="fixed overflow-y-hidden inset-0 translate-x-full  z-100   bg-red-200 motion-safe:duration-1000 motion-safe:transition-transform"
          :class="{ 'translate-x-0': menuOuvert }">
        <ul>
          <li><router-link to="/">Un</router-link></li>
          <li><router-link to="/">Deux</router-link></li>
          <li><router-link to="/">Trois</router-link></li>
        </ul>

      </div>



    
        <!-- "z-50" place le menu eu dessus de tous les autes éléments.
            "relative" est indispensable avec un z- sinon ce dernier n'est pas pris en compte
            "sm:hidden permet de cacher l'élément lorsque l'écran est moins large que 640px    -->
  

    </div>
</template>

<script >


import HamburgerMenueVue from "./icons/HamburgerMenue.vue";


export default {
 name: "navbar",
 components: {HamburgerMenueVue},
 data() {
    return {
      menuOuvert: false,
    };
  },
}
</script>
