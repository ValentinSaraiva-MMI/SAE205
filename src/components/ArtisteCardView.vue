<template>
<div>

<!-- 
    <p class="text-center text-3xl mt-2 text-white font-bold">
      {{nbr}}
     </p>
             -->

    <div class="w-[325px] h-[308px] relative">
  <img
    :src=image class="w-[325px] h-[260px] absolute left-[-1px] top-[-1px] object-cover" alt="image d'artiste"
  />
  <div class="w-[325px] h-[260px] absolute left-[-1px] top-[-1px] bg-[#c4c4c4]/50"></div>
  <p class="w-[325px] absolute left-0 top-64 text-[28px] text-center text-[#d4cebd]">
    Bertrand Cantat
  </p>
  <div class="w-[77px] h-[33px] absolute left-[247px] top-[-1px] bg-[#d4cebd]"></div>
  <p class="w-[77px] absolute left-[248px] top-1 text-base text-left">Hard Rock</p>
</div>


 



   {{genre}}

      {{nbr}}
     
    {{image}}

    </div>



</template>

<script>
export default {
  name: 'ArtisteCard',
  props:{
    nom: 
    {type: String},
  image: 
    {type: String},

   genre: 
    {type: String},
  }
}
</script>
