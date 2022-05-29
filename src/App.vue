<template>

<div class="inline-flex w-full">
<logofestival class="w-7 ml-3 "/>
<navbar />

</div>



</template>

<script>
//logo Menu Hamburger 
import MenuHamburger from "../src/components/icons/HamburgerMenue.vue"
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




export default {
  components: { logofestival, LogoFacebook, LogoInstagram, LogoYoutube, LogoTwitter, Mail, Map, Phone, MenuHamburger, HamburgerMenue, Navbar,},
};
</script>




