<template>
    
</template>



<script>

import DateVue from "../components/DatePageartiste.vue"
import ArtisteCard from "../components/ArtisteCardView.vue"

export default {
    
    name: "ArtisteDynamiqueView",
    data: function() {
      return {
        listeartistes:[],
      }
    },



     components: { DateVue, ArtisteCard }
   
}</script>