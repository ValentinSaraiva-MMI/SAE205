<template>
  <figure class="m-4 flex h-auto w-auto flex-col">
    <img class="h-44 w-44 rounded-t-lg object-cover" :src="image" alt="logo logiciel" />

    <p class="mt-2 text-center text-lg font-normal text-white">
      {{ nom }}
    </p>
  </figure>
</template>

<script>
export default {
  name: "cardComponent",
  components: {},
  props: {
    image: {
      type: String,
    },

    nom: {
      type: String,
    },
  },
};
</script>
