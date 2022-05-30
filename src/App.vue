<template>


<div class="bg-noir">  
<div class="inline-flex w-full">
<logofestival class="w-8 ml-3 "/>
<navbar />
</div>
</div>

<router-view />

<!--     

<div class="z-50">
<div class="text-5xl text-Beige-150 z-40  font-oswald ml-5">
  BIENVENUE AU  
</div>
<div class="z-40 text-5xl  text-Beige-150 font-oswald stroke-Beige-150 stroke-1 text-right mr-24">
   RAMPAGE
</div>

<div>
  <p class="text-sm font-oswald text-Beige-150  z-40 text-center underline mt-6">24-27 juin 2022,Besançon</p>
    
</div>
</div>

 <RouterLink to="/billeterie">
<bouton1 class="flex justify-center"/>
 </RouterLink>






<img class="w-32 relative z-0 -top-52 left-64 " src="../public/images/Vector 8.png" alt="image d'acceuil">
<img class="w-32  relative z-0 -top-80" src="../public/images/Vector 5.png" alt="image d'acceuil">
<img class="w-28 relative -top-[22rem] left-14" src="../public/images/Vector 7.png" alt="image d'acceuil ">
<img class="relative -top-[28rem] w-24 left-52" src="../public/images/Vector 6.png" alt="image d'acceuil">
   <img class="-mt-96" src="../public/images/image3.png" alt="">
   <p class="relative -top-52 text-right  text-3xl text-Beige-150 font-oswald">VENEZ VIVRE LE </p>
  
   <p class="relative -top-52 text-right  text-3xl text-Beige-150 font-oswald">ROCK</p>

<div class="relative -top-48 flex justify-end">
<rampage3 class="" />
<titres1 />
</div>


<div class="flex justify-center -mt-48" >
 <RouterLink to="/festival">
<boutonstroke-view >
  <P>Le festival</P>
</boutonstroke-view>
 </RouterLink>
</div>

 </div>

<div class="bg-Beige-150">

<div class="mt-7">
  <p class="w-[198.01px] font-medium text-left text-[#333]">
    <span class="w-[198.01px] text-[30.164947509765625px] font-medium text-left text-[#333]"
      >LINE UP </span
    ><span class="w-[198.01px] text-xl font-medium text-left text-[#333]">2022 </span>
  </p>
   <div class="w-[167px] h-1 -mt-1 bg-[#333]"></div>
  
</div>

<div class=" flex justify-end">
<img  src="../public/images/arrow1.png" alt="fleche ">
</div>
</div>

  -->


</template>

<script>
import { RouterLink, RouterView } from 'vue-router'


//logo Menu Hamburger 
import MenuHamburger from "../src/components/icons/HamburgerMenue.vue";

//logo festival 
import logofestival from '../src/components/icons/logofestival.vue';

//logo reseau sociaux 
import LogoFacebook from '../src/components/icons/Facebook.vue';
import LogoTwitter from '../src/components/icons/Twitter.vue';
import LogoYoutube from '../src/components/icons/Youtube.vue';
import LogoInstagram from '../src/components/icons/Instagram.vue';

//logo map,localisation, mail 
import Mail from '../src/components/icons/Mail.vue';
import Map from '../src/components/icons/Map.vue';
import Phone from '../src/components/icons/Phone.vue';
import HamburgerMenue from "../src/components/icons/HamburgerMenue.vue";
import Navbar from './components/navbar.vue';

//bouton 
import Bouton1 from './components/Bouton1View.vue';
import Bouton1View from './components/Bouton1View.vue';
import boutonstroke from './components/BoutonstrokeView.vue';

//component
import undertitle1 from './components/Rampage3.vue';
import Rampage3 from './components/Rampage3.vue';
import titres1 from './components/Titre1.vue';
import BoutonstrokeView from './components/BoutonstrokeView.vue';




export default {
  components: { boutonstroke, titres1, undertitle1, Bouton1, logofestival, LogoFacebook, LogoInstagram, LogoYoutube, LogoTwitter, Mail, Map, Phone, MenuHamburger, HamburgerMenue, Navbar, Bouton1View, Rampage3, BoutonstrokeView },
};
</script>




