<template>
  <main >

    <div class="bg-noir">

   
    
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






<img class="w-32 relative z-0 -top-52 left-64 " src="../../public/images/Vector 8.png" alt="image d'acceuil">
<img class="w-32  relative z-0 -top-80" src="../../public/images/Vector 5.png" alt="image d'acceuil">
<img class="w-28 relative -top-[22rem] left-14" src="../../public/images/Vector 7.png" alt="image d'acceuil ">
<img class="relative -top-[28rem] w-24 left-52" src="../../public/images/Vector 6.png" alt="image d'acceuil">
   <img class="-mt-96" src="../../public/images/image3.png" alt="">

    </div>
   <p class="relative -top-52 text-right  text-3xl text-Beige-150 font-oswald">VENEZ VIVRE LE </p>
  
   <p class="relative -top-52 text-right  text-3xl text-Beige-150 font-oswald">ROCK</p>

<div class="relative -top-48 flex justify-end">
<rampage3 class="" />
<titres1 />
</div>


<div class="flex justify-center -mt-48" >
 <RouterLink to="/festival">
<boutonstroke>
  <P>Le festival</P>
</boutonstroke>
 </RouterLink>
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
<img  src="../../public/images/arrow1.png" alt="fleche ">
</div>

 
<SliderView/>
</div>

<div class="bg-noir">


<div class="flex justify-end">
<Titre2View />
</div>

<p class="flex justify-end text-sm text-Beige-150">
  Soutenez le festival en vous achetant un souvenir
</p>

<boutonstroke class="text-xs flex justify-end mr-4">
  <P>Voir la boutique</P>
</boutonstroke>


<!--A REVOIR -->

<div class="grid grid-cols-2 gap-2">     
<CardgoodiesViewVue image1="public/images/goodies/ecocup 1.png" 
image2="public\images\goodies\sweat rampage_ 1.png">
<p>GOODIES</p>
  </CardgoodiesViewVue>


 
  <CardgoodiesViewVue image1="public\images\goodies\sweat rampage_ 1-1.png" 
image2="public/images/goodies/tshirtrampage1.png">
<p>VETEMENTS </p>
  </CardgoodiesViewVue>



</div>
 
<div class="flex justify-center gap-2">
<Youtube class="w-5" /> 
<Facebook class="w-5"/>
<Twitter class="w-5"/>
<Instagram class="w-5"/>
</div>

<div class="pt-3 bg-Beige-150">

<p class="text-base text-left text-neutral-800">ILS NOUS SOUTIENNENT</p>
<div class="w-44 h-[5.03px] bg-neutral-800"></div>
</div>



</div>

  </main>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'


//logo Menu Hamburger 
import MenuHamburger from "../components/icons/HamburgerMenue.vue"




//logo festival 
import logofestival from '../components/icons/logofestival.vue';

//logo reseau sociaux 
import LogoFacebook from '../components/icons/Facebook.vue';
import LogoTwitter from '../components/icons/Twitter.vue';
import LogoYoutube from '../components/icons/Youtube.vue';
import LogoInstagram from '../components/icons/Instagram.vue';

//icones
import Mail from '../components/icons/Mail.vue';
import Map from '../components/icons/Map.vue';
import Phone from '../components/icons/Phone.vue';
import HamburgerMenue from "../components/icons/HamburgerMenue.vue";
import Navbar from '../components/navbar.vue';

//bouton 
import Bouton1 from '../components/Bouton1View.vue';
import Bouton1View from '../components/Bouton1View.vue';
import boutonstroke from '../components/BoutonstrokeView.vue';

//component
import undertitle1 from '../components/Rampage3.vue';
import Rampage3 from '../components/Rampage3.vue';
import titres1 from '../components/Titre1.vue';
import slider from '../components/SliderView.vue';
import SliderView from '../components/SliderView.vue';
import Titre2View from '../components/Titre2View.vue';
import Titre2View1 from '../components/Titre2View.vue';
import CardgoodiesViewVue from '../components/CardgoodiesView.vue';
import Youtube from '../components/icons/Youtube.vue';
import Facebook from '../components/icons/Facebook.vue';
import Twitter from '../components/icons/Twitter.vue';
import Instagram from '../components/icons/Instagram.vue';








export default {
  components: { CardgoodiesViewVue, Titre2View, boutonstroke, titres1, undertitle1, Bouton1, logofestival, LogoFacebook, LogoInstagram, LogoYoutube, LogoTwitter, Mail, Map, Phone, MenuHamburger, HamburgerMenue, Navbar, Bouton1View, Rampage3, SliderView, Titre2View1, Youtube, Facebook, Twitter, Instagram },
};
</script>

<!--Corriger Accueil, importer component-->

