<template>
   <div class="bg-noir">



<div class="  pt-4">


    <span class=" sm:ml-2   md:ml-4 lg:ml-5 xl:ml-8 font-oswald md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl  inline text-2xl font-medium  text-Beige-150"
      > LES ARTISTES </span
    >
   <div class="w-2/6 h-1  lg:h2 md:h-2  bg-Beige-150"></div>


</div>

<div>

</div>

<div class="grid grid-cols-4 mt-3  font-oswald lg:text-xl  gap-2">

 <RouterLink to="/artiste">   
<div class=" text-center text-[#9F9B8F]
">Tous </div>
 </RouterLink> 



 <RouterLink to="/artisterock">   
<div class="mx-auto text-Beige-150 " >Rock</div>
 </RouterLink> 
<div class="mx-auto text-[#9F9B8F] " >Pop Rock</div>
<div class="mx-auto text-[#9F9B8F] " >Punk</div>
 </div>

<div class="grid grid-cols-3 p-3 lg:text-xl font-oswald ">

<div class="mx-auto text-[#9F9B8F] " >Meta</div>
<div class="mx-auto text-[#9F9B8F] " >Hard Rock</div>
<div class="mx-auto text-[#9F9B8F] " >Blues</div>





<div class="ml-4">


   <DateVue
    texte="Vendredi 24 Juin  "/>

<div class=" mx-auto grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] max-w-7xl ">
    <ArtisteCard  image="/images/artistes/Cantat.png" nom="Bertrant Cantat" genre="Rock"/>


        <ArtisteCard  image="/images/artistes/luke.png" nom="Luke" genre="Rock"/>
       
    
</div>
       <DateVue
    texte="Samedi 25 Juin  "/>

    <div class=" mx-auto grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] max-w-7xl ">

     <ArtisteCard  image="/images/artistes/jbg.png" nom="Jean-Baptiste" genre="Rock"/>
   
        <ArtisteCard  image="/images/artistes/saez.png" nom="Saez" genre="Rock"/>
    
</div>
    

   <DateVue
    texte="Dimanche 26 Juin "/>
    <div class=" mx-auto grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] max-w-7xl ">

        <ArtisteCard  image="/images/artistes/tracklist.png" nom="Tracklist" genre="Rock"/>
 
    </div>
</div>



</div>

</div>


</template>

<script>

import DateVue from "../components/DatePageartiste.vue"
import ArtisteCard from "../components/ArtisteCardView.vue"

export default {
    
    name: "ArtisteRockView",

     components: { DateVue, ArtisteCard }
   
}</script>