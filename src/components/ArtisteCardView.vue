<template>
  <!-- 
    <p class="text-center text-3xl mt-2 text-white font-bold">
      {{nbr}}
     </p>
             -->

  <div class="relative h-[308px] w-[325px]">
    <img :src="image" class="absolute left-[-1px] top-[-1px] h-[260px] w-[325px] object-cover" alt="image d'artiste" />
    <div class="absolute left-[-1px] top-[-1px] h-[260px] w-[325px]"></div>

    <p class="absolute left-0 top-64 w-[325px] text-center font-oswald text-[28px] text-[#d4cebd]">
      {{ nom }}
    </p>

    <p class="absolute left-[247px] top-[-1px] h-[28px] w-[77px] bg-[#d4cebd] text-center font-oswald">
      {{ genre }}
    </p>
  </div>
</template>

<script>
export default {
  name: "ArtisteCard",
  props: {
    nom: { type: String },
    image: { type: String },

    genre: { type: String },
  },
};
</script>
