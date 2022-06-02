<template>
  <div class="h-14 w-28 bg-Beige-150">
    <p: src="jour"/>
    <p :src="prix" />
  </div>
</template>

<script>
export default {
  name: "BoxBilleterieView",
  components: {},
  props: {
    jour: {
      type: String,
    },

    prix: {
      type: String,
    },
  },
};
</script>