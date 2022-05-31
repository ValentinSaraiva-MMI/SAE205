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

    <ArtisteCardView  image="/public/images/Paul2.png" txt="xxx" />

    


       <DateVue
    texte="Samedi 25 Juin  "/>

   <DateVue
    texte="Dimanche 26 Juin "/>

   <DateVue
    texte="Lundi 27 Juin  "/>

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
import ArtisteCardViewVue from "../components/ArtisteCardView.vue"
import ArtisteCardView from "../components/ArtisteCardView.vue"

export default {
    
    name: "ArtisteView",

     components: { DateVue, ArtisteCardViewVue, ArtisteCardView }
   
}</script>