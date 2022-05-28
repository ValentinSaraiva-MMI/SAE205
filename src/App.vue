<template>
 <div class="font-oswald text-Beige-150">
   Test
</div>


 <logofestival />



</template>

<script>
//logo Menu Hamburger 

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




export default {
  components: {logofestival,LogoFacebook,LogoInstagram,LogoYoutube,LogoTwitter,Mail,Map,Phone,},
};
</script>




