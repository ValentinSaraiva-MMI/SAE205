<template>
  <h1
    class=" text-xl
      text-big text-center text-Beige-150
      bg-noir
    "
  >
    Guide de Style Rampage Festival
  </h1>
  <div class="ml-2.5">
    <h2 class="text-2xl mb-3 mt-3 underline underline-offset-4">Couleurs principales</h2>


    <div class="mb-5">
    <h1 class="w-20 h-10 rounded-xl mr-2.5 bg-noir inline-block"></h1>
    <p class="-mt-2">#262626</p>
        </div>

  
    <div class="mb-5">
    <h2 class="w-20 h-10 rounded-xl mr-2.5 bg-Beige-150 inline-block"></h2>
  <p class="-mt-2">#D4CEBD</p>
     </div>

   <div class="mb-5"></div>
    <h3 class="w-20 h-10 border-2 border-neutral-900 rounded-xl mr-2.5 bg-white inline-block"></h3>
      <p class="-mt-2">#FFFFFF</p>
      </div>
    


    <h2 class="text-2xl mt-3 mb-3 underline underline-offset-4">
      Polices et taille du guide de style
    </h2>

    <h2 class="text-xl font-oswald mb-2">Oswald</h2>
    <p class="text-xl font-oswald">
      Ceci est un texte de remplissage écrit en XL
    </p>
    <p class="text-base font-oswald">
      Ceci est un texte de remplissage écrit en taille de base (16px)
    </p>
    <p class="text-xs font-oswald">
      Ceci est un texte de remplissage écrit en xs
    </p>
    <p class="font-bold font-oswald mt-1">Ceci est un texte écrit en gras</p>
    <p class="font-light font-oswald mt-1">Ceci est un texte écrit en light</p>
    <p class="italic font-oswald mt-1">Ceci est un texte écrit en italic</p>



    <h2 class="text-2xl underline underline-offset-4 mt-5">Icones</h2>

    <div class=" grid grid-cols-5">
      <HamburgerMenue1 class="w-8"/>
    <instagram class="w-8"/>
      <Youtube1 class="w-8"/>
      <Facebook1 class="w-8"/>
      <Twitter1 class="w-8"/>

      <Phone class="w-8"/>
      <Map class="w-8"/>
      <Mail  class="w-8"/>
     <Logofestival2 class="w-8"/>
    </div>







    

    <h2 class="text-2xl underline underline-offset-4 mt-5">Composants</h2>

        <div class=" grid grid-cols-5">  
   <Card/>
   <CardgoodiesView/>
   <Bouton2>Hover Me</Bouton2>
   <BoutonstrokeView>Hover Me</BoutonstrokeView>
   <Box/>
  
 </div>
  <div
    class="
      bg-gradient-to-r
      from-cyan-500
      to-blue-500
      pb-4
      text-white text-lg
      mt-5
    "
  >
    <div class="ml-3">
      <p class="font-medium mt-5">Valentin Saraiva</p>
      <p class="font-medium inline-block">C1</p>
     
    </div>
  </div>





<div class=" mx-auto grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] max-w-7xl ">
    <ArtisteCard  image="/images/artistes/Cantat.png" nom="Bertrant Cantat" genre="Rock"/>
     <ArtisteCard  image="/images/artistes/Kyo.png" nom="Kyo" genre="Pop Rock"/>
       <ArtisteCard  image="/images/artistes/fatalpicard.png" nom="Les Fatals Picard" genre="Punk"/>
        <ArtisteCard  image="/images/artistes/luke.png" nom="Luke" genre="Rock"/>
       <ArtisteCard  image="/images/artistes/superbus.png" nom="Superbus" genre="Pop Rock"/>
    
</div>









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
import HamburgerMenue1 from '../components/icons/HamburgerMenue.vue';
import Youtube1 from '../components/icons/Youtube.vue';
import Facebook1 from '../components/icons/Facebook.vue';
import Twitter1 from '../components/icons/Twitter.vue';
import Phone1 from '../components/icons/Phone.vue';
import Map1 from '../components/icons/Map.vue';
import Mail1 from '../components/icons/Mail.vue';
import IconLogo from '../components/icons/IconLogo.vue';
import Logofestival1 from '../components/icons/logofestival.vue';
import Logofestival2 from '../components/icons/logofestival.vue';
import Card from '../components/card.vue';
import CardgoodiesView from '../components/CardgoodiesView.vue';
import Bouton from '../bouton.vue';
import BoutonstrokeView from '../components/BoutonstrokeView.vue';
import Box from '../components/box.vue';
import Bouton2 from '../bouton.vue';








export default {
  components: { CardgoodiesViewVue, Titre2View, boutonstroke, titres1, undertitle1, Bouton1, logofestival, LogoFacebook, LogoInstagram, LogoYoutube, LogoTwitter, Mail, Map, Phone, MenuHamburger, HamburgerMenue, Navbar, Bouton1View, Rampage3, SliderView, Titre2View1, Youtube, Facebook, Twitter, Instagram, HamburgerMenue1, Youtube1, Facebook1, Twitter1, Phone1, Map1, Mail1, IconLogo, Logofestival1, Logofestival2, Card, CardgoodiesView, Bouton, BoutonstrokeView, Box, Bouton2 },
};
</script>