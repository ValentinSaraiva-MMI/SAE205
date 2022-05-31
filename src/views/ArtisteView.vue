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

<div class="mx-auto text-Beige-150
">Tous </div>
<div class="mx-auto text-[#9F9B8F] " >Rock</div>
<div class="mx-auto text-[#9F9B8F] " >Pop Rock</div>
<div class="mx-auto text-[#9F9B8F] " >Punk</div>
 </div>

<div class="grid grid-cols-3 p-3 lg:text-xl font-oswald ">

<div class="mx-auto text-[#9F9B8F] " >Meta</div>
<div class="mx-auto text-[#9F9B8F] " >Hard Rock</div>
<div class="mx-auto text-[#9F9B8F] " >Blues</div>
</div>



<div class="ml-4">


   <DateVue
    texte="Vendredi 24 Juin  "/>

<div class=" mx-auto grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] max-w-7xl ">
    <ArtisteCard  image="/images/artistes/Cantat.png" nom="Bertrant Cantat" genre="Rock"/>
     <ArtisteCard  image="/images/artistes/Kyo.png" nom="Kyo" genre="Pop Rock"/>
       <ArtisteCard  image="/images/artistes/fatalpicard.png" nom="Les Fatals Picard" genre="Punk"/>
        <ArtisteCard  image="/images/artistes/luke.png" nom="Luke" genre="Rock"/>
       <ArtisteCard  image="/images/artistes/superbus.png" nom="Superbus" genre="Pop Rock"/>
    
</div>
       <DateVue
    texte="Samedi 25 Juin  "/>

    <div class=" mx-auto grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] max-w-7xl ">
    <ArtisteCard  image="/images/artistes/fallen.png" nom="Fallen Lillies" genre="Metal"/>
     <ArtisteCard  image="/images/artistes/jbg.png" nom="Jean-Baptiste" genre="Rock"/>
       <ArtisteCard  image="/images/artistes/tagadajones.png" nom="Tagada Jones" genre="Punk"/>
        <ArtisteCard  image="/images/artistes/gotthard.png" nom="Gotthard" genre="Hard rock"/>
       <ArtisteCard  image="/images/artistes/sidilarsen.png" nom="Sidilarsen" genre="Metal"/>
        <ArtisteCard  image="/images/artistes/saez.png" nom="Saez" genre="Rock"/>
    
</div>
    

   <DateVue
    texte="Dimanche 26 Juin "/>
    <div class=" mx-auto grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] max-w-7xl ">
    <ArtisteCard  image="/images/artistes/Sailor.png" nom="Sailor Jerry's" genre="Blues"/>
     <ArtisteCard  image="/images/artistes/buskers.png" nom="The Buskers" genre="Blues "/>
       <ArtisteCard  image="/images/artistes/trust.png" nom="Trust" genre="Hard Rock"/>
        <ArtisteCard  image="/images/artistes/tracklist.png" nom="Tracklist" genre="Rock"/>
       <ArtisteCard  image="/images/artistes/shatter.png" nom="Shattered Blooms" genre="Punk"/>
    
</div>

   <DateVue
    texte="Lundi 27 Juin  "/>
    <div class=" mx-auto grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] max-w-7xl ">
    <ArtisteCard  image="/images/artistes/tya.png" nom="Ten Years After" genre="Blues"/>
     <ArtisteCard  image="/images/artistes/skip.png" nom="Skip the Use" genre="Pop Rock"/>
       <ArtisteCard  image="/images/artistes/blackbomba.png" nom="Black Bomb A" genre="Punk"/>
        <ArtisteCard  image="/images/artistes/kawaii.png" nom="Kawaii Bukake" genre="Punk"/>
       <ArtisteCard  image="/images/artistes/younger.png" nom="Younger Hunger" genre="Pop Rock"/>
    
</div>


</div>


<!--   
 <ul >
 
 
  <li class="flex flex-auto mx-2  text-base font-oswald text-Beige-150 "><router-link to="/programmation">Programmation</router-link></li>
  <li class="flex flex-auto mx-2  text-base font-oswald text-Beige-150" ><router-link to="/artiste">Artiste</router-link></li>
  <li class="flex flex-auto mx-2  text-base font-oswald text-Beige-150" ><router-link to="/festival">Festival</router-link></li>
    <li class="flex flex-auto mx-2 text-base font-oswald text-Beige-150" ><router-link to="/contact">Contact</router-link></li>

</ul>
 -->

</div>
</template>

<script>

import DateVue from "../components/DatePageartiste.vue"
import ArtisteCard from "../components/ArtisteCardView.vue"

export default {
    
    name: "ArtisteView",

     components: { DateVue, ArtisteCard }
   
}</script>